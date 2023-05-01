import React from 'react';
import family from '../assets/family.png';
import { Link } from 'react-scroll';

import { FaGithub, FaLinkedin } from 'react-icons/fa/';
import { BsFillPersonLinesFill } from 'react-icons/bs/';

const About = () => {
  return (
    <div
      name='about'
      className='w-full min-h-screen p-8 bg-slate-800 text-gray-300'
    >
      <div className='flex flex-col justify-center items-center w-full h-full mt-16'>
        <div className='text-center pb-8 md:mb-16'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 md:text-5xl text-gray-100'>
            About Me
          </p>
        </div>
        <div className='md:w-full lg:w-5/6 xl:w-3/4 2xl:w-1/2 grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-lg md:text-2xl lg:text-4xl font-bold'>
            <p className='mb-4'>
              Nice to meet you and welcome on my page. Please take a look
              around.
            </p>
            <p>
              If you have any questions don't hesitate to{' '}
              <Link
                smooth
                to='contact'
                className='cursor-pointer text-gray-100 animate-pulse border-b-2 border-pink-600'
              >
                contact me
              </Link>
              .
            </p>
            <br />
            <div className='lg:hidden'>
              <ul className='flex justify-center flex-wrap gap-2 text-2xl'>
                <li
                  className='relative group flex justify-center items-center shadow-md border-2 border-gray-200 w-42
                       rounded-full'
                >
                  <span className='absolute right-0 left-0 flex h-0 mb-0 transition-all duration-300 ease-out transform bg-linkedin group-hover:h-full opacity-90 rounded-full'></span>
                  <span className='relative rounded-full flex justify-center items-center flex-row'>
                    <a
                      className='flex justify-between items-center text-gray-200'
                      href='http://www.linkedin.com/in/bevik'
                    >
                      Linked <FaLinkedin size={25} />
                    </a>
                  </span>
                </li>
                <li className='relative group inline-flex justify-center items-center shadow-md border-2 border-gray-200 w-42 rounded-full'>
                  <span className='absolute right-0 left-0 flex h-0 mb-0 transition-all duration-300 ease-out transform bg-github group-hover:h-full opacity-90 rounded-full'></span>
                  <span className='relative rounded-full flex justify-center items-center flex-row'>
                    <a
                      className='flex justify-between items-center text-gray-200'
                      href='https://github.com/syzgod'
                    >
                      GitHub <FaGithub size={25} className='ml-2' />
                    </a>
                  </span>
                </li>
                <li className='relative group inline-flex justify-center items-center shadow-md border-2 border-gray-200 w-42 rounded-full'>
                  <span className='absolute right-0 left-0 flex h-0 mb-0 transition-all duration-300 ease-out transform bg-violet-600 group-hover:h-full opacity-90 rounded-full'></span>
                  <span className='relative rounded-full flex justify-center items-center flex-row'>
                    <a
                      className='flex justify-between items-center text-gray-200'
                      href='https://www.dev-vik.tech/viktor_berczeli_ENG.pdf'
                    >
                      Resume{' '}
                      <BsFillPersonLinesFill size={25} className='ml-2' />
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <section className='text-[1.2rem] md:text-2xl lg:text-3xl text-gray-400'>
              <p>
                I am a self-taught{' '}
                <span className='text-pink-600'>Front-End Developer</span>. I've
                decided I want to learn to code and completely change career for
                the better.
              </p>{' '}
            </section>
          </div>
          <section className='text-[1.2rem] md:text-2xl lg:text-3xl text-gray-400'>
            <h1 className='text-4xl my-3 text-pink-600 font-bold'>
              So why coding?
            </h1>{' '}
            <p>
              I love tech and I enjoy learning new skills and improving myself.
              Getting better at critical thinking and problem solving keeps me
              motivated. My free time (when I'm not with my daughters and my
              wife) is divided between learning, reading and traveling. If I
              want a break I love to play computer games or watch something.
            </p>
          </section>
          <img
            src={family}
            alt=''
            className='max-w-full rounded-3xl shadow-slate-900 shadow-md'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
