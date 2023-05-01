import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import codeTyping from '../assets/code-typing.svg';

const Home = () => {
  return (
    <div name='home' className='min-h-screen bg-slate-800 relative'>
      <div className='relative max-w-[950px] mx-auto p-8 pt-24 md:pt-36 flex flex-col justify-center items-center md:items-start'>
        <img
          src={codeTyping}
          alt=''
          className='absolute w-[35rem] md:w-[40rem] md:left-[20rem] md:top-48 xl:top-64 xl:left-[40rem] xl:w-[50rem] opacity-5 left-0'
        />
        <p className='text-2xl text-pink-600 md:text-4xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-gray-100 mb-2'>
          Viktor Berczeli
        </h1>
        <h2 className='flex text-3xl md:text-5xl font-bold text-gray-900 bg-pink-600 w-fit'>
          I'm a Front-End Developer.
        </h2>
        <p className='text-gray-400 py-4 text-2xl lg:text-3xl'>
          My dream is becoming a full-time Front-end Developer so I can do more
          what I love. I enjoy the process and the progress of learning new
          technologies and using them for various tasks. I am passionate about
          acquiring new skills which help me not just understand the
          technologies better but also allowing me to be more efficient in what
          I do.
        </p>
        <div className='cursor-pointer flex justify-center items-center md:justify-start'>
          <Link
            smooth
            to='projects'
            className='text-gray-100 group border-2 px-6 py-3 my-2 inline-flex items-center rounded-full md:text-2xl hover:shadow-xl hover:shadow-pink-700/50 relative'
          >
            {' '}
            <span className='absolute right-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform bg-pink-700 group-hover:h-full opacity-90 rounded-full'></span>
            <span className='relative rounded-full'>View My Works</span>
            <span className='relative group-hover:rotate-90 duration-300 ml-3 text-gray-100 rounded-full'>
              <HiArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
