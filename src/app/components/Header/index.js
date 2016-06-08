import React from 'react';
import { Link } from 'react-router';


export default function HeaderPanel() {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">Contacts</div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/contact">Add Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
