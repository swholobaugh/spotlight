import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
// import LogoIcon from "../Icons/LogoIcon.jsx";


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [selectedPath, setSelectedPath] = useState(location.pathname)

  useEffect(() => {
    setSelectedPath(location.pathname)
  }, [location.pathname])

  const getButtonClass = (path) => {
    return path === selectedPath
      ? 'px-4 py-2 border border-gray-300 bg-app-accent text-white rounded-md ml-2'
      : 'px-4 py-2 border border-gray-300 bg-app-accent text-gray-700 hover:bg-gray-300 rounded-md ml-2';
  }

  return (
    <div className='flex justify-between items-center bg-app-accent-secondary p-4 shadow-md'>
      <div className='flex-grow'>
      </div>
      <div className='flex justify-center flex-grow'>
        <button
          className={getButtonClass('/')}
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </button>
        <button
          className={getButtonClass('/about')}
          onClick={() => {
            navigate('/about');
          }}
        >
          About
        </button>
        <button
          className={getButtonClass('/contact')}
          onClick={() => {
            navigate('/contact');
          }}
        >
          Contact
        </button>
      </div>
      <div className='flex-grow flex justify-end'>
        <FontAwesomeIcon
          icon={faUser}
          className='text-gray-200 hover:text-white cursor-pointer'
          size='2x'
          onClick={() => {
            navigate('/profile')
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
