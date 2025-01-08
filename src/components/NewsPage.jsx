import React from 'react';
import Footer from './Footer'; // Ensure Footer is correctly imported
import MoreNews from './MoreNews'; // Import MoreNews if it is in another file

function NewsPage() {
  return (
    <div className='bg-white'>
      <div className="max-w-4xl mx-auto p-20 bg-white flex flex-col lg:flex-row">
        {/* Sidebar Section */}
        <aside className="lg:w-1/4 pr-8">
          <div className=" text-sm mb-4">
            <p className='font-bold'>Tiernan P. Doyle</p>
            <p className='text-gray-500'>Oct 30, 2024</p>
          </div>
          <div className="mb-4">
            <button className="flex items-center space-x-2 text-gray-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3m5 11h7"></path></svg>
              <span>ARTICLE</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
            </a>
            <a href="#" className="text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
            </a>
            <a href="#" className="text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
            </a>
            <a href="#" className="text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
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
