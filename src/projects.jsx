import React from 'react';

import img1 from './images/reconomy-logo.png';
import img2 from './images/IMG_3828.jpeg';
import img3 from './images/weatherapps-android-1weather-5b751ae9c9e77c0057fc06d5.jpg';
import img4 from './images/IMG_3849.jpeg';
export const projectData = [
  {
    id: 1,
    title: 'Reconomy Check-In App',
    description: 'Check-in system and admin dashboard designed for Reconomy AB. A full-stack employee time-tracking system built with Node.js, Express, and MySQL, featuring Employee Management , Create, update, and filter employee records Time Logging , Log check-in/out events with optional comments Admin Login , Session-based authentication for protected routes Cross-Origin Support , Fully functional CORS setup for Netlify Heroku deployment, Backend hosted on Heroku, frontend on Netlify',
    img: img1,
    github: 'https://github.com/phenomenalCode/Reconomy',
  },
  {
    id: 2,
    title: 'Happy Thoughts',
    description: 'Happy Thoughts is a full-stack web app where users can post uplifting messages, like others thoughts, and manage their own posts. It includes user authentication, random thought display, and like tracking.Tools used: React, MUI, Node.js, Express, MongoDB (Mongoose), JWT, Netlify, Render.',
    img: img2,
    github: 'https://github.com/phenomenalCode/js-project-happy-thoughts/tree/happywbackend',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A simple weather forecast app. It displays current weather and a 4-day forecast using the OpenWeatherMap API. Users can search cities or cycle through presets (Stockholm, Gothenburg, Oslo). It shows temperature, weather icons, sunrise/sunset times, and updates the background dynamically based on conditions. Weather data is cached using localStorage.',
    img: img3,
    github: 'https://github.com/phenomenalCode/weather-app',
  },
  {
    id: 4,
    title: 'Task manager',
    description: 'A React To-Do List app with task and project management, dark mode, filtering, and sorting. It uses Zustand for state management and Material-UI for a responsive, stylish interface. Tasks and projects are saved in localStorage for persistence.',
    img: img4,
    github: 'https://github.com/phenomenalCode/to-do-list-app',
  },
];


const Projects = ({ projectData }) => {
    return (
        <div className="projects">
          <div id="projects"></div>
        <h2>My Projects</h2>
        <div className="project-list">
            {projectData.map((project) => (
            <div key={project.id} className="project-card">
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.github && (
                <a href={project.github} target="https://github.com/phenomenalCode/react_portfolio.git" rel="noopener noreferrer">
                    View on GitHub
                </a>
                )}
            </div>
            ))}
        </div>
        </div> 
  );
};

export default Projects;