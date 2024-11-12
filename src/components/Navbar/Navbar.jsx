import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { PiSun } from 'react-icons/pi';
import { useAuth } from '../../providers/AuthProvider'; // Import useAuth hook

const Navbar = () => {
  const { currentUser } = useAuth(); // Access currentUser from context
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState(location.pathname);

  const getButtonClass = (path) => {
    return path === selectedPath
      ? 'px-6 py-1 text-app-accent-secondary border-b-2 border-app-accent-secondary font-bold'
      : 'px-6 py-1 text-app-accent hover:text-app-accent-secondary font-bold';
  };

  const handleClick = (path) => {
    if (['/nominate', '/hof', '/about'].includes(path)) {
      setSelectedPath(path);
    } else {
      setSelectedPath('');
    }
    navigate(path);
  };

  return (
    <div className='p-4 bg-white shadow-md'>
      <div className='flex justify-between items-center'>
        <div className='flex width mx-16 w-16 font-bold text-app-accent'>
          <div
            className='flex items-center cursor-pointer'
            onClick={() => handleClick('/')}
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
        {currentUser && ( // Conditionally render nav links if the user is signed in
          <div className='flex grow justify-center flex-grow'>
            <button
              className={getButtonClass('/nominate')}
              onClick={() => handleClick('/nominate')}
            >
              Nominate
            </button>
            <button
              className={getButtonClass('/hof')}
              onClick={() => handleClick('/hof')}
            >
              Hall of Fame
            </button>
            <button
              className={getButtonClass('/about')}
              onClick={() => handleClick('/about')}
            >
              About
            </button>
          </div>
        )}
        {currentUser && ( // Conditionally render the profile icon if the user is signed in
          <div className='flex mx-16 w-16 justify-end'>
            <FontAwesomeIcon
              icon={faCircleUser}
              className='text-app-accent hover:text-app-accent-secondary cursor-pointer'
              size='2x'
              onClick={() => handleClick('/profile')}
            />
          </div>
        )}
      </div>
      <div className='ml-20 text-app-cta font-slogan italic text-left text-sm'>
        Celebrating the Spirit of Excellence and Integrity
      </div>
    </div>
  );
};

export default Navbar;
