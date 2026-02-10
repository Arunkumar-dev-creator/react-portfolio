import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/certification.css";

const certifications = [
  {
    title: "MERN Stack Developer / Full Stack Web Developer",
    org: "Pumo Technovation, Coimbatore",
    year: "2025",
    desc: "Completed intensive training in full stack web development with hands-on projects using modern web technologies.",
  },
];

export default function Certification() {
  return (
    <section id="certification" className="cert-atom-section py-5 mt-4">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="section-title text-muted h5 mb-4"
        >
          CERTIFICATION
        </motion.h2>

        <p className="section-subtitle fw-bold text-center h3 mb-4">
         PROFESSIONAL TRAINING & CREDENTIALS
        </p>
    <p className="section-desc text-center text-muted h6 mb-4">
  Selected certifications demonstrating practical training in full-stack web development and modern frontend technologies.
</p>
        <Row className="justify-content-center">
          {certifications.map((item, index) => (
            <Col md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="cert-card"
              >
                <span className="cert-year">{item.year}</span>
                <h5>{item.title}</h5>
                <p className="cert-org">{item.org}</p>
                <p className="cert-desc">{item.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
