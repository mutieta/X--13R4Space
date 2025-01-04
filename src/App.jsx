// App.jsx
import React from 'react';
import Navbar from './assets/components/Navbar';
import LandingPage from './assets/components/LandingPage';
import FeatureNews from './assets/components/FeaturedNews';
import Science from './assets/components/Science';
import VideoHighlight from './assets/components/VideoHighlight';
import EarthInfoCenter from './assets/components/EarthInfoCenter';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage /> 
      <FeatureNews />
      <Science />
      <VideoHighlight />
      <EarthInfoCenter />
    </div>
  )
}

export default App;