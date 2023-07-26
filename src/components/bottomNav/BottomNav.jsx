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
        onClick={() => setCurrentPath('/recharge')}
        className={`nav-link ${currentPath === '/recharge' ? 'active-nav' : ''}`}
        to="/recharge"
      >
        <i
          class={`bi ${
            currentPath === '/recharge' ? 'bi-lightning-fill' : 'bi-lightning'
          }`}
        ></i>
        {
          currentPath === '/recharge' ? <span>Recharge</span> : null
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
