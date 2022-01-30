import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/translation">Translation</NavLink>

        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </>
  )
}

export default Navbar
