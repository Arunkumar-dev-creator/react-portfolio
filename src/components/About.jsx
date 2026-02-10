import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/about.css";
export default function About() {
  return (
    <section id="about" className="about-alt py-5">
      <Container>
        <Row className="mb-4">
          <Col>
          <p className="bro1 text-muted  h6 mb-4" >
               ABOUT ME
            </p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="fw-bold text-center mb-4 rg"
            >
              WHO AM I?
            </ motion.h3>
            <p className="text-muted text-center h6" >
               I am Arunkumar, a frontend developer focused on reliable, user-friendly web interfaces.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Story */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="story-card p-4 h-100"
            >
              {/* <h5 className="fw-semibold mb-2">My Story</h5> */}
              <p className="text-muted mb-">
                I specialize in developing responsive and high-performance web applications using React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap. I focus on writing clean, maintainable code and converting UI/UX designs into scalable, reusable components.
              </p><p className="text-muted mb-">
                Through hands-on project experience, I have built real-world applications such as e-commerce interfaces and inventory management systems, implementing features including dynamic product listings, REST API integration, state management, and responsive layouts. I am currently seeking an entry-level Frontend Developer role where I can contribute to production-grade products and grow within a collaborative engineering team.

              </p>

              <div className="mt-3 rg d-flex flex-wrap gap-2 ">
                {["React", "JavaScript", "Bootstrap", "Responsive UI"].map((t) => (
                  <Badge bg="light" text="dark" key={t} className="px-3 py-2 ">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Highlights */}
          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="highlight-card p-4 h-100"
            >
              <h5 className="fw-semibold mb-3 rg">Highlights</h5>
              <ul className="list-unstyled highlight-list">
                <li>✔ <strong>Role : </strong>Frontend Developer</li>
                <li>✔ <strong>Tech Stack : </strong>React,JavaScript,HTML,CSS,Bootstrap</li>
                <li>✔ <strong>Projects : </strong>E-commerce UI,Inventroy App</li>
                <li>✔ <strong>Location : </strong>Coimbatore,Tamilnadu,India</li>
                <li>✔ <strong>Career Goal : </strong>Frontend Developer/UI Engineer</li>
              </ul>

              <div className="stats mt-4">
                <div>
                  <h4 className="fw-bold mb-0">2+</h4>
                  <small className="text-muted">Projects</small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">10+</h4>
                  <small className="text-muted">Components</small>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">100%</h4>
                  <small className="text-muted">Responsive</small>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}