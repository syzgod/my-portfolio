import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='selection:text-slate-800 selection:bg-pink-500'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
