import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa/';

const About = () => {
  return (
    <div
      name='about'
      className='w-full min-h-screen pt-24 p-4 bg-slate-800 text-gray-300'
    >
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[950px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi. I'm <span className='text-pink-600'>Viktor</span>, nice to
              meet you. Please take a look around on my webpage.
            </p>
            <br />
            <div className='lg:hidden'>
              <p className='border-b-2 border-pink-600 inline text-2xl'>
                And we can connect
              </p>
              <ul className='mt-4 flex sm:justify-end flex-wrap'>
                <li
                  className='flex justify-center items-center shadow-md border-2 border-gray-200 w-48
                        bg-[#0072b1]'
                >
                  <a
                    className='flex justify-between items-center text-gray-200'
                    href='http://www.linkedin.com/in/bevik'
                  >
                    Linked <FaLinkedin size={30} />
                  </a>
                </li>
                <li className='inline-flex justify-center items-center  bg-[#333333] shadow-md border-2 border-gray-200 w-48'>
                  <a
                    className='flex justify-between items-center text-gray-200'
                    href='https://github.com/syzgod'
                  >
                    GitHub <FaGithub size={30} className='ml-2' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>
              I am a web developer with a passion for creating dynamic websites.
              I have an understanding of the latest web technologies and
              constantly learning new skills to stay up-to-date in the field. I
              am experienced in HTML, CSS, JavaScript and other front-end
              technologies. I am comfortable working with various web
              development frameworks and libraries such as React.js, TypeScript,
              Tailwind CSS. I am also familiar with version control systems such
              as Git and GitHub. I am a problem solver and enjoy finding
              efficient solutions to web development challenges. As a team
              player I enjoy collaborating to create outstanding web projects. I
              am always looking for new ways to improve my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
