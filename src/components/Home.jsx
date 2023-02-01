import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/projects');
  };

  return (
    <div name='home' className='min-h-screen bg-slate-800'>
      <div className='max-w-[950px] mx-auto p-8 pt-36 flex flex-col justify-center'>
        <p className='text-xl text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>
          Viktor Berczeli
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>
          I'm a Front-End Developer.
        </h2>
        <p className='text-gray-400 py-4 max-w-[700] '>
          I am a skilled React developer with experience in designing and
          implementing user interfaces for web applications. I have a solid
          understanding of modern web technologies and best practices. I am a
          team player and have a passion for creating responsive, visually
          stunning web applications.
        </p>
        <div>
          <Link
            to='/projects'
            className='text-white group border-2 px-6 py-3 my-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600'
          >
            View my works
            <span className='group-hover:rotate-90 duration-300 ml-3'>
              <HiArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
