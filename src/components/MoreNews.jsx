import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is correctly imported

const News = () => {
  const navigate = useNavigate();

  const moreNews = [
    { title: "APOD", image: "path-to-apod-image", link: "/news" },
    { title: "SpaceX Mission", image: "path-to-spacex-image", link: "/news" },
    { title: "People of NASA Science", image: "path-to-nasa-image", link: "/news" },
    { title: "Skywatching", image: "path-to-skywatching-image", link: "/news" },
    { title: "Mars Exploration", image: "path-to-mars-image", link: "/news" },
    { title: "Astrobiology", image: "path-to-astrobiology-image", link: "/news" },
    { title: "Planetary Defense", image: "path-to-defense-image", link: "/news" },
    { title: "Climate Change", image: "path-to-climate-change-image", link: "/news" },
  ];

  return (
    <div className="bg-white py-12 px-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold text-gray-800">More Topics From NASA</h2>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {moreNews.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.link)}
            className="relative group bg-black text-white overflow-hidden cursor-pointer"
          >
            <img
              src={item.image || "path-to-placeholder-image"}
              alt={item.title}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <div className="absolute bottom-4 right-4 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
