import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo-s.png';
import {useEffect, useState} from "react"
import linkedin from '../assets/img/linkedin-icon.svg';
import gitlab from '../assets/img/gitlab-icon.svg';
import navIcon3 from '../assets/img/resume-icon.png';



export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  const changeScroll = (position) => {
      window.scrollTo(0, position);
    };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home') }>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => changeScroll(1250)}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/starr-solis/" target="_blank"><img src={linkedin} alt="" /></a>
                <a href="https://gitlab.com/starrsolis" target="_blank"><img src={gitlab} alt="" /></a>
                <a href="https://docs.google.com/document/d/1Zq4msVTXf3xrjVrxzG-bh-oEs6Yj-j1Kb4hXnyyx0TA/edit?usp=sharing" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
                <button className="vvd" onClick={() => changeScroll(3200)}><span>Let???s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}





