import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/education.css";

const educationData = [
  {
    org: "Sri Ramakrishna Mission Vidyalaya College",
    degree: "B.Sc. Information Technology",
    year: "2017 – 2020",
    place: "Coimbatore",
  },
  {
    org: "Gandhiji Govt. Higher Secondary School",
    degree: "Higher Secondary (HSC) – 88.6%",
    year: "2015",
    place: "Annur",
  },
  {
    org: "Gandhiji Govt. Higher Secondary School",
    degree: "SSLC – 86.6%",
    year: "2017",
    place: "Annur",
  },
];

export default function Education() {
  return (
    <section id="education" className="education-atom-section py-5">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="section-title h6 text-muted mb-4"
        >
        EDUCATION
        </motion.h2>
        <p className="section-subtitle gadient-text fw-bold text-center h3 mb-4">
          ACADEMIC BACKGROUND
        </p>
        <p className="section-desc text-center text-muted h6 mb-5">
  Formal education in Information Technology with strong foundations in computer science and web technologies.
</p>
        <div className="edu-atom-timeline">
          {educationData.map((item, index) => (
            <Row className="edu-atom-row align-items-center" key={index}>
              {/* Left side (logo / placeholder) */}
              <Col md={5} className="text-end edu-left">
                <div className="edu-org">
                  {item.org}
                </div>
              </Col>

              {/* Center line + dot */}
              <Col md={2} className="edu-center">
                <span className="edu-dot"></span>
              </Col>

              {/* Right side content */}
              <Col md={5} className="edu-right">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="edu-content"
                >
                  <span className="edu-year">{item.year}</span>
                  <h5>{item.degree}</h5>
                  <p>{item.place}</p>
                </motion.div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
}
