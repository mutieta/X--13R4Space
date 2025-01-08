const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();

const db =require('./db_config/db');

app.use(cors());
app.use(express.json());


app.post('/register', (req, res) => {
  const { email, username, firstname, lastname, password } = req.body;

  const sql = 'INSERT INTO user (email, username, first_name, last_name, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [email, username, firstname, lastname, password], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ message: 'Error registering user' });
    }
    res.status(200).json({ 
      message: 'Registration successful', 
      iduser: result.insertId,
      firstname: firstname,
      lastname: lastname,
    });
  });
});


app.post('/login',(req,res)=>{
  const {username,password}=req.body;

  const sql ='SELECT iduser,email,username,first_name AS firstname,last_name AS lastname FROM user WHERE (username=? OR email=?) AND password =?';
  db.query(sql,[username ,username,password],(err,result)=>{
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (result.length > 0) {
      res.status(200).json({
        message: 'Login successful',
        iduser: result[0].iduser,
        firstname: result[0].firstname,
        lastname: result[0].lastname,
        username: result[0].username,
        email: result[0].email,
        });
    } else {
      res.status(401).json({ message: 'Invalid username/email or password' });
    }
  });
});
app.post('/jobpost', (req, res) => {
  const { job_title, workplace, job_type, company, job_location,contact, description, iduser } = req.body;

  if (!iduser) {
      return res.status(400).json({ message: 'User ID is required' });
  }

  const sql = 'INSERT INTO job (job_title, workplace, job_type, company, job_location,contact, description, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [job_title, workplace, job_type, company, job_location,contact, description, iduser], (err, result) => {
      if (err) {
          console.error('Error posting job:', err);
          return res.status(500).json({ message: 'Error posting job' });
      }
      res.status(200).json({ message: 'Job posted successfully', jobID: result.insertId });
  });
});

app.get('/jobs', (req, res) => {
  db.query('SELECT * FROM job', (err, results) => {
    if (err) {
      console.error('Error fetching jobs:', err);
      return res.status(500).json({ message: 'Error fetching jobs' });
    }

    const formattedJobs = results.map(job => ({
      id: job.jobID,
      iduser: job.user_id, 
      title: job.job_title,
      company: job.company,
      location: job.job_location,
      type: job.job_type,
      workplace: job.workplace,
      contact: job.contact,
      details: { description: job.description },
    }));

    res.status(200).json(formattedJobs);
  });
});

  
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


app.post('/edituser', (req, res) => {
  const { iduser, bios, city, country } = req.body;

  if (!iduser || isNaN(iduser)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  // First, check if the user already has a record in the user_bios table
  const checkSql = 'SELECT * FROM user_bios WHERE user_id = ?';
  db.query(checkSql, [iduser], (err, result) => {
    if (err) {
      console.error('Error checking user_bios:', err);
      return res.status(500).json({ message: 'Error checking user profile' });
    }

    if (result.length > 0) {
      // User has an existing profile, so we perform an UPDATE
      const updateSql = 'UPDATE user_bios SET bios = ?, city = ?, country = ? WHERE user_id = ?';
      db.query(updateSql, [bios, city, country, iduser], (err, updateResult) => {
        if (err) {
          console.error('Error updating user_bios:', err);
          return res.status(500).json({ message: 'Error updating user profile' });
        }
        res.status(200).json({ message: 'Profile updated successfully' });
      });
    } else {
      // No existing profile, so we INSERT a new record
      const insertSql = 'INSERT INTO user_bios (user_id, bios, city, country) VALUES (?, ?, ?, ?)';
      db.query(insertSql, [iduser, bios, city, country], (err, insertResult) => {
        if (err) {
          console.error('Error inserting user_bios:', err.message);
          return res.status(500).json({ message: 'Error inserting user profile' });
        }
        res.status(200).json({ message: 'Profile created successfully' });
      });
    }
  });
});

app.get('/selectuser', (req, res) => {
  const iduser = req.query.iduser;  // Use query params to get the iduser

  if (!iduser || isNaN(iduser)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  const sql = 'SELECT * FROM user_bios WHERE user_id = ?';
  db.query(sql, [iduser], (err, result) => {
    if (err) {
      console.error('Error fetching user profile:', err);
      return res.status(500).json({ message: 'Error fetching user profile' });
    }

    if (result.length > 0) {
      res.status(200).json({
        bios: result[0].bios,
        city: result[0].city,
        country: result[0].country,
      });
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  });
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
