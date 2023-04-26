import React from 'react';
import ProjectCard from './ProjectCard';

import WeatherApp from '../assets/weatherapp_screen.png';
import Subscribers from '../assets/subscribers_screen.png';
import ReactBadge from '../assets/react-badge-flat.svg';
import TypeScriptBadge from '../assets/typescript-badge.svg';
import TailwindCSSBadge from '../assets/tailwind-badge.svg';
import ReduxBadge from '../assets/redux-badge-flat.svg';
import MUIBadge from '../assets/mui-badge-flat.svg';

const Projects = () => {
  return (
    <div
      name='projects'
      className='w-full min-h-screen text-gray-300 bg-slate-800'
    >
      <div className='max-w-[900px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
        <div className='pt-16'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 md:text-5xl'>
            Projects
          </p>
          <p className='py-6 md:text-2xl'>
            // Check out some of my recent projects
          </p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
          <ProjectCard
            img={WeatherApp}
            title={'React Weather App'}
            description={`Yet another Weather App with React and Tailwind CSS, using openweathermap API. 
            Features: Different units for tempratures, Geolocation, Multiple locations with same or similar name, a Forecast for the following hours, Detailed weather infos.`}
            demoURL={'https://yet-another-weather-forecast.netlify.app/'}
            GitHubRepo={'https://github.com/syzgod/weather-app-to-portfolio'}
            badgeImg={[ReactBadge, TypeScriptBadge, TailwindCSSBadge]}
          />
          <ProjectCard
            img={Subscribers}
            title={'Subscribers'}
            description={`A simple 'Subscribers' list showing Subscribers' cards on different pages with React, Redux Toolkit, and MUI.
          Features: Pagination with cards per page, Dark mode, Toast notifications, Detail modal and Search.`}
            demoURL={'https://subsribers.netlify.app/'}
            GitHubRepo={'https://github.com/syzgod/subscribers'}
            badgeImg={[ReactBadge, TypeScriptBadge, ReduxBadge, MUIBadge]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
