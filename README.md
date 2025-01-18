# X-Æ13R4Space

## Project Overview

X-Æ13R4Space is a web application that provides information about SpaceX missions, NASA news, and other space-related content. The application fetches data from various APIs and displays it in an interactive and user-friendly interface.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **SpaceX Missions**: View and search for SpaceX missions with detailed information.
- **NASA News**: Stay updated with the latest news and articles from NASA.
- **Video Highlights**: Watch video highlights of space missions and events.
- **Interactive Map**: Explore space events on an interactive map using `react-leaflet`.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/xospace.git
   cd xospace
2. Install the dependencies:
   ```sh
   npm install
3. Start the development server:
   ```sh
   npm run dev

Usage
Open your browser and navigate to http://localhost:3000 to view the application.
Use the search bar to find specific SpaceX missions.
Click on a mission to view detailed information.
Explore the latest NASA news and articles.
Watch video highlights of space missions and events.

#Project Structure
```sh
xospace/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SpaceXmission.jsx
│   │   ├── MissionSummarize.jsx
│   │   ├── FeatureNews.jsx
│   │   ├── VideoHighlight.jsx
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md

```
Dependencies
React: A JavaScript library for building user interfaces.
react-router-dom: Declarative routing for React applications.
react-leaflet: React components for Leaflet maps.
tailwindcss: A utility-first CSS framework for rapid UI development.
react-icons: Popular icons as React components.
Contributing
Contributions are welcome! Please follow these steps to contribute:  
