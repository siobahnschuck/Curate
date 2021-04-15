import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


const ProfileNav = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src='../../../public/logo400_circle.png' alt="logo" width="30" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="navigation">
            <Nav.Link className="link-text" href="/">Home</Nav.Link>
            <Nav.Link className="link-text" href="/studio">Studio</Nav.Link>
            <Nav.Link className="link-text" href="/explore">Explore</Nav.Link>
            <NavDropdown title="Profile" id="drop-down">
              <NavDropdown.Item className="link-text" href="/edit">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item className="link-text" href="/create/gallery">Create Gallery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="link-text" href="/profile">My Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default ProfileNav