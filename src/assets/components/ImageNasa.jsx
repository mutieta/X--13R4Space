import React from 'react';

const ImageNasa = () => {
  const galleries = [
    {
      title: 'Native American Heritage Month Gallery',
      images: 34,
      imgSrc: 'path/to/native-american-heritage.jpg', // replace with the actual image path
    },
    {
      title: 'Astronaut Selfies Gallery',
      images: 20,
      imgSrc: 'path/to/astronaut-selfies.jpg', // replace with the actual image path
    },
    {
      title: 'Artemis II Gallery',
      images: 41,
      imgSrc: 'path/to/artemis-ii.jpg', // replace with the actual image path
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">More NASA Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleries.map((gallery, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={gallery.imgSrc} alt={gallery.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{gallery.title}</h3>
              <p className="text-gray-600">{gallery.images} IMAGES</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageNasa;
