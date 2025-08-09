import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaFolderOpen,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import "./StudentCorner.css";

function StudentCorner() {
  const resources = [
    {
      title: "Syllabus & Curriculum",
      description: "Access updated curriculum for all semesters.",
      link: "/docs/syllabus.pdf",
    },
    {
      title: "Previous Year Question Papers",
      description: "Download past university exam papers.",
      link: "/docs/question-papers.pdf",
    },
    {
      title: "Project Ideas & GitHub Repos",
      description: "Explore mini-project topics and open-source examples.",
      link: "https://github.com/search?q=student+cse+projects",
    },
  ];

  const clubs = [
    {
      name: "CodeCell",
      description:
        "Coding club focused on problem-solving, hackathons, and contests.",
    },
    {
      name: "Web Wizards",
      description:
        "Student club for frontend/backend development enthusiasts.",
    },
    {
      name: "AI Explorers",
      description:
        "Group exploring AI/ML through hands-on projects and research papers.",
    },
  ];

  const opportunities = [
    {
      title: "Internships @ DRDO, Persistent Systems",
      description: "Summer internships available for 3rd-year students.",
      link: "#",
    },
    {
      title: "Scholarships for Girls in Tech",
      description: "Google & Adobe Women Techmakers programs.",
      link: "#",
    },
    {
      title: "Open Innovation Challenge 2025",
      description: "Submit your tech idea and get it funded!",
      link: "#",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Red Header Strip */}
      <div className="student-header-strip text-white text-center my-5 py-5">
        <h2 className="fw-bold mb-0">
          <FaGraduationCap className="me-2" />
          Student Corner
        </h2>
      </div>

      <Container className="py-5 bg-light">
        {/* Resources Section */}
        <h4 className="mb-4">
          <FaFolderOpen className="text-danger me-2" />
          Academic Resources
        </h4>
        <Row className="mb-5">
          {resources.map((res, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>{res.title}</Card.Title>
                    <Card.Text>{res.description}</Card.Text>
                    <a
                      href={res.link}
                      className="btn btn-outline-danger btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Clubs Section */}
        <h4 className="mb-4">
          <FaUsers className="text-danger me-2" />
          Tech Clubs & Communities
        </h4>
        <Row className="mb-5">
          {clubs.map((club, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>{club.name}</Card.Title>
                    <Card.Text>{club.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Opportunities */}
        <h4 className="mb-4">
          <FaLightbulb className="text-danger me-2" />
          Opportunities & Events
        </h4>
        <Row>
          {opportunities.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <a
                      href={item.link}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Learn More
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
}

export default StudentCorner;
