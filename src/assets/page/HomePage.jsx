// App.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import FeatureNews from '../components/FeaturedNews';
import Science from '../components/Science';
import VideoHighlight from '../components/VideoHighlight';
import EarthInfoCenter from '../components/EarthInfoCenter';
import ImageOfTheDay from '../components/ImageOfTheDay';
import Explore from '../components/Explore';
import ImageNasa from '../components/ImageNasa';
import MoreNews from '../components/MoreNews';
import Footer from '../components/Footer';
import './index.css';

function HomePage() {
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

export default HomePage;