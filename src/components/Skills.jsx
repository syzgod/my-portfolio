import React from 'react';
import { motion } from 'framer-motion';
import programming from '../assets/programming-skills.svg';

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
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      name='skills'
      className='min-h-screen
       bg-slate-800 text-gray-300 relative '
    >
      <div className='max-w-[950px] mx-auto px-8 flex flex-col justify-center mt-28 text-center'>
        <div className='mt-24'>
          <p className='text-4xl md:text-5xl font-bold inline border-b-4 border-pink-600 text-gray-100'>
            Experience
          </p>
          <p className='py-4 md:text-2xl m-2'>
            // These are the technologies I've worked with
          </p>
        </div>

        {/* Tech stack */}

        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center md:text-2xl md:mt-10'
        >
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
            <p className='my-4'>CSS</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img className='w-20 mx-auto ' src={Sass} alt='HTML icon' />
            <p className='my-4'>Sass</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img
              className='w-20 mx-auto animate-bounce'
              src={TailwindCSS}
              alt='HTML icon'
            />
            <p className='my-4'>Tailwind CSS</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
            <p className='my-4'>JavaScript</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img
              className='w-20 mx-auto animate-spin'
              src={ReactJS}
              alt='HTML icon'
            />
            <p className='my-4'>React JS</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img className='w-20 mx-auto' src={Redux} alt='HTML icon' />
            <p className='my-4'>Redux</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img className='w-20 mx-auto' src={TypeScript} alt='HTML icon' />
            <p className='my-4'>TypeScript</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img className='w-20 mx-auto' src={Git} alt='HTML icon' />
            <p className='my-4'>Git</p>
          </motion.div>
          <motion.div
            variants={item}
            className='hover:scale-125 duration-500 z-10'
          >
            <img className='w-20 mx-auto' src={GitHub} alt='HTML icon' />
            <p className='my-4'>GitHub</p>
          </motion.div>
        </motion.div>
        <img
          src={programming}
          alt=''
          className='absolute w-[30rem] lg:w-[40rem] opacity-10 md:top-36 right-10 md:right-64'
        />
      </div>
    </div>
  );
};

export default Skills;
