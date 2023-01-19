import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-slate-800 flex justify-center items-center p-4'
    >
      <form action='' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or send me an email:{' '}
            <span className='text-pink-600'>vikberczeli@gmail.com</span>
          </p>
        </div>
        <input
          className='bg-gray-300 p-2 text-gray-800'
          type='text'
          name='name'
          placeholder='Name'
        />
        <input
          className='my-4 p-2 bg-gray-300 text-gray-800'
          type='email'
          name='email'
          placeholder='Email'
        />
        <textarea
          className='bg-gray-300 p-2 text-gray-800'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
