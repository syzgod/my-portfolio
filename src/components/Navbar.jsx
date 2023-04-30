import React, { useState } from 'react';
import Logo from '../assets/deviklogo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa/';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavClick = () => setShowNav(!showNav);

  const activeStyle = 'text-pink-600 font-bold';

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-slate-800 shadow-lg lg:text-2xl md:text-xl shadow-slate-900 z-50'>
      <Link smooth to='home' className='cursor-pointer'>
        <img src={Logo} alt='logo' style={{ width: '100px' }} />
      </Link>

      {/* Top Navigation */}

      <ul className='hidden md:flex'>
        <Link spy={true} activeClass={activeStyle} smooth to='home'>
          <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            Home
          </li>
        </Link>
        <Link spy={true} activeClass={activeStyle} smooth to='about'>
          <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            About
          </li>
        </Link>
        <Link spy={true} activeClass={activeStyle} smooth to='projects'>
          <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            Projects
          </li>
        </Link>
        <Link spy={true} activeClass={activeStyle} smooth to='skills'>
          <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            Skills
          </li>
        </Link>
        <Link spy={true} activeClass={activeStyle} smooth to='contact'>
          <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            Contact
          </li>
        </Link>
      </ul>

      <div
        onClick={handleNavClick}
        className='md:hidden z-10 hover:text-pink-600'
      >
        {!showNav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Hamburger menu */}

      <ul
        className={
          !showNav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen overflow-scroll bg-slate-900 flex flex-col justify-center items-center opacity-95'
        }
      >
        <Link
          spy={true}
          activeClass={activeStyle}
          smooth
          to='home'
          onClick={handleNavClick}
        >
          <li className='py-2 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            Home
          </li>
        </Link>
        <Link
          spy={true}
          activeClass={activeStyle}
          smooth
          to='about'
          onClick={handleNavClick}
        >
          <li className='py-2 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            About
          </li>
        </Link>
        <Link
          spy={true}
          activeClass={activeStyle}
          smooth
          to='projects'
          onClick={handleNavClick}
        >
          <li className='py-2 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            Projects
          </li>
        </Link>
        <Link
          spy={true}
          activeClass={activeStyle}
          smooth
          to='skills'
          onClick={handleNavClick}
        >
          <li className='py-2 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            Skills
          </li>
        </Link>
        <Link
          spy={true}
          activeClass={activeStyle}
          smooth
          to='contact'
          onClick={handleNavClick}
        >
          <li className='py-4 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
            Contact
          </li>
        </Link>
      </ul>

      {/* Contact sidebar */}

      <div className='hidden lg:flex fixed flex-col top-[35%] -left-1'>
        <ul className='relative flex flex-col gap-0.5'>
          <li
            className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300
          bg-linkedin hover:shadow-lg hover:shadow-slate-900 rounded-r-full border-2'
          >
            <a
              className='flex justify-between items-center w-full text-gray-200 '
              href='http://www.linkedin.com/in/bevik'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-github hover:shadow-slate-900 hover:shadow-lg rounded-r-full border-2'>
            <a
              className='flex justify-between items-center w-full text-gray-200 '
              href='https://github.com/syzgod'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-red-400  hover:shadow-slate-900 hover:shadow-lg rounded-r-full border-2'>
            <a
              className='flex justify-between items-center w-full text-gray-200 '
              href='mailto: viktorberczeli@dev-vik.tech'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[170px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-violet-600 hover:shadow-slate-900 hover:shadow-lg rounded-r-full border-2'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='https://www.dev-vik.tech/viktor_berczeli_ENG.pdf'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className='hidden arrow top-[25rem] left-36 pointer-events-none -z-50 lg:block'></div>
    </div>
  );
};

export default Navbar;
