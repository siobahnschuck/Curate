import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import { IconContext } from 'react-icons'

import 'bootstrap/dist/css/bootstrap.min.css'


const ProfileNav = () => {
  return (
    <IconContext.Provider value={{ color: '#388697' }}>
      <Navbar collapseOnSelect bg="light" variant="light">
        <Navbar.Brand href="/">
          <img src='../../../public/logo_400px.png' alt="logo" width="30" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="navigation">
            <Nav.Link href="/"><FaIcons.FaHome /> Home</Nav.Link>
            <Nav.Link href="/studio"><FaIcons.FaPaintBrush /> Studio</Nav.Link>
            <Nav.Link href="/explore"><FaIcons.FaGlobeAmericas /> Explore</Nav.Link>
            <NavDropdown title="Profile" id="drop-down">
              <NavDropdown.Item href="/edit"><FaIcons.FaUserEdit /> Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="/create/gallery"><RiIcons.RiGalleryLine /> Create New Gallery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/profile"> <FaIcons.FaUserCircle /> My Profile </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>SignIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </IconContext.Provider>
  )
}

export default ProfileNav