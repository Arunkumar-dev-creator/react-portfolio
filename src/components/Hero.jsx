import { motion } from "framer-motion";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import "../styles/hero.css";
import "../styles/navbar.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Hero Navbar */}
      <Navbar expand="lg"  className="hero-navbar">
        <Container>
          <Navbar.Brand href="#home" className="hero-logo">
            ARUNKUMAR S
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="hero-navbar-nav" className="navbar-dark" />
          <Navbar.Collapse id="hero-navbar-nav">
            <Nav className="ms-auto hero-nav">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#education">EDUCATION</Nav.Link>
              <Nav.Link href="#certification">CERTIFICATION</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <Container className="hero-content">
        <motion.div
          className="hero-grid"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.img
            src="/public/images/i2.jpg"
            alt="Arun"
            className="hero-avatar"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <div>
            <h1 className="hero-title">Hello, I'm Arunkumar</h1>
            <h4 className="hero-subtitle">
              Front-End Developer | React Developer
            </h4>
            <p className="opacity-75 h6">
              I design and build fast, accessible, and responsive user
              interfaces for modern web applications.
            </p>

            <p className="opacity-75 h6">
              React.js • JavaScript (ES6+) • HTML5 • CSS3 • Bootstrap • Responsive Web Design
            </p>

            <div className="hero-actions mt-3">
              <Button href="#projects" variant="light" className="me-3">
                View Projects
              </Button>
              <Button
                variant="outline-light"
                href="/Arunkumar_Resume.pdf"
                download
              >
                Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
