import React from 'react';

const News = () => {
  const moreNews = [
    { title: "APOD", image: "path-to-apod-image", link: "/apod" },
    { title: "SpaceX Mission", image: "path-to-spacex-image", link: "/spacex-mission" },
    { title: "People of NASA Science", image: "path-to-nasa-image", link: "/nasa-people" },
    { title: "Skywatching", image: "path-to-skywatching-image", link: "/skywatching" },
    { title: "Mars Exploration", image: "path-to-mars-image", link: "/mars-exploration" },
    { title: "Astrobiology", image: "path-to-astrobiology-image", link: "/astrobiology" },
    { title: "Planetary Defense", image: "path-to-defense-image", link: "/planetary-defense" },
    { title: "Climate Change", image: "path-to-climate-change-image", link: "/climate-change" },
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

export default News;
