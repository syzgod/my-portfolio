import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-800 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[950px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi. I'm <span className='text-pink-600'>Viktor</span>, nice to
              meet you. Please take a look around on my webpage.
            </p>
          </div>
          <div>
            <p>
              I am a web developer with a passion for creating dynamic and
              engaging websites. I have an understanding of the latest web
              technologies and constantly learning new skills to stay up-to-date
              in the field. I am experienced in HTML, CSS, JavaScript and other
              front-end technologies. I have a keen eye for design and user
              experience, and always strive to create beautiful and intuitive
              interfaces. I am comfortable working with various web development
              frameworks and libraries such as React.js, TypeScript, Tailwind
              CSS. I am also familiar with version control systems such as Git
              and GitHub. I am a problem solver and enjoy finding efficient
              solutions to complex web development challenges. Also a team
              player who enjoy collaborating to create outstanding web projects.
              I am dedicated to my craft and always looking for new ways to
              improve my skills and push the boundaries of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
