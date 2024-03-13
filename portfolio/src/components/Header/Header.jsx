import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Header/Header.css";

function Header() {
  return (
    <div className='nav navgation'>
    <div className="left">
      <h1>Portfolio</h1> 
      </div>
    <div className="nav nav-tabs">
      <div className="nav-item">
        <NavLink
          to="Home"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="projectspage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
    </div>
  );
}

export default Header;
