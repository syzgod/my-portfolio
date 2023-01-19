import React from 'react';
import Navbar from './Navbar';

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <h1>An error occurred!</h1>
      <p>Could not find this page!</p>
    </>
  );
};

export default ErrorPage;
