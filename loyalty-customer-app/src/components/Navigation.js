import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
	return (
        <nav className="navbar navbar-expand-md navbar-light sticky-top" 	role="navigation">
          <div className="container-fluid">
              <a className="navbar-home" href="/">Home</a>
              <Nav className="ml-auto">
                <NavItem>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/customer" className="nav-link">
                    Customer
                  </NavLink>
                </NavItem>
              </Nav>
          </div>
        </nav>
    )
  };
  
  export default Navigation;
