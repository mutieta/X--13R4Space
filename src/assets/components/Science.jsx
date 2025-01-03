import React from 'react';
import { TiArrowRightThick } from "react-icons/ti";

const Science = () => {
  const scienceData = [
    { title: "APOD", image: "path-to-apod-image", link: "/apod" },
    { title: "SpaceX Mission", image: "path-to-spacex-image", link: "/spacex-mission" },
    { title: "People of NASA Science", image: "path-to-nasa-image", link: "/nasa-people" },
    { title: "Skywatching", image: "path-to-skywatching-image", link: "/skywatching" },
  ];

  return (
    <div className="bg-white py-12 px-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-gray-800">Science</h2>
          <div className="flex items-center space-x-2">
            <a href="/more-news" className="text-black-600 font-bold hover:underline">
              Doscover more
            </a>
            <span className="w-6 h-6 flex items-center justify-center border-4 border-red-500 text-red-500 rounded-full text-sm">
            <TiArrowRightThick />
            </span>

          </div>
        </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {scienceData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="relative group bg-black text-white overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <div className="absolute bottom-4 right-4 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Science;
