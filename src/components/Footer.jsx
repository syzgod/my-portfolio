import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-center items-center text-gray-300 p-4'>
      <p>Made with ❤️ and React JS - Tailwind CSS</p>
      <a
        href='https://storyset.com/people'
        className='ml-2 border-b border-pink-600'
      >
        People illustrations by Storyset
      </a>
    </footer>
  );
};

export default Footer;
