import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function StudentCorner() {
  const resources = [
    {
      title: "Syllabus & Curriculum",
      description: "Access updated curriculum for all semesters.",
      link: "/docs/syllabus.pdf"
    },
    {
      title: "Previous Year Question Papers",
      description: "Download past university exam papers.",
      link: "/docs/question-papers.pdf"
    },
    {
      title: "Project Ideas & GitHub Repos",
      description: "Explore mini-project topics and open-source examples.",
      link: "https://github.com/search?q=student+cse+projects"
    }
  ];

  const clubs = [
    {
      name: "CodeCell",
      description: "Coding club focused on problem-solving, hackathons, and contests."
    },
    {
      name: "Web Wizards",
      description: "Student club for frontend/backend development enthusiasts."
    },
    {
      name: "AI Explorers",
      description: "Group exploring AI/ML through hands-on projects and research papers."
    }
  ];

  const opportunities = [
    {
      title: "Internships @ DRDO, Persistent Systems",
      description: "Summer internships available for 3rd-year students.",
      link: "#"
    },
    {
      title: "Scholarships for Girls in Tech",
      description: "Google & Adobe Women Techmakers programs.",
      link: "#"
    },
    {
      title: "Open Innovation Challenge 2025",
      description: "Submit your tech idea and get it funded!",
      link: "#"
    }
  ];

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-5">🎓 Student Corner</h2>

        {/* Resources Section */}
        <h4 className="mb-4">📁 Academic Resources</h4>
        <Row className="mb-5">
          {resources.map((res, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{res.title}</Card.Title>
                  <Card.Text>{res.description}</Card.Text>
                  <a href={res.link} className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">View</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Clubs Section */}
        <h4 className="mb-4">🤖 Tech Clubs & Student Communities</h4>
        <Row className="mb-5">
          {clubs.map((club, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{club.name}</Card.Title>
                  <Card.Text>{club.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Opportunities */}
        <h4 className="mb-4">💡 Opportunities & Events</h4>
        <Row>
          {opportunities.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <a href={item.link} className="btn btn-outline-success btn-sm">Learn More</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default StudentCorner;