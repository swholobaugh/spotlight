import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { PiSun } from 'react-icons/pi';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [selectedPath, setSelectedPath] = useState(location.pathname)

  useEffect(() => {
    if (['/nominate', '/hof', '/about'].includes(location.pathname)) {
      setSelectedPath(location.pathname)
    }
  }, [location.pathname])

  const getButtonClass = (path) => {
    return path === selectedPath
      ? 'px-6 py-1 text-app-accent border-b-2 border-app-accent font-bold'
      : 'px-6 py-1 text-app-accent-secondary hover:text-app-accent font-bold';
  }

  const handleClick = (path) => {
    if (['/nominate', '/hof', '/about'].includes(path)) {
      setSelectedPath(path)
    }
    navigate(path)
  }

  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-md'>
      <div className='flex items-center width mx-16 w-16 font-bold text-app-accent-secondary'>
        <div
          className='flex items-center cursor-pointer'
          onClick={() => navigate('/')}
        >
          <div className='px-3'>
            <PiSun size={32} />
          </div>
          <div>
            <p>Aggie</p>
            <p>Spotlight</p>
          </div>
        </div>
      </div>
      <div className='flex grow justify-center flex-grow'>
        <button
          className={getButtonClass('/nominate')}
          onClick={() => {
            navigate('/nominate');
          }}
        >
          Nominate
        </button>
        <button
          className={getButtonClass('/hof')}
          onClick={() => {
            navigate('/hof');
          }}
        >
          Hall of Fame
        </button>
        <button
          className={getButtonClass('/about')}
          onClick={() => {
            navigate('/about');
          }}
        >
          About
        </button>
      </div>
      <div className='flex mx-16 w-16 justify-end'>
        <FontAwesomeIcon
          icon={faCircleUser}
          className='text-app-accent-secondary hover:text-app-accent cursor-pointer'
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
