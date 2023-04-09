import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div
      name='projects'
      className='w-full min-h-screen text-gray-300 bg-slate-800'
    >
      <div className='max-w-[900px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
        <div className='py-16'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 md:text-5xl'>
            Projects
          </p>
          <p className='py-6 md:text-2xl'>
            // Check out some of my recent projects
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
