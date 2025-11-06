import logo from '../images/Logo.png';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* === LOGO === */}
        <div className="logo-container">
          <img src={logo} alt="Dircel Abogados Asociados S.A.S" className="logo-img" />
          <span className="logo-text">Dircel Abogados Asociados S.A.S</span>
        </div>

        {/* === BOTÓN HAMBURGUESA === */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* === MENÚ === */}
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>INICIO</a></li>
            <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>NOSOTROS</a></li>
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>SERVICIOS</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
