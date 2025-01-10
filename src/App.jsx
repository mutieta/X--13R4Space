import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import NewsPage from './components/NewsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Subscribe from "./components/Subscribe";

function App() {
  return (
  
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/news" element={<NewsPage />}/>
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="*" element={<div>404 - Page Not Found</div>}/>
        </Routes>
      </div>
    </BrowserRouter> 
  ); 
}

export default App;
