import React, { useRef } from 'react';

const Contact = () => {
  const formRef = useRef();

  const resetFormHandleClick = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };

  return (
    <div
      name='contact'
      className='w-full min-h-screen px-8 bg-slate-800 flex justify-center pt-24'
    >
      <form
        ref={formRef}
        action='https://getform.io/f/f51a54d9-2a95-4c81-8590-7b6ea5fb38c3'
        method='POST'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 md:text-5xl'>
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
          className='bg-gray-300 p-2 text-gray-800 md:text-2xl'
          type='text'
          name='name'
          placeholder='Name'
          required
        />
        <input
          className='my-4 p-2 bg-gray-300 text-gray-800 md:text-2xl'
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        <textarea
          className='bg-gray-300 p-2 text-gray-800 md:text-2xl'
          name='message'
          rows='10'
          placeholder='Message'
          required
        ></textarea>
        <button
          onClick={resetFormHandleClick}
          className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center md:text-2xl hover:shadow-xl hover:shadow-pink-600/50'
        >
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
