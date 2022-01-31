import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar justify-content-evenly"
        style={{ backgroundColor: "yellowgreen" }}
      >
        <ul className="nav ms-3 nav-pills nav-fill">
          <li className="nav-item me-2">
            <NavLink className="nav-link btn border" to="/translation">
              Translation
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link border btn" to="/profile">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
