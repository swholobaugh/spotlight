import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {PiSun} from 'react-icons/pi'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedPath, setSelectedPath] = useState(location.pathname)

  const getButtonClass = (path) => {
    return path === selectedPath
      ? 'px-6 py-1 text-app-accent border-b-2 border-app-accent font-bold'
      : 'px-6 py-1 text-app-accent-secondary hover:text-app-accent font-bold'
  }

  const handleClick = (path) => {
    if (['/nominate', '/hof', '/about'].includes(path)) {
      setSelectedPath(path)
    }
    navigate(path)
  }

  return (
    <div className='p-4 bg-white shadow-md'>
      <div className='flex justify-between items-center'>
        <div className='flex width mx-16 w-16 font-bold text-app-accent-secondary'>
          <div
            className='flex items-center cursor-pointer'
            onClick={() => handleClick('/')}
          >
            <div className='px-3'>
              <PiSun size={32}/>
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
              handleClick('/nominate')
            }}
          >
            Nominate
          </button>
          <button
            className={getButtonClass('/hof')}
            onClick={() => {
              handleClick('/hof')
            }}
          >
            Hall of Fame
          </button>
          <button
            className={getButtonClass('/about')}
            onClick={() => {
              handleClick('/about')
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
              handleClick('/profile')
            }}
          />
        </div>
      </div>
      <div className='ml-20 text-app-accent font-slogan italic text-left pt-2 text-sm'>
        Celebrating the Spirit of Excellence and Integrity
      </div>
    </div>
  )
}

export default Navbar
