import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FaIdCard, FaInfoCircle } from "react-icons/fa";


/* This array will be mapped onto our nav elements */
const navTabs = [{
    route: "/about",
    icon: <FaInfoCircle />,
    label: "About"
},{
    route: "/customer",
    icon: <FaIdCard />,
    label: "Customer"      
}]

const Navigation = (props) => {
	return (
        <div>
            <nav className="navbar fixed-bottom navbar-light" role="navigation">
                <Nav className="w-100">
                    <div className="d-flex flex-row justify-content-around w-100">
                        { 
                        /*  index is a built-in part of .map that gives u index number. 
                            The grave accent (`) is used for template literals, or combining variables, javascript and text/html
                        */
                            navTabs.map((tab, index) =>(
                                <NavItem key={`tab-${index}`}> 
                                    <NavLink to={tab.route} className="nav-link" activeClassName="active">
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            <div>{tab.icon} {tab.label}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    )
  };
  
  export default Navigation;
