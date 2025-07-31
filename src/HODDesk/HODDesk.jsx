import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './HODDesk.css';
import hodImage from '../utils/images/hod.jpg';
import Footer from '../components/Footer';

function HODDesk() {
  return (
    <div className="hod-desk-container">
      <motion.div
        className="hod-desk-content py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hod-header-strip text-white text-center py-3">
          <h2 className="mb-0 fw-bold">Message From Honorable HOD's Desk</h2>
        </div>

        <Container className="mt-4">
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img
                src={hodImage}
                alt="Head of Department"
                className="img-fluid rounded shadow hod-image"
              />
              <h5 className="mt-3 text-danger fw-bold">Dr. Vijay Katkar</h5>
              <p className="text-muted">HOD, Computer Science & Engineering</p>
            </Col>

            <Col md={8}>
              <Card className="shadow border-0">
                <Card.Body>
                  <Card.Text className="fs-5" style={{ textAlign: 'justify' }}>
                    Welcome to the <b>Department of Computer Science and Engineering</b> at <b>PCET's Pimpri Chinchwad University</b>. 
                    As Head of Department, I am proud to lead a team of dedicated faculty members committed to academic excellence, 
                    innovation, and shaping the technocrats of tomorrow.
                    <br /><br />
                    Our department emphasizes a strong foundation in computing, while keeping pace with emerging technologies 
                    like AI, Data Science, and Machine Learning. We believe in fostering a holistic learning environment that 
                    prepares our students for both professional and research careers globally.
                    <br /><br />
                    We invite you to explore the department, connect with our vibrant community, and be a part of our journey 
                    toward technological excellence and societal impact.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.div>

      
    </div>
  );
}

export default HODDesk;