import React from "react";
import { NavLink } from "react-router-dom";

import './Navigation.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">{props.brand}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
            </li>
{/*             <li className="nav-item"> */}
{/*               <NavLink to="/blog" className="nav-link">Blog</NavLink> */}
{/*             </li> */}
{/*             <li className="nav-item dropdown"> */}
{/*               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a> */}
{/*               <ul className="dropdown-menu"> */}
{/*                 <li><NavLink to="/link" className="dropdown-item">Link</NavLink></li> */}
{/*               </ul> */}
{/*             </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
