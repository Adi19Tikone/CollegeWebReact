import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Research() {
  const researchAreas = [
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity & Blockchain",
    "Internet of Things (IoT)",
    "Cloud & Edge Computing",
    "Data Science & Big Data Analytics",
    "Natural Language Processing",
    "Human-Computer Interaction",
    "Software Engineering & Testing"
  ];

  const labs = [
    {
      title: "AI & ML Research Lab",
      description: "Focused on deep learning, computer vision, and intelligent systems. Equipped with GPUs and modern ML frameworks."
    },
    {
      title: "Cybersecurity Lab",
      description: "Explores ethical hacking, cryptography, and secure system design with hands-on simulation tools."
    },
    {
      title: "IoT & Embedded Systems Lab",
      description: "Works on smart devices, sensor networks, and real-time data processing using Arduino, Raspberry Pi, etc."
    }
  ];

  const projects = [
    {
      title: "Smart Campus Surveillance using Edge AI",
      funding: "Funded by AICTE, ₹8.5 Lakh",
      year: "2023–2025"
    },
    {
      title: "Secure Voting System using Blockchain",
      funding: "In-house Research Grant, ₹3 Lakh",
      year: "2022–2023"
    }
  ];

  return (
    <div className="py-5 bg-white">
      <Container>
        <h2 className="mb-5 text-center fw-bold">Research & Innovation</h2>

        {/* Research Areas */}
        <Row className="mb-5">
          <Col>
            <h4 className="fw-semibold">🔍 Core Research Areas</h4>
            <ul>
              {researchAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Research Labs */}
        <Row className="mb-5">
          <Col>
            <h4 className="fw-semibold">🏛️ Research Labs</h4>
          </Col>
        </Row>
        <Row className="mb-4">
          {labs.map((lab, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{lab.title}</Card.Title>
                  <Card.Text>{lab.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Funded Projects */}
        <Row className="mb-5">
          <Col>
            <h4 className="fw-semibold">💰 Funded Projects</h4>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <strong>{project.title}</strong> — {project.funding} ({project.year})
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Collaborations */}
        <Row>
          <Col>
            <h4 className="fw-semibold">🤝 Research Collaborations</h4>
            <p>
              The department actively collaborates with industries and academic institutions including:
            </p>
            <ul>
              <li>IIT Bombay (AI Research)</li>
              <li>Persistent Systems (Internship & R&D)</li>
              <li>PCMC Smart City Project (IoT Integration)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Research;