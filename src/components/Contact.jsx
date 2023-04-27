import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      name='contact'
      className='w-full min-h-screen px-8 bg-slate-800 flex justify-center pt-24'
    >
      <form
        action='https://getform.io/f/f51a54d9-2a95-4c81-8590-7b6ea5fb38c3'
        method='POST'
        encType='multipart/form-data'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 md:text-5xl rounded-xl px-2'>
            Contact
          </p>
          <p className='text-gray-300 py-4 md:text-2xl'>
            Submit the form below or send me an email:
            <a
              href='mailto:viktorberczeli@dev-vik.tech'
              className='text-pink-600 ml-2 hover:border-b-2 hover:border-pink-600'
            >
              viktorberczeli@dev-vik.tech
            </a>
          </p>
        </div>
        <input
          className='bg-gray-300 p-3 text-gray-800 md:text-2xl rounded-full'
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='my-4 p-3 bg-gray-300 text-gray-800 md:text-2xl rounded-full'
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className='bg-gray-300 p-3 text-gray-800 md:text-2xl rounded-3xl'
          name='message'
          rows='10'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type='submit'
          onClick={handleClick}
          className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center md:text-2xl hover:shadow-xl hover:shadow-pink-600/50 group relative rounded-full'
        >
          <span className='absolute right-0 left-0 flex h-0 mb-0 transition-all duration-300 ease-out transform bg-pink-700 group-hover:h-full opacity-90 rounded-full'></span>
          <span className='relative rounded-full'>Message Me</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
