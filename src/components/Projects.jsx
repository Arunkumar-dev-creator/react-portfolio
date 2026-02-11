import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  {
    title: "Ice-Cream E-Commerce Web Application",
    desc: "Responsive e-commerce frontend with product listing, cart management, price calculation, and local storage persistence.",
    points: [
      "Built reusable React components",
      "Implemented cart & checkout flow",
      "Optimized UI for mobile responsiveness",
    ],
    tech: ["React", "Bootstrap", "JavaScript"],
    live: "https://icecream-shop-demo.vercel.app",
    github: "https://github.com/your-username/icecream-ecommerce",
    image: "/images/i1.jpg",
  },
  {
    title: "Product Inventory Management System",
    desc: "Inventory management system with CRUD operations, stock tracking, and responsive UI for efficient data handling.",
    points: [
      "Implemented product CRUD features",
      "Real-time stock update logic",
      "Clean UI with form validation",
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    live: "https://inventory-app-demo.netlify.app",
    github: "https://github.com/your-username/inventory-management",
    image: "/images/i3.jpg",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Professional portfolio website with modern UI, animations, and responsive layout to showcase projects and skills.",
    points: [
      "Modern UI with Framer Motion",
      "Responsive layout for all devices",
      "Deployed using Vercel",
    ],
    tech: ["React", "Bootstrap", "Framer Motion"],
    live: "https://your-username.vercel.app",
    github: "https://github.com/your-username/portfolio",
    image: "/images/i2.jpg",
  },
];

export default function ProjectsAlt() {
  return (
    <section id="projects" className="py-5 projects-alt">
      <Container><p className="projects-kicker text-muted h6 mb-4 ">PROJECTS</p>
        {/* Header */}
        <Row className="mb-5 justify-content-center text-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              
              <h3 className="fw-bold mb-4 rg ">
                PROFESSIONAL PROJECT EXPERIENCE
              </h3>
              <p className="text-muted h6 mt-3">
                Frontend projects using React, JavaScript, and responsive UI.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Cards */}
        <Row className="g-4">
          {projects.map((p, i) => (
            <Col md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="project-bg-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.75)), url(${p.image})`,
                }}
              >
                <div className="project-card-content">
                  <h5 className="fw-semibold">{p.title}</h5>
                  <p className="small">{p.desc}</p>

                  <ul className="small ps-3">
                    {p.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>

                  <div className="mb-3">
                    {p.tech.map((t, idx) => (
                      <Badge key={idx} pill className="me-2 mb-2 tech-pill">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    <Button size="sm" className="live-btn fw-bold"  variant="outline-success" href={p.live} target="_blank">
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline-light" href={p.github} target="_blank">
                      GitHub
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
