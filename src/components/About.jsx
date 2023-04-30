import React from 'react';
import { Link } from 'react-scroll';

import { FaGithub, FaLinkedin } from 'react-icons/fa/';
import { BsFillPersonLinesFill } from 'react-icons/bs/';

const About = () => {
  return (
    <div
      name='about'
      className='w-full min-h-screen p-4 bg-slate-800 text-gray-300 pt-20'
    >
      <div className='flex flex-col justify-center items-center w-full h-full mt-28'>
        <div className='max-w-[950px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 md:text-5xl text-gray-100'>
              About Me
            </p>
          </div>
        </div>
        <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p className='mb-6'>
              Nice to meet you and welcome on my page. Please take a look
              around.
            </p>
            <p>
              If you have any question don't hesitate to{' '}
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
              <ul className='mt-4 flex sm:justify-end flex-wrap gap-2 text-2xl'>
                <li
                  className='relative group flex justify-center items-center shadow-md border-2 border-gray-200 w-48
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
                <li className='relative group inline-flex justify-center items-center shadow-md border-2 border-gray-200 w-48 rounded-full'>
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
                <li className='relative group inline-flex justify-center items-center shadow-md border-2 border-gray-200 w-48 rounded-full'>
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
            <section className='lg:text-2xl'>
              <p>
                I am a self-taught{' '}
                <span className='text-pink-600'>Frontend Developer</span>. I've
                decided I want to learn to code and completely change career for
                the better.
              </p>{' '}
              <h1 className='text-4xl my-3 text-pink-600 font-bold'>
                So why coding?
              </h1>{' '}
              <p>
                I love tech and I enjoy learning new skills. Improving myself
                makes me happy and satisfied. Seeing getting better at critical
                thinking and problem solving keeps me motivated and pushing me
                towards my higher goals to acquire more related knowledge in the
                field. My free time (when I'm not with my daughters and my wife)
                is dedicated for learning. I also like to read and travel with
                my family. If I want to take a break I love to play computer
                games or watching movies and series.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
