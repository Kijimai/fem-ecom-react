import React from "react"
import { navLinks } from "../data/data.js"
const Navbar = () => {
  return (
    <ul>
      {navLinks.map((item) => {
        return (
          <li key={item.nav_id}>
            <a href={item.navUrl}>{item.navLink}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar
