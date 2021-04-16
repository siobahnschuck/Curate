import React, { useState } from 'react'
import LoginForm from '../Forms/loginForm'
import { Navbar, Nav, NavDropdown, Button, Modal, Alert } from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import { IconContext } from 'react-icons'
import logo from '../../imgs/logo400_circle.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom'
import { setAuthenticated, createLogin, addLogin } from '../../store/actions/AuthActions'
const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SetAuthenticated: (value) => dispatch(setAuthenticated(value)),
    createNewLogin: (formData) => dispatch(createLogin(formData)),
    newLogin: (name, value) => dispatch(addLogin(name, value)),
  }
}

const ProfileNav = (props) => {
  const history = useHistory()
  const { loginForm, currentUser } = props.authState
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const logout = () => {
    props.SetAuthenticated(false)
    localStorage.clear()
    return history.push('/')
  }
  const handleChangeLogin = (e) => {
    props.newLogin(e.target.name, e.target.value)
  }
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await props.createNewLogin(loginForm)
      // localStorage.setItem('token', currentUser.token)
      props.SetAuthenticated(true)
      handleClose()
    } catch (error) {
      throw error
    }
  }
  const { authenticated } = props.authState
  return (
    <IconContext.Provider value={{ color: '#000' }}>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="navigation">
            <NavLink to="/"><FaIcons.FaHome /> Home</NavLink>
            <NavLink to="/studio"><FaIcons.FaPaintBrush /> Studio</NavLink>
            <NavLink to="/explore"><FaIcons.FaGlobeAmericas /> Explore</NavLink>
            <NavDropdown title="Profile" id="drop-down">
              <NavDropdown.Item><NavLink to="/edit"><FaIcons.FaUserEdit /> Edit Profile</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/create/gallery"><RiIcons.RiGalleryLine /> Create New Gallery</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item > <NavLink to="/profile"><FaIcons.FaUserCircle /> My Profile</NavLink> </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!authenticated ?
              <Button size="sm" variant="info" onClick={handleShow}>Sign In</Button>
              : <Button size="sm" variant="info" onClick={logout}>Sign Out</Button>}
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <LoginForm handleLogin={handleLogin} handleChangeLogin={handleChangeLogin} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </IconContext.Provider>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav)