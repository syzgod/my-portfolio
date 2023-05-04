import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import connect from '../assets/connect.svg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetInputClick = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      name='contact'
      className='relative w-full min-h-screen px-8 bg-slate-800 flex justify-center'
    >
      <form
        action='https://getform.io/f/f51a54d9-2a95-4c81-8590-7b6ea5fb38c3'
        method='POST'
        encType='multipart/form-data'
        className='flex flex-col max-w-[600px] w-full text-center mt-24 z-10'
      >
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-100 md:text-5xl'>
            Contact
          </p>
          <div className='text-gray-300 py-4 md:text-2xl md:my-10 text-left mt-3'>
            You can reach me on{' '}
            <a
              href='http://www.linkedin.com/in/bevik'
              className='bg-linkedin inline-flex py-1 px-2 rounded-2xl items-center justify-center text-gray-100 mr-1'
            >
              <span className='mr-0.5'>Linked</span>
              <FaLinkedin />
            </a>
            or send me an email to:
            <a
              href='mailto:viktorberczeli@dev-vik.tech'
              className='text-pink-600 ml-2 hover:border-b-2 hover:border-pink-600'
            >
              viktorberczeli@dev-vik.tech
            </a>
            <div className='mt-5'>You can also Submit the form below:</div>
          </div>
        </div>
        <label
          htmlFor='senderName'
          className='text-left ml-5 mt-3 text-slate-300'
        >
          Name
        </label>
        <input
          className='bg-slate-200 p-3 text-slate-800 md:text-2xl rounded-full opacity-60 placeholder:text-slate-500 focus:bg-slate-300 focus:opacity-100'
          type='text'
          name='name'
          id='senderName'
          placeholder='John Smith'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          htmlFor='senderEmail'
          className='text-left ml-5 mt-3 text-slate-300'
        >
          E-mail address
        </label>
        <input
          className='p-3 bg-slate-200 text-gray-800 md:text-2xl rounded-full opacity-60 placeholder:text-slate-500 focus:bg-slate-300 focus:opacity-100'
          type='email'
          name='email'
          id='senderEmail'
          placeholder='johnsmith@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className='bg-slate-200 p-3 text-gray-800 md:text-2xl rounded-3xl opacity-60 placeholder:text-slate-500 focus:bg-slate-300 focus:opacity-100 mt-4'
          name='message'
          rows='5'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type='submit'
          onClick={handleResetInputClick}
          className='text-gray-100 border-2 px-4 py-3 my-8 mx-auto flex items-center md:text-2xl hover:shadow-xl hover:shadow-pink-600/50 group relative rounded-full transition-all'
        >
          <span className='absolute right-0 left-0 flex h-0 mb-0 transition-all duration-300 ease-out transform bg-pink-700 group-hover:h-full opacity-90 rounded-full'></span>
          <span className='relative rounded-full'>Message Me</span>
        </button>
      </form>
      <img
        src={connect}
        alt=''
        className='absolute md:w-[40rem] opacity-10 top-16 md:top-56 md:right-36'
      />
    </div>
  );
};

export default Contact;
