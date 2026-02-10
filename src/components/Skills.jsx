import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPlug, FaMobileAlt } from "react-icons/fa";
import "../styles/skills.css";

const skills = [
  { name: "HTML5", desc: "Semantic Markup", icon: <FaHtml5 /> },
  { name: "CSS3", desc: "Modern Layouts & Animations", icon: <FaCss3Alt /> },
  { name: "JavaScript (ES6+)", desc: "Async, DOM, Logic", icon: <FaJsSquare /> },
  { name: "React.js", desc: "Component-Based UI", icon: <FaReact /> },
  { name: "Bootstrap", desc: "Responsive UI Framework", icon: <FaBootstrap /> },
  { name: "REST API Integration", desc: "Frontend ↔ Backend", icon: <FaPlug /> },
  { name: "Responsive Web Design", desc: "Mobile-First Approach", icon: <FaMobileAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className=" bro text-muted mb-4 h6" >
               SKILLS
            </p>
              <h3 className="gadient-text fw-bold text-center mb-4 rg">TECHNICAL SKILLS & COMPETENCIES</h3>
              <p className="text-muted text-center h6">
               Frontend technologies I use to build responsive, production-ready web applications.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4">
          {skills.map((skill, i) => (
            <Col key={skill.name} xs={6} md={4} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="skill-tile text-center h-100"
              >
                <div className="skill-icon">{skill.icon}</div>
                <h6 className="fw-semibold mb-1">{skill.name}</h6>
                <p className="text-muted small mb-0">{skill.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
