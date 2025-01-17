import React from 'react';
// import Footer from './Footer'; // Footer component for the page footer
// import MoreNews from './MoreNews'; // MoreNews component for additional news items
import { LiaLinkedinIn } from "react-icons/lia";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { TbClover } from "react-icons/tb";

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
              <TbClover className="h-5 w-5" />
              <span className="text-sm font-medium">ARTICLE</span>
            </button>
            <hr className="my-2" />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500" aria-label="Twitter">
              <RiTwitterXLine className="h-6 w-6 bg-blue-600 rounded-sm" />
            </a>
            <a href="#" className="text-white hover:text-blue-500" aria-label="Facebook">
              <TiSocialFacebook className="h-6 w-6 bg-blue-500 rounded-sm" />
            </a>
            <a href="#" className="text-white hover:text-blue-500" aria-label="LinkedIn">
              <LiaLinkedinIn className="h-6 w-6 bg-blue-400 rounded-sm" />
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
              <br />
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
                className="w-full"
                src="./image/acs.jpg" // Updated path
                alt="Solar Sail with Composite Booms"
                loading="lazy"
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
    </div>
  );
}

export default NewsPage;
