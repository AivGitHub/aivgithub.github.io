import React from "react";
import { NavLink } from "react-router-dom";


function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            {props.brand}
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
{/*               <li className="nav-item"> */}
{/*                 <NavLink className="nav-link" to="/contact"> */}
{/*                   Contact */}
{/*                 </NavLink> */}
{/*               </li> */}
{/*               <li className="nav-item"> */}
{/*                 <NavLink className="nav-link" to="/blog"> */}
{/*                   Blog */}
{/*                 </NavLink> */}
{/*               </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
