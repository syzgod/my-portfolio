import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Sass from '../assets/sass.png';
import TailwindCSS from '../assets/tailwind.png';
import JavaScript from '../assets/javascript.png';
import ReactJS from '../assets/react.png';
import Redux from '../assets/redux.png';
import TypeScript from '../assets/typescript.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-slate-800 text-gray-300'>
      <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Experience
          </p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Sass} alt='HTML icon' />
            <p className='my-4'>Sass</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TailwindCSS} alt='HTML icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactJS} alt='HTML icon' />
            <p className='my-4'>React JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Redux} alt='HTML icon' />
            <p className='my-4'>Redux</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TypeScript} alt='HTML icon' />
            <p className='my-4'>TypeScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Git} alt='HTML icon' />
            <p className='my-4'>Git</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt='HTML icon' />
            <p className='my-4'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
