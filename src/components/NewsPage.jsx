import React from 'react';
import Footer from './Footer'; // Footer component for the page footer
import MoreNews from './MoreNews'; // MoreNews component for additional news items


function NewsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-20 bg-white flex flex-col lg:flex-row">
        {/* Sidebar Section */}
        <aside className="lg:w-1/4 pr-2">
          {/* Author and Date Section */}
          <div className="text-sm mb-4">
            <p className="font-bold text-lg">Tiernan P. Doyle</p>
            <hr className="my-2" />
            <p className="text-gray-500">Oct 30, 2024</p>
            <hr className="my-2" />
          </div>

          {/* Article Button */}
          <div className="mb-4">
            <button className="flex items-center space-x-2 text-gray-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m5 11h7"
                ></path>
              </svg>
              <span className="text-sm font-medium">ARTICLE</span>
            </button>
            <hr className="my-2" />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              {/* Twitter/X Icon */}
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.59 8.59 0 01-2.72 1.04A4.25 4.25 0 0016.11 4c-2.34 0-4.25 1.9-4.25 4.25 0 .33.03.65.1.95C7.69 8.91 4.1 7.11 1.67 4.15a4.26 4.26 0 00-.57 2.14c0 1.47.75 2.76 1.89 3.52-.69-.02-1.33-.21-1.89-.52v.05c0 2.06 1.46 3.78 3.4 4.17-.36.1-.75.16-1.15.16-.28 0-.55-.03-.81-.08.56 1.74 2.17 3 4.09 3.04a8.53 8.53 0 01-5.28 1.82c-.34 0-.67-.02-1-.06a12.07 12.07 0 006.52 1.91c7.83 0 12.12-6.48 12.12-12.1 0-.18 0-.35-.01-.52a8.63 8.63 0 002.14-2.21z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              {/* Facebook Icon */}
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.04c5.5 0 10 4.48 10 10.02 0 4.42-3.58 8.1-8 8.96v-6.35h2.13l.32-2.48h-2.45v-1.6c0-.72.2-1.2 1.24-1.2h1.32v-2.22c-.23-.03-1.02-.1-1.94-.1-1.91 0-3.23 1.17-3.23 3.31v1.85h-2.17v2.48h2.17V21c-4.42-.87-8-4.54-8-8.96 0-5.54 4.5-10.02 10-10.02z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              {/* LinkedIn Icon */}
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5C1.11 6 0 4.88 0 3.5S1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.75 7h3.5v12h-3.5zM9 7h3v1.69h.04c.42-.76 1.44-1.56 2.96-1.56 3.17 0 3.76 2.09 3.76 4.81v5.06h-3.5v-4.48c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.17-1.72 2.37v4.55h-3.5V7z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              {/* RSS Icon */}
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.33 18.22a1.89 1.89 0 110-3.77 1.89 1.89 0 010 3.77zm.49-4.9a8.8 8.8 0 018.77 8.77H13.1a6.68 6.68 0 00-6.67-6.67zm0-4.92a13.72 13.72 0 0113.68 13.68h-2.44a11.23 11.23 0 00-11.24-11.24z"></path>
              </svg>
            </a>
          </div>
        </aside>

        {/* Main Content Section */}
        <main className="lg:w-3/4">
          <div className="text-gray-500 text-xs mb-4">
            <p>4 MIN READ</p>
          </div>
          <article className="prose">
            <h1 className="text-gray-800 text-4xl font-bold">
              NASA Technologies Named Among TIME Inventions of 2024
            </h1>
            <div className="my-4 pt-20">
              <p>
                As NASA continues to innovate for the benefit of humanity, agency inventions that use
                new structures to harness sunlight for space travel, enable communications with
                spacecraft at record-breaking distances, and determine the habitability of a moon of
                Jupiter, were named Wednesday among TIME’s Inventions of 2024.
              </p>
              <br></br>
              <p>
                "The NASA workforce — wizards, I call them — have been at the forefront of invention
                and technology for more than 65 years," said NASA Administrator Bill Nelson. "From
                developing Europa Clipper, the largest satellite for a planetary mission that NASA has
                ever launched, to the Advanced Composite Solar Sail System, and communicating with
                lasers from deep space, NASA is improving our understanding of life on Earth — and the
                cosmos — for the benefit of all."
              </p>
              <h2 className="text-xl font-semibold mt-6">
                Solar Sailing with Composite Booms
              </h2>
            </div>
            <div className="my-6">
              <img
                className="w-full rounded-lg"
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/solar-sail.jpg"
                alt="Solar Sail with Composite Booms"
              />
              <p className="text-gray-600 text-sm mt-2">
                Meisa Perez, left, holds a deployable solar panel as Doug Tarr, right, secures it to the
                Advanced Composite Solar Sail System’s mechanical test fixture inside Building N239 at
                NASA’s Ames Research Center.
              </p>
            </div>
          </article>
        </main>
      </div>
      <MoreNews />
      <Footer />
    </div>
  );
}

export default NewsPage;
