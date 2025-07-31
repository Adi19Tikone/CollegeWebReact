import React from 'react';
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Placements() {
  const stats = [
    { year: "2024", placed: 94, highest: 21, average: 6.2 },
    { year: "2023", placed: 88, highest: 18, average: 5.5 },
    { year: "2022", placed: 81, highest: 14, average: 5.0 },
  ];

  const recruiters = [
    "TCS", "Infosys", "Wipro", "Cognizant", "Capgemini",
    "Amazon", "Microsoft", "Zensar", "Persistent", "Deloitte"
  ];

  const internships = [
    "Persistent Systems – Summer Training",
    "PCMC Smart City Hackathon",
    "IIT Bombay – Research Internship",
    "CodSoft & Oasis Infobyte – Virtual Internships",
  ];

  return (
    <div className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-5">💼 Placements & Internships</h2>

        {/* Placement Stats Table */}
        <Row className="mb-4">
          <Col>
            <h4 className="mb-3">📊 Placement Statistics</h4>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Students Placed (%)</th>
                  <th>Highest Package (LPA)</th>
                  <th>Average Package (LPA)</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat, idx) => (
                  <tr key={idx}>
                    <td>{stat.year}</td>
                    <td>{stat.placed}%</td>
                    <td>{stat.highest} LPA</td>
                    <td>{stat.average} LPA</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        {/* Recharts Bar Chart */}
        <Row className="mb-5">
          <Col>
            <h5 className="mb-3">📈 Placement Trends (Bar Chart)</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="placed" fill="#8884d8" name="Students Placed (%)" />
                <Bar dataKey="average" fill="#82ca9d" name="Avg Package (LPA)" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
        </Row>

        {/* Recruiters */}
        <Row className="mb-5">
          <Col>
            <h4 className="mb-3">🏢 Top Recruiters</h4>
            <div className="d-flex flex-wrap gap-3">
              {recruiters.map((company, index) => (
                <Badge bg="secondary" key={index} className="fs-6 p-2">
                  {company}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Internship Opportunities */}
        <Row className="mb-5">
          <Col>
            <h4 className="mb-3">📚 Internship Opportunities</h4>
            <ul>
              {internships.map((intern, index) => (
                <li key={index}>{intern}</li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Placement Cell Contact */}
        <Row>
          <Col>
            <h4 className="mb-3">📞 Placement Cell Contact</h4>
            <p><strong>Prof. Anjali Patil</strong></p>
            <p>Placement Coordinator, CSE Department</p>
            <p>Email: <a href="mailto:placements.cse@yourcollege.edu">placements.cse@yourcollege.edu</a></p>
            <p>Phone: +91-98765-43210</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Placements;