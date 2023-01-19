import React, { useState } from 'react';
import Logo from '../assets/deviklogo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa/';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);

  const activeStyle = 'text-pink-600 font-bold';

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-slate-800 shadow-xl'>
      <div>
        <img src={Logo} alt='logo' style={{ width: '100px' }} />
      </div>

      <ul className='hidden md:flex'>
        <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/home'
          >
            Home
          </NavLink>
        </li>
        <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/about'
          >
            About
          </NavLink>
        </li>
        <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/projects'
          >
            Projects
          </NavLink>
        </li>
        <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/skills'
          >
            Skills
          </NavLink>
        </li>
        <li className='border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/contact'
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10 hover:text-pink-600'>
        {!showNav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          !showNav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-slate-800 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleClick}
            to='/home'
          >
            Home
          </NavLink>
        </li>
        <li className='py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleClick}
            to='/about'
          >
            About
          </NavLink>
        </li>
        <li className='py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleClick}
            to='/projects'
          >
            Projects
          </NavLink>
        </li>
        <li className='py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleClick}
            to='/skills'
          >
            Skills
          </NavLink>
        </li>
        <li className='py-6 text-4xl border-b-4 border-transparent hover:border-b-4 hover:border-pink-600'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleClick}
            to='/contact'
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li
            className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300
          bg-[#0072b1]'
          >
            <a
              className='flex justify-between items-center w-full text-gray-200 '
              href='http://www.linkedin.com/in/bevik'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-200 '
              href='https://github.com/syzgod'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-red-400'>
            <a
              className='flex justify-between items-center w-full text-gray-200 '
              href='mailto: viktorberczeli@dev-vik.tech'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-violet-600'>
            <a
              className='flex justify-between items-center w-full text-gray-200'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
