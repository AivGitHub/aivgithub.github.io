import React from "react";

import './Footer.css';


function Footer(props) {
  return (
    <div className="footer">
      <footer className="py-1 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; {props.brand} 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
