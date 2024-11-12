import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {PiSun} from 'react-icons/pi';
import {useAuth} from '../../providers/AuthProvider'; // Import useAuth hook

const Navbar = () => {
  const {currentUser} = useAuth(); // Access currentUser from context
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState(location.pathname);

  const getButtonClass = (path) => {
    return path === selectedPath
      ? 'px-6 py-1 text-app-accent-secondary border-b-2 border-app-accent-secondary font-bold'
      : 'px-6 py-1 text-app-accent hover:text-app-accent-secondary font-bold';
  };

  const handleClick = (path) => {
<<<<<<< HEAD
    setSelectedPath(path);
=======
    if (['/nominate', '/vote', '/hof', '/about'].includes(path)) {
      setSelectedPath(path);
    } else {
      setSelectedPath('');
    }
>>>>>>> b1565a7 (feat(vote): add vote page)
    navigate(path);
  };

  return (
    <div className='p-4 bg-white shadow-md'>
      <div className='flex justify-between items-center'>
<<<<<<< HEAD
        {/* Logo Section */}
        <div className='flex items-center mx-16 font-bold text-app-accent cursor-pointer' onClick={() => handleClick('/')}>
=======
        <div className='flex items-center mx-16 font-bold text-app-accent cursor-pointer'
             onClick={() => handleClick('/')}>
>>>>>>> b1565a7 (feat(vote): add vote page)
          <div className='px-3'>
            <PiSun size={32}/>
          </div>
          <div>
            <p>Aggie</p>
            <p>Spotlight</p>
          </div>
        </div>

        {/* Centered Buttons Section */}
        <div className='flex justify-center items-center space-x-6 flex-grow'>
          <button
            className={getButtonClass('/nominate')}
            onClick={() => handleClick('/nominate')}
          >
            Nominate
          </button>
<<<<<<< HEAD
=======
          <button
            className={getButtonClass('/vote')}
            onClick={() => handleClick('/vote')}
          >
            Vote
          </button>
>>>>>>> b1565a7 (feat(vote): add vote page)
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

        {/* Profile Icon Section */}
        <div className='flex items-center mx-16 w-16 justify-end'>
          <FontAwesomeIcon
            icon={faCircleUser}
            className='text-app-accent hover:text-app-accent-secondary cursor-pointer'
            size='2x'
            onClick={() => handleClick('/profile')}
          />
        </div>
      </div>

      {/* Slogan Section */}
      <div className='ml-20 text-app-cta font-slogan italic text-left text-sm'>
        Celebrating the Spirit of Excellence and Integrity
      </div>
    </div>
  );
};

export default Navbar;
