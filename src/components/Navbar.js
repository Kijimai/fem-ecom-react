import React from "react"
import { navLinks } from "../data/data.js"
import iconOpen from "../images/icon-menu.svg"
import iconClose from "../images/icon-close.svg"
import { useGlobalContext } from "../utils/context.js"

const Navbar = () => {
  const { handleNavBtn, isNavOpen } = useGlobalContext()

  return (
    <header className="nav-header">
      <nav className="navbar">
        <button className="navbar__button" onClick={handleNavBtn}>
          <img src={isNavOpen ? iconOpen : iconClose} alt="navigation button" />
        </button>
        <ul className={`navLinks ${isNavOpen && "active"}`}>
          {navLinks.map((item) => {
            return (
              <li key={item.nav_id}>
                <a href={item.navUrl}>{item.navLink}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
