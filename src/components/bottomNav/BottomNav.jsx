import React, { useState } from 'react';
import './bottomNav.css';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <div className="container bottom-nav">
      <Link onClick={() => setCurrentPath('/')} className={`nav-link ${currentPath === '/' ? 'active-nav' : ''}`} to="/">
       
        <i
          class={`bi ${currentPath === '/' ? 'bi-house-fill' : 'bi-house'}`}
        ></i>
        {
          currentPath === '/' ? <span>Home</span> : null
        }
        
      </Link>

      <Link
        onClick={() => setCurrentPath('/refer')}
        className={`nav-link ${currentPath === '/refer' ? 'active-nav' : ''}`}
        to="/refer"
      >
        <i
          class={`bi ${
            currentPath === '/refer' ? 'bi-people-fill' : 'bi-people'
          }`}
        ></i>
        {
          currentPath === '/refer' ? <span>Refer</span> : null
        }
      </Link>

      <Link
        onClick={() => setCurrentPath('/profile')}
        className={`nav-link ${currentPath === '/profile' ? 'active-nav' : ''}`}
        to="/profile"
      >
        <i
          class={`bi ${
            currentPath === '/profile' ? 'bi-person-fill' : 'bi-person'
          }`}
        ></i>

{
          currentPath === '/profile' ? <span>Profile</span> : null
        }
      </Link>
    </div>
  );
};

export default BottomNav;
