import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const ProfileNav = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src='../../../public/logo400_circle.png' alt="logo" width="30" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="navigation">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/studio">Studio</Nav.Link>
          <Nav.Link href="/explore">Explore</Nav.Link>
          <NavDropdown title="Profile" id="drop-down">
            <NavDropdown.Item href="/edit">Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="/create/gallery">Create Gallery</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>SignIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ProfileNav