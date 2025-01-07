import React from "react";
import { useNavigate } from "react-router-dom";
import EarthInfoCenter from "./EarthInfoCenter";
import Explore from "./Explore";
import Footer from "./Footer";
import ImageNasa from "./ImageNasa";
import ImageOfTheDay from "./ImageOfTheDay";
import MoreNews from "./MoreNews";
import Science from "./Science";
import VideoHighlight from "./VideoHighlight";
import FeatureNews from "./FeatureNews";


function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
    <section
      className="relative w-full h-screen bg-black flex items-center justify-start px-8"
      style={{
        backgroundImage: `url(/image/image.png)`, // Correct file path to the image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-xl pl-12 text-white">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">The Journey Begins</h1>
        {/* Description */}
        <p className="text-lg mb-6">
          X-Æ13R4Space is a space adventure that will take users to explore
          beyond comic travel, back and forth through the timeline. Take a
          moment to explore and enjoy the sensation.
        </p>
        {/* Call-to-Action Button */}
        <button className="px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 focus:outline-none">
          Invention & Technology
        </button>

      </div>
    </section>
    <FeatureNews />
    <Science />
    <VideoHighlight />
    <EarthInfoCenter />
    <ImageOfTheDay />
    <ImageNasa />
    <Explore />
    <MoreNews />
    <Footer />
  </>
  );
}

export default LandingPage;