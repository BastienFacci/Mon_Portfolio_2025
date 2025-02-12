import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/fossil_gold.png";
import Burger from "../assets/images/menu_burger.png";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Référence pour détecter le clic en dehors

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Ferme le menu si un clic est détecté en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header id="header">
      <section id="logo_name">
        <NavLink to="/">
          <img src={Logo} alt="Logo" id="logo" />
        </NavLink>
        <h1 id="portfolio_name">BF</h1>
      </section>

      {/* Bouton Burger */}
      <button
        type="button"
        className={`menu_burger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img src={Burger} alt="menu_burger" id="icon_burger_menu" />
      </button>

      {/* Menu avec ref */}
      <nav ref={menuRef} className={`nav ${isOpen ? "open" : ""}`}>
        <button type="button" className="close-menu" onClick={toggleMenu}>
          ✖
        </button>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Expérience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
