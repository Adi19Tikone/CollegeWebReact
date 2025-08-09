import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUniversity,
  FaMoneyBillWave,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import "./Research.css"; // create for styling

function Research() {
  const researchAreas = [
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity & Blockchain",
    "Internet of Things (IoT)",
    "Cloud & Edge Computing",
    "Data Science & Big Data Analytics",
    "Natural Language Processing",
    "Human-Computer Interaction",
    "Software Engineering & Testing",
  ];

  const labs = [
    {
      title: "AI & ML Research Lab",
      description:
        "Focused on deep learning, computer vision, and intelligent systems. Equipped with GPUs and modern ML frameworks.",
    },
    {
      title: "Cybersecurity Lab",
      description:
        "Explores ethical hacking, cryptography, and secure system design with hands-on simulation tools.",
    },
    {
      title: "IoT & Embedded Systems Lab",
      description:
        "Works on smart devices, sensor networks, and real-time data processing using Arduino, Raspberry Pi, etc.",
    },
  ];

  const projects = [
    {
      title: "Smart Campus Surveillance using Edge AI",
      funding: "Funded by AICTE, ₹8.5 Lakh",
      year: "2023–2025",
    },
    {
      title: "Secure Voting System using Blockchain",
      funding: "In-house Research Grant, ₹3 Lakh",
      year: "2022–2023",
    },
  ];

  return (
    <motion.div
      className="research-page py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Red Header Strip */}
      <div className="research-header-strip text-white text-center py-3">
        <h2 className="mb-0 fw-bold">Research & Innovation</h2>
      </div>

      <Container className="mt-4">
        {/* Research Areas */}
        <Row className="mb-5">
          <Col>
            <h4 className="fw-semibold mb-3">
              <FaSearch className="me-2 text-danger" /> Core Research Areas
            </h4>
            <ul className="list-unstyled">
              {researchAreas.map((area, index) => (
                <motion.li
                  key={index}
                  className="mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaCheckCircle className="me-2 text-danger" />
                  {area}
                </motion.li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Research Labs */}
        <Row className="mb-5">
          <Col>
            <h4 className="fw-semibold mb-3">
              <FaUniversity className="me-2 text-danger" /> Research Labs
            </h4>
          </Col>
        </Row>
        <Row>
          {labs.map((lab, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 whileHover={{ scale: 1.03 }} 
                 transition={{ type: 'spring', stiffness: 200 }}
              >
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title className="text-danger fw-bold">
                      {lab.title}
                    </Card.Title>
                    <Card.Text>{lab.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Funded Projects */}
        <Row className="mb-5">
          <Col>
            <h4 className="fw-semibold mb-3">
              <FaMoneyBillWave className="me-2 text-danger" /> Funded Projects
            </h4>
            <ul>
              {projects.map((project, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <strong>{project.title}</strong> — {project.funding} (
                  {project.year})
                </motion.li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Collaborations */}
        <Row>
          <Col>
            <h4 className="fw-semibold mb-3">
              <FaHandshake className="me-2 text-danger" /> Research
              Collaborations
            </h4>
            <p>
              The department actively collaborates with industries and academic
              institutions including:
            </p>
            <ul>
              <li>IIT Bombay (AI Research)</li>
              <li>Persistent Systems (Internship & R&D)</li>
              <li>PCMC Smart City Project (IoT Integration)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Research;