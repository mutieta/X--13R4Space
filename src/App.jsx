// App.jsx
import React from 'react';
import Navbar from './assets/components/Navbar';
import LandingPage from './assets/components/LandingPage';
import FeatureNews from './assets/components/FeaturedNews';
import Science from './assets/components/Science';
import VideoHighlight from './assets/components/VideoHighlight';
import EarthInfoCenter from './assets/components/EarthInfoCenter';
import ImageOfTheDay from './assets/components/ImageOfTheDay';
import ImageNasa from './assets/components/ImageNasa';
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
      <ImageOfTheDay />
      <ImageNasa />
    </div>
  )
}

export default App;