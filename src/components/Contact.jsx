import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TelephoneFill, EnvelopeFill, GeoAltFill } from "react-bootstrap-icons";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        {/* HEADER */} <p className="text-muted h6 mb-4">CONTACT</p>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="contact-title">HERE’S A CONTACT FORM</h2>
            <h5 className="contact-subtitle">Have Any Questions?</h5>
            <p className="contact-desc">
              I’m a Frontend Developer specializing in React.js and modern web
              technologies. Feel free to reach out for job opportunities,
              collaborations, or professional discussions.
            </p>
          </Col>
        </Row>

        {/* FORM */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form className="contact-form">
              <Row className="g-3">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Name" required />
                </Col>
                <Col md={6}>
                  <Form.Control type="email" placeholder="Email" required />
                </Col>
                <Col md={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    required
                  />
                </Col>
                <Col md={12}>
                  <Button type="submit" className="contact-btn">
                    SEND →
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* CONTACT INFO */}
        <Row className="contact-info-box mt-5 text-center">
          <Col md={4} className="info-item">
            <TelephoneFill />
            <h6>MY PHONE</h6>
            <p>+91 63857 08693</p>
          </Col>

          <Col md={4} className="info-item">
            <EnvelopeFill />
            <h6>MY EMAIL</h6>
            <p>akinfotech63@gmail.com</p>
          </Col>

          <Col md={4} className="info-item">
            <GeoAltFill />
            <h6>MY ADDRESS</h6>
            <p>Annur, Coimbatore – 641653</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
