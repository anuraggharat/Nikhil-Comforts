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
              <NavLink href="/hvac">
                  HVAC
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/mep">
                MEP
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/interiors">
                    Interiors
                  </NavLink>  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/energyconsultation">
                  Energy Consultation
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/retrofitting">
                  Retro Fitting
                  </NavLink>
                </DropdownItem> 
               <DropdownItem>
               <NavLink href="/bms">
                  Public Health Engineering BMS
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/projects">PROJECTS</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/aboutus">ABOUT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blogs">BLOGS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/career">CAREER</NavLink>
            </NavItem>
               
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;