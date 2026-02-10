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
    image: "/public/images/i3.jpg",
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
    image: "/public/images/i1.jpg",
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
    image: "/public/images/i2.jpg",
  },
];

export default function ProjectsAlt() {
  return (
    <section id="projects" className="py-5 projects-alt">
      <Container>
        {/* Header */}
        <Row className="mb-4 justify-content-center text-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted h5 mb-2">PROJECTS</p>
              <h3 className="fw-bold mb-3">PROFESSIONAL PROJECT EXPERIENCE</h3>
              <p className="text-muted h5">
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
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url(${p.image})`,
                }}
              >
                <div className="project-card-content">
                  <h5 className="fw-semibold text-white">{p.title}</h5>
                  <p className="text-light small mb-2">{p.desc}</p>

                  <ul className="small text-light ps-3">
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
                    <Button
                      size="sm"
                      variant="outline-light"
                      href={p.live}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-info"
                      href={p.github}
                      target="_blank"
                    >
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
  // bro csss

  .rg{
  color: #5b3fd1 !important; 
}

.projects-alt {
  background: whitesmoke;
}

/* Full background image card */
.project-bg-card {
  height: 100%;
  min-height: 360px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}

.project-bg-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

/* Content overlay */
.project-card-content {
  padding: 20px;
  width: 100%;
  backdrop-filter: blur(2px);
}

/* Tech badge */
.tech-pill {
  background: rgba(255, 255, 255, 0.9) !important;
  color: #1e3a8a !important;
  font-weight: 600;
  border: none;
}
