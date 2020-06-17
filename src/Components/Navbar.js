import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top" className="py-3">
        <NavbarBrand href="/"><span className="logo">Nikhil Comforts</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SERVICES
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                <Link to="/services">
                HVAC
                </Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/services">
                MEP
                </Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/services">
                INTERIORS
                </Link>   
                </DropdownItem>
                <DropdownItem>
                <Link to="/services">
                ENERGY CONSULTATION
                </Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/services">
                RETRO FITTING
                </Link>
                </DropdownItem> 
               <DropdownItem>
               <Link to="/services">
               PUBLIC HEALTH ENGINEERING BMS
                </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/projects">PROJECTS</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                PROJECTS
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                HVAC
                </DropdownItem>
                <DropdownItem>
                MEP
                </DropdownItem>
                <DropdownItem>
                INTERIORS
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  ENERGY CONSULTATION
                </DropdownItem>
                <DropdownItem>
                  RETRO FITTING
                </DropdownItem> 
               <DropdownItem>
                PUBLIC HEALTH ENGINEERING BMS
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem>
              <NavLink href="/aboutus">ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blogs">BLOGS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">CAREER</NavLink>
            </NavItem>
               
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;