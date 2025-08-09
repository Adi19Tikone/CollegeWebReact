import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-5">📞 Contact Us</h2>

        <Row className="mb-5">
          <Col md={6}>
            <h4>Department Address</h4>
            <p>
              Department of Computer Science & Engineering<br />
              Pimpri Chinchwad University, Pune - 411044<br />
              Maharashtra, India
            </p>

            <h5 className="mt-4">Email</h5>
            <p>
              <a href="mailto:cse@pcu.edu.in">cse@pcu.edu.in</a><br />
              <a href="mailto:hod.cse@pcu.edu.in">hod.cse@pcu.edu.in</a>
            </p>

            <h5 className="mt-4">Phone</h5>
            <p>
              +91-98765-43210<br />
              +91-87654-32109
            </p>
          </Col>

          <Col md={6}>
            <h4>Send us a Message</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>

              <Button variant="primary" type="submit" disabled>
                Submit (Coming Soon)
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Optional Google Map */}
      {/* Map Section */}
<Row>
  <Col>
    <h4 className="mb-3">
      📍 Find Us on Map
    </h4>
    <div className="ratio ratio-16x9 contact-map">
      <iframe
        title="PCU Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.1088793597914!2d73.60484507596021!3d18.748673062165295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2addaeb41d919%3A0xcc551cf73e3bdf1c!2sPimpri%20Chinchwad%20University!5e0!3m2!1sen!2sin!4v1754768159914!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </Col>
</Row>

      </Container>
    </div>
  );
}

export default Contact;
