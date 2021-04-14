import React from 'react'
import '../../css/Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="nav-elements">
        <NavLink className="nav-element" to="/" style={{ textDecoration: "none", color: "white" }}>
          Sign In
        </NavLink>
        <NavLink className="nav-element" to="/" style={{ textDecoration: "none", color: "white" }}>
          Sign Up
        </NavLink>
        <NavLink className="nav-element" to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </NavLink>
        <NavLink className="nav-element" to="/studio" style={{ textDecoration: "none", color: "white" }}>
          Studio
        </NavLink>
        <NavLink className="nav-element" to="/explore" style={{ textDecoration: "none", color: "white" }}>
          Explore
        </NavLink>
        <NavLink className="nav-element" to="/profile" style={{ textDecoration: "none", color: "white" }}>
          Profile
        </NavLink>
      </div>
    </div>
  )
}

export default Header