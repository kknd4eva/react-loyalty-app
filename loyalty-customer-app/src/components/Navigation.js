import React from 'react';
import './Navigation.css'
import { Nav, NavItem, Container} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FaGift, FaBarcode, FaIdCard, FaInfoCircle } from "react-icons/fa";
import Translate from '../components/Translate';


/* This array will be mapped onto our nav elements */
const navTabs = [{
    route: "/customer",
    icon: <FaIdCard size={30} style={{ fill: 'rgb(141,198,63)' }}/>,
    label: "Account"      
},{
    route: "/rewards",
    icon: <FaGift size={30} style={{ fill: 'rgb(141,198,63 '}} />,
    label: "Rewards"
},{
    route: "/cards",
    icon: <FaBarcode size={30} style={{ fill: 'rgb(141,198,63 '}} />,
    label: "Cards"
},{
    route: "/about",
    icon: <FaInfoCircle size={30} style={{ fill: 'rgb(141,198,63)' }} />,
    label: "About"
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
                                            <div><Translate icon={tab.icon}/></div>
                                            <div>{tab.label}</div>
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
