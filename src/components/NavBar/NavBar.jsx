import React from "react";
import styles from "./navBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBar = ({setLang, lang}) => {



  return (
    <Navbar variant="dark" className={styles.navbar} expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link className={styles.navLink} href="/">{lang === 'es' ? 'Inicio' : 'Home'}</Nav.Link>
            <Nav.Link className={styles.navLink} href="#about">Leonel</Nav.Link>
            <Nav.Link className={styles.navLink} href="#skills">{lang === 'es' ? 'Conocimientos' : 'Skills'}</Nav.Link>
            <Nav.Link className={styles.navLink} href="#projects">{lang === 'es' ? 'Proyectos' : 'Projects'}</Nav.Link>
            <button onClick={()=>{setLang('es')}} className="btn">🇪🇸</button>
            <button onClick={()=>{setLang('en')}} className="btn">🇺🇸</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
