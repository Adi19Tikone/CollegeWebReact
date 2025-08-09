import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// React Icons
import { FaChartBar, FaBuilding, FaUniversity, FaPhoneAlt } from 'react-icons/fa';

// Import recruiter logos from utils/images
import TCSLogo from '../../utils/images/tcs.png';
import InfosysLogo from '../../utils/images/infosys.jpg';
import WiproLogo from '../../utils/images/wipro.png';
import CognizantLogo from '../../utils/images/Cognizant.png';
import CapgeminiLogo from '../../utils/images/capgemini.jpg';
import AmazonLogo from '../../utils/images/amazon.png';
import MicrosoftLogo from '../../utils/images/microsoft.png';
import ZensarLogo from '../../utils/images/zensar.png';
import PersistentLogo from '../../utils/images/persistent.png';
import DeloitteLogo from '../../utils/images/deloitte.png';

import './Placement.css';

function Placements() {
  const stats = [
    { year: "2024", placed: 94, highest: 21, average: 6.2 },
    { year: "2023", placed: 88, highest: 18, average: 5.5 },
    { year: "2022", placed: 81, highest: 14, average: 5.0 },
  ];

  const recruiters = [
    { name: "TCS", logo: TCSLogo },
    { name: "Infosys", logo: InfosysLogo },
    { name: "Wipro", logo: WiproLogo },
    { name: "Cognizant", logo: CognizantLogo },
    { name: "Capgemini", logo: CapgeminiLogo },
    { name: "Amazon", logo: AmazonLogo },
    { name: "Microsoft", logo: MicrosoftLogo },
    { name: "Zensar", logo: ZensarLogo },
    { name: "Persistent", logo: PersistentLogo },
    { name: "Deloitte", logo: DeloitteLogo }
  ];

  const internships = [
    "Persistent Systems – Summer Training",
    "PCMC Smart City Hackathon",
    "IIT Bombay – Research Internship",
    "CodSoft & Oasis Infobyte – Virtual Internships",
  ];

  return (
    <div className="placements-page py-5 bg-white">
      {/* Red strip header */}
      <div className="placement-header-strip text-white text-center py-3">
        <h2 className="mb-0 fw-bold">Placements & Internships</h2>
      </div>

      <Container className="mt-4">
        
        {/* Placement Stats Table */}
        <Row className="mb-4">
          <Col>
            <h4 className="section-title mb-3 text-danger">
              <FaChartBar className="me-2" /> Placement Statistics
            </h4>
            <Table striped bordered hover responsive>
              <thead className="table-danger">
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
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="placed" fill="#dc3545" name="Students Placed (%)" />
                <Bar dataKey="average" fill="#6c757d" name="Avg Package (LPA)" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
        </Row>

        {/* Recruiters */}
        <Row className="mb-5">
          <Col>
            <h4 className="section-title mb-3 text-danger">
              <FaBuilding className="me-2" /> Top Recruiters
            </h4>
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-center">
              {recruiters.map((company, index) => (
                <div
                  key={index}
                  style={{
                    width: "100px",
                    textAlign: "center",
                    padding: "5px"
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="recruiter-logo"
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Internship Opportunities */}
        <Row className="mb-5">
          <Col>
            <h4 className="section-title mb-3 text-danger">
              <FaUniversity className="me-2" /> Internship Opportunities
            </h4>
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
            <h4 className="section-title mb-3 text-danger">
              <FaPhoneAlt className="me-2" /> Placement Cell Contact
            </h4>
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
