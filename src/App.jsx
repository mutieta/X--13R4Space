// App.jsx
import React from 'react';
import Navbar from './assets/components/Navbar';
import LandingPage from './assets/components/LandingPage';
import FeatureNews from './assets/components/FeaturedNews';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage /> 
      <FeatureNews />
    </div>
  )
}

export default App;