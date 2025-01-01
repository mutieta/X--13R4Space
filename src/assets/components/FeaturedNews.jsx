import React from "react";

function FeatureNews() {
  // Featured Articles Data
  const featuredArticles = [
    {
      type: "ARTICLE",
      time: "6 MIN READ",
      title: "Why NASA's SPHEREx Mission Will Make 'Most Colorful' Cosmic Map Ever",
      image: "/path/to/large-image.jpg", // Replace with actual image path
    },
    {
      type: "ARTICLE",
      time: "3 MIN READ",
      title: "Buckle Up: NASA-Funded Study Explores Turbulence in Molecular Clouds",
      image: "/path/to/small-image1.jpg", // Replace with actual image path
    },
    {
      type: "NEWS RELEASE",
      time: "4 MIN READ",
      title: "NASA Sets Coverage for SpaceX 31st Station Resupply Launch, Arrival",
      image: "/path/to/small-image2.jpg", // Replace with actual image path
    },
    {
      type: "NEWS RELEASE",
      time: "2 MIN READ",
      title: "NASA Sets Coverage for its SpaceX Crew-9 Dragon Station Relocation",
      image: "/path/to/small-image3.jpg", // Replace with actual image path
    },
  ];

  // Article Thumbnails Data
  const articleThumbnails = [
    {
      type: "ARTICLE",
      time: "5 MIN READ",
      title: "NASA, NOAA Rank 2024 Ozone Hole as 7th-Smallest Since Records Began",
      image: "/path/to/thumbnail1.jpg", // Replace with actual image path
    },
    {
      type: "ARTICLE",
      time: "4 MIN READ",
      title: "International SWOT Satellite Spots Planet-Tumbling Greenland Tsunami",
      image: "/path/to/thumbnail2.jpg", // Replace with actual image path
    },
    {
      type: "ARTICLE",
      time: "4 MIN READ",
      title: "NASA Helps Find Thawing Permafrost Adds to Near-Term Global Warming",
      image: "/path/to/thumbnail3.jpg", // Replace with actual image path
    },
    {
      type: "ARTICLE",
      time: "5 MIN READ",
      title: "How NASA’s Lunar Trailblazer Could Decipher the Moon’s Icy Secrets",
      image: "/path/to/thumbnail4.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="px-8 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-gray-800">Featured News</h2>
          <div className="flex items-center space-x-2">
            <a href="/more-news" className="text-black-600 font-bold hover:underline">
              More NASA News
            </a>
            <span className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full text-sm">
              →
            </span>
          </div>
        </div>

        {/* Main Articles Section */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large Feature Article */}
          <div className="col-span-6">
            <div
              className="relative bg-cover bg-center overflow-hidden h-96"
              style={{
                backgroundImage: `url(${featuredArticles[0].image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
                <p className="text-sm text-white mb-2">{featuredArticles[0].type}</p>
                <h3 className="text-2xl text-white font-bold mb-2">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-sm text-gray-300">{featuredArticles[0].time}</p>
              </div>
            </div>
          </div>

          {/* Small Feature Articles */}
          <div className="col-span-4 space-y-6">
            {featuredArticles.slice(1).map((article, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center overflow-hidden h-28"
                style={{
                  backgroundImage: `url(${article.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                  <p className="text-sm text-white mb-1">{article.type}</p>
                  <h3 className="text-md text-white font-bold">{article.title}</h3>
                  <p className="text-xs text-gray-300">{article.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnails Section */}
        <div className="mt-8 flex justify-between">
          {articleThumbnails.map((thumbnail, index) => (
            <div key={index} className="flex items-center w-1/5">
              {/* Left side: Circle image with grayscale */}
              <div
                className="w-16 h-16 bg-cover bg-center rounded-full mr-3"
                style={{
                  backgroundImage: `url(${thumbnail.image})`,
                  filter: 'grayscale(100%)', // Apply grayscale filter to simulate gray image
                }}
              ></div>

              {/* Right side: Time and Title */}
              <div>
                <p className="text-xs text-gray-500">{thumbnail.time}</p>
                <p className="text-xs font-medium text-gray-700">{thumbnail.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeatureNews;
