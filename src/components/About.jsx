import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa/';
import { BsFillPersonLinesFill } from 'react-icons/bs/';

const About = () => {
  return (
    <div
      name='about'
      className='w-full min-h-screen pt-24 p-4 bg-slate-800 text-gray-300'
    >
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[950px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 md:text-5xl rounded-xl px-2 text-gray-100'>
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
              <a href='/contact' className='text-gray-100 animate-pulse'>
                contact me
              </a>
              .
            </p>
            <br />
            <div className='lg:hidden'>
              <p className='border-b-2 border-pink-600 inline text-2xl'>
                And we can connect
              </p>
              <ul className='mt-4 flex sm:justify-end flex-wrap gap-2'>
                <li
                  className='flex justify-center items-center shadow-md border-2 border-gray-200 w-48
                        bg-[#0072b1] rounded-full'
                >
                  <a
                    className='flex justify-between items-center text-gray-200'
                    href='http://www.linkedin.com/in/bevik'
                  >
                    Linked <FaLinkedin size={30} />
                  </a>
                </li>
                <li className='inline-flex justify-center items-center  bg-[#333333] shadow-md border-2 border-gray-200 w-48 rounded-full'>
                  <a
                    className='flex justify-between items-center text-gray-200'
                    href='https://github.com/syzgod'
                  >
                    GitHub <FaGithub size={30} className='ml-2' />
                  </a>
                </li>
                <li className='inline-flex justify-center items-center  bg-violet-600 shadow-md border-2 border-gray-200 w-48 rounded-full'>
                  <a
                    className='flex justify-between items-center text-gray-200'
                    href='https://www.dev-vik.tech/viktor_berczeli_ENG.pdf'
                  >
                    Resume <BsFillPersonLinesFill size={30} className='ml-2' />
                  </a>
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
