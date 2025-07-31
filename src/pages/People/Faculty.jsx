import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import faculty1 from '../../utils/images/placeholder.jpg';
import faculty2 from '../../utils/images/placeholder.jpg';
import './Faculty.css';
import Footer from '../../components/Footer';

const facultyData = [
  {
    name: 'Dr. Asha Mehta',
    designation: 'Professor & Dean',
    image: faculty1,
    socials: {
      linkedin: 'https://linkedin.com/in/asha-mehta',
      github: 'https://github.com/asha-mehta',
      instagram: 'https://instagram.com/asha_mehta',
      facebook: 'https://facebook.com/asha.mehta',
      twitter: 'https://twitter.com/asha_mehta',
      email: 'mailto:asha.mehta@pcet.edu.in',
    },
  },
  {
    name: 'Prof. Ramesh Patil',
    designation: 'Assistant Professor',
    image: faculty2,
    socials: {
      linkedin: 'https://linkedin.com/in/ramesh-patil',
      github: 'https://github.com/ramesh-patil',
      instagram: '',
      facebook: '',
      twitter: '',
      email: 'mailto:ramesh.patil@pcet.edu.in',
    },
  }
];

function Faculty() {
  return (
    <div className="faculty-wrapper d-flex flex-column min-vh-100">
      <div className="flex-grow-1 py-5 bg-white">
        <Container>
          <h2 className="faculty-header-strip text-white text-center py-3 mb-5">Our Faculty</h2>
          <Row>
            {facultyData.map((faculty, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Img
                    variant="top"
                    src={faculty.image}
                    className="faculty-image p-3"
                  />
                  <Card.Body>
                    <Card.Title className="text-danger fw-bold">
                      {faculty.name}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {faculty.designation}
                    </Card.Text>

                    <div className="social-icons mt-3">
                      {faculty.socials.linkedin && (
                        <a
                          href={faculty.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-2 text-decoration-none text-primary"
                        >
                          <i className="bi bi-linkedin fs-5"></i>
                        </a>
                      )}
                      {faculty.socials.github && (
                        <a
                          href={faculty.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-2 text-dark"
                        >
                          <i className="bi bi-github fs-5"></i>
                        </a>
                      )}
                      {faculty.socials.instagram && (
                        <a
                          href={faculty.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-2 text-danger"
                        >
                          <i className="bi bi-instagram fs-5"></i>
                        </a>
                      )}
                      {faculty.socials.facebook && (
                        <a
                          href={faculty.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-2 text-primary"
                        >
                          <i className="bi bi-facebook fs-5"></i>
                        </a>
                      )}
                      {faculty.socials.twitter && (
                        <a
                          href={faculty.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-2 text-info"
                        >
                          <i className="bi bi-twitter fs-5"></i>
                        </a>
                      )}
                      {faculty.socials.email && (
                        <a
                          href={faculty.socials.email}
                          className="mx-2 text-danger"
                        >
                          <i className="bi bi-envelope-fill fs-5"></i>
                        </a>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    
    </div>
  );
}

export default Faculty;