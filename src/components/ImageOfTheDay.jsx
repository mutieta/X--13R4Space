import React from 'react';
import { MdSaveAlt } from "react-icons/md";

const ImageOfTheDay = () => {
  // Image URL
  const imageUrl = "/image/galaxy-night-landscape.avif"; // You can replace this with your image URL

  // Function to trigger the download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'witch-nebula.avif'; // You can change the file name here
    link.click();
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white overflow-hidden px-8 py-12 relative">
      {/* Text Section */}
      <div className="flex flex-col justify-center lg:w-1/2 relative lg:pr-8">
        <p className="text-xs uppercase text-gray-400 tracking-wide absolute top-0 left-0 z-10 mb-0">Today</p>
        <h1 className="text-5xl font-bold text-gray-800 absolute top-5 left-0 z-10 mb-8">Image Of The Day</h1>
        <h2 className="text-3xl font-bold text-gray-700 mt-20 mb-2">Witch Nebula Casts Starry Spell</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          A witch appears to be screaming out into space in this image from NASA’s Wide-Field Infrared Survey Explorer, or WISE. The infrared portrait shows the Witch Head nebula, named after its resemblance to the profile of a wicked witch.
        </p>
        <div className="flex items-center mb-2">
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline"
          >
            Browse Image Archive
          </a>
          {/* Red circle with arrow next to the link */}
          <div className="bg-red-500 w-4 h-4 rounded-full flex items-center justify-center ml-2">
            <span className="text-white text-sm">→</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 relative">
        <img
          src={imageUrl}
          alt="Witch Nebula"
          className="w-full h-full object-cover"
        />
        {/* Save Picture Button */}
        <button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
        >
          <MdSaveAlt className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ImageOfTheDay;
