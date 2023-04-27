import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name='home' className='min-h-screen bg-slate-800'>
      <div className='max-w-[950px] mx-auto p-8 pt-36 flex flex-col justify-center'>
        <p className='text-2xl text-pink-600 md:text-4xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>
          Viktor Berczeli
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>
          I'm a Front-End Developer.
        </h2>
        <p className='text-gray-400 py-4 max-w-[700] lg:text-2xl'>
          My dream is becoming a fulltime Frontend Developer so I can do more
          what I love. I enjoy the process of learning new technologies and
          using them for various tasks. I am passionate about to acquire new
          skills which helps me not just understand the technologies but also
          allow me to be more effective in what I do.
        </p>
        <div>
          <Link
            to='/projects'
            className='text-white group border-2 px-6 py-3 my-2 inline-flex items-center rounded-full md:text-2xl hover:shadow-xl hover:shadow-pink-700/50 relative'
          >
            {' '}
            <span className='absolute right-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform bg-pink-700 group-hover:h-full opacity-90 rounded-full'></span>
            <span className='relative rounded-full'>View My Works</span>
            <span className='relative group-hover:rotate-90 duration-300 ml-3 text-white rounded-full'>
              <HiArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
