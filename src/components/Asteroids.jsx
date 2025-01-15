import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Asteroids = () => {
  const [featuredItems, setFeaturedItems] = useState([
    {
      title: "What's Up: November 2024",
      description: "This month, Saturn shines in the south most of the night, Jupiter rises in the early evening alongside Taurus and Orion, while Mars trails a couple of hours behind, visible high in the early morning sky.",
      image: "url-to-your-image-1",
      link: "#",
      extraInfo: "Jupiter is high overhead below with the bright stars of Taurus and Orion. Jupiter is the bright object at top, right of center.",
      photographer: "NASA/Preston Dyches"
    },
    {
      title: "What is a Supermoon?",
      description: "A supermoon occurs when the Moon's orbit is closest (perigee) to Earth at the same time the Moon is full. So what's so special about a supermoon? For the interested observer, there's plenty to see and learn.",
      image: "url-to-your-image-2",
      link: "#",
      extraInfo: "The moon, or supermoon, is seen as it sets over the Martin Luther King Jr. Memorial on Monday, Nov. 14, 2016.",
      photographer: "NASA/Aubrey Gemignani"
    }
  ]);

  // Reverse the order of the items so the second one comes first
  const reversedItems = [...featuredItems].reverse();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative h-screen bg-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/image/sky-watching.webp)", // Ensure the path is correct based on your file structure
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex items-end justify-start h-4/5 text-white px-8 pb-16">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold">Skywatching</h1>
            <p className="text-lg md:text-2xl mt-4 text-white-300">
              Tips, guides, and activities for skywatchers.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Section with White Background */}
      <div className="max-w-7xl mx-auto p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-black">Featured</h1>
        <div className="space-y-8">
          {reversedItems.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
             
              {/* Image Block */}
              <div className={index === 1 ? "order-1 md:order-2" : "order-2 md:order-1"}>
                <img src={item.image} alt="Featured image" className="w-full h-auto object-cover rounded-md" />
              </div>
              
               {/* Text Block */}
               <div className={index === 1 ? "order-2 md:order-1" : "order-1 md:order-2"}>
                <h2 className="text-xl font-bold mb-2 text-black">{`0${index + 1} ${item.title}`}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <a href={item.link} className="text-red-600 font-semibold">Explore</a>
                <p className="mt-4 text-gray-500 text-sm">{item.extraInfo}</p>
                <p className="text-gray-500 text-sm">{item.photographer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Asteroids;
