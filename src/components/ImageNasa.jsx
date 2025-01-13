import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageNasa = () => {
  const [galleries, setGalleries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      const API_KEY = "vnoaoLR3rJQnYM0wfwSWTnssu967Vp173oqakocY"; // Replace with your NASA API key
      const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${vnoaoLR3rJQnYM0wfwSWTnssu967Vp173oqakocY}&count=3`;

      setIsLoading(true);

      try {
        const response = await axios.get(API_URL);

        // Map the response data into the gallery format
        const fetchedGalleries = response.data.map((item) => ({
          title: item.title,
          images: 1, // Each APOD entry is a single image
          imgSrc: item.url,
          description: item.explanation,
        }));

        setGalleries(fetchedGalleries);
      } catch (err) {
        setError('Failed to fetch images. Please try again later.');
        console.error('Error fetching gallery data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">More NASA Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleries.map((gallery, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={gallery.imgSrc}
              alt={gallery.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{gallery.title}</h3>
              <p className="text-gray-600">{gallery.images} IMAGE</p>
              <p className="text-sm text-gray-500 mt-2">{gallery.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageNasa;
