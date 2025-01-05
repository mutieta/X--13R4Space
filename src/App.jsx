// App.jsx
import React from 'react';
import Navbar from './assets/components/Navbar';
import LandingPage from './assets/components/LandingPage';
import FeatureNews from './assets/components/FeaturedNews';
import Science from './assets/components/Science';
import VideoHighlight from './assets/components/VideoHighlight';
import EarthInfoCenter from './assets/components/EarthInfoCenter';
import ImageOfTheDay from './assets/components/ImageOfTheDay';
import Explore from './assets/components/Explore';
import ImageNasa from './assets/components/ImageNasa';
import MoreNews from './assets/components/MoreNews';
import Footer from './assets/components/Footer';
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
      <Explore />
      <MoreNews />
      <Footer />
    </div>
  )
}

export default App;