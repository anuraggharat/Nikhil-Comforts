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
  NavbarText
} from 'reactstrap';

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top" className="py-3">
        <NavbarBrand href="/">Nikhil Comforts</NavbarBrand>
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
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
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
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">ABOUT US</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                BLOGS
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
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                CAREER
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
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavbar;