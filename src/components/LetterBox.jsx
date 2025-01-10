import React from "react";

const SignUpLogIn = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
      {/* NASA Logo */}
      <img
        src="path-to-nasa-logo" // Replace with the actual path to the logo
        alt="NASA Logo"
        className="w-20 mb-4"
      />

      {/* Title and Description */}
      <h1 className="text-3xl font-bold mb-2">NASA Newsletter Sign Up</h1>
      <p className="text-center text-sm max-w-md mb-8">
        Stay up-to-date on the latest news from NASA—from Earth to the Moon, the Solar System, and beyond.
      </p>

      {/* Form */}
      <form className="w-full max-w-md">
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2">
            * Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        {/* First Name Field */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Last Name Field */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* City Field */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Country and State/Province Fields */}
        <div className="flex gap-4 mb-4">
          {/* Country */}
          <div className="flex-1">
            <label htmlFor="country" className="block text-sm mb-2">
              Country
            </label>
            <select
              id="country"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option>Select a country</option>
              {/* Add more country options as needed */}
            </select>
          </div>

          {/* State/Province */}
          <div className="flex-1">
            <label htmlFor="state" className="block text-sm mb-2">
              State/Province
            </label>
            <select
              id="state"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option>Select a state or province</option>
              {/* Add more state/province options as needed */}
            </select>
          </div>
        </div>

        {/* ZIP/Postal Field */}
        <div className="mb-4">
          <label htmlFor="zip" className="block text-sm mb-2">
            ZIP/Postal
          </label>
          <input
            type="text"
            id="zip"
            className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Consent Notice */}
        <p className="text-sm text-gray-400 mb-6">
          By submitting this form, you are consenting to receive marketing emails from NASA. 
          You can revoke your consent to receive emails at any time by using the Safe Unsubscribe® link, 
          found at the bottom of every email.
        </p>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold transition"
          >
            Subscribe
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>NASA | 300 E Street SW | Washington, DC 20546 US</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Our Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Constant Contact Data Notice
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SignUpLogIn;
