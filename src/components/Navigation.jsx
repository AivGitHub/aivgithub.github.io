import React from "react";
import { NavLink } from "react-router-dom";

import './Navigation.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.brand}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">Contacts</a>
            </li>
{/*             <li className="nav-item"> */}
{/*               <a className="nav-link" href="/blog">Blog</a> */}
{/*             </li> */}
{/*             <li className="nav-item dropdown"> */}
{/*               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a> */}
{/*               <ul className="dropdown-menu"> */}
{/*                 <li><a className="dropdown-item" href="#">Link</a></li> */}
{/*                 <li><a className="dropdown-item" href="#">Another link</a></li> */}
{/*                 <li><a className="dropdown-item" href="#">A third link</a></li> */}
{/*               </ul> */}
{/*             </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
