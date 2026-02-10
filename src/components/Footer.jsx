import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  EnvelopeFill,
} from "react-bootstrap-icons";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-portfolio">
      {/* NEW CTA UI */}
      <div className="footer-cta-new">
        <Container>
          <Row className="align-items-center gy-4">
            <Col md={8}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Looking for a Frontend Developer?
              </motion.h3>
              <p className="cta-text-new">
                I build modern, responsive, and user-friendly web interfaces
                using React.js. Currently open to junior frontend roles and
                internships.
              </p>
            </Col>

            <Col md={4} className="text-md-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Button
                  href="#contact"
                  className="cta-btn-new"
                  variant="primary"
                >
                  Contact Me
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ThemeWagon Bottom Footer */}
      <div className="footer-main">
        <Container>
          <Row className="align-items-center gy-3">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">
                © {new Date().getFullYear()} Arun Kumar S. All rights reserved.
              </p>
            </Col>

            <Col md={6} className="text-center text-md-end">
              <div className="footer-social">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://linkedin.com/in/arunsk61"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                <a href="#">
                  <Twitter />
                </a>
                <a href="#">
                  <Instagram />
                </a>
                <a href="mailto:arunkumar.dev@gmail.com">
                  <EnvelopeFill />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
