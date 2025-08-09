import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTrophy, FaMedal, FaAward, FaLaptopCode } from 'react-icons/fa';
import './StudentAchievements.css';

const achievements = [
  {
    title: "Winner - Smart India Hackathon 2024",
    name: "Team CodeCrafters",
    details: "Developed an AI-based water quality monitoring system selected by the Ministry of Jal Shakti.",
    image: "https://source.unsplash.com/400x250/?hackathon,code",
    icon: <FaLaptopCode />
  },
  {
    title: "Top 1% - GATE 2024",
    name: "Rohit Kulkarni",
    details: "Secured All India Rank 157 in Computer Science.",
    image: "https://source.unsplash.com/400x250/?success,rank",
    icon: <FaMedal />
  },
  {
    title: "Best Research Paper Award",
    name: "Sneha Patil",
    details: "Paper on 'Federated Learning for IoT Devices' presented at IEEE ICACCS 2024.",
    image: "https://source.unsplash.com/400x250/?conference,research",
    icon: <FaAward />
  },
  {
    title: "Internship at Microsoft",
    name: "Ananya Shah",
    details: "Selected as Software Engineering Intern for Summer 2025.",
    image: "https://source.unsplash.com/400x250/?microsoft,office",
    icon: <FaTrophy />
  }
];

function StudentAchievements() {
  return (
    <div className="student-achievements-section py-5">
      <Container>
        {/* Red strip heading */}
        <div className="achievements-header-strip text-center mb-5">
          <h2 className="fw-bold text-white mb-0">🏆 Student Achievements</h2>
        </div>

        <Row className="g-4">
          {achievements.map((achieve, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="achievement-card h-100">
                <div className="achievement-img-container">
                  <Card.Img variant="top" src={achieve.image} alt={achieve.title} />
                  <div className="achievement-icon-overlay">
                    {achieve.icon}
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{achieve.title}</Card.Title>
                  <Card.Subtitle className="mb-2">{achieve.name}</Card.Subtitle>
                  <Card.Text>{achieve.details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default StudentAchievements;
