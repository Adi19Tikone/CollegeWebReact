import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './NonTeachingStaff.css'; // Create this file
import staff1 from '../../utils/images/placeholder.jpg';
import staff2 from '../../utils/images/placeholder.jpg';
import staff3 from '../../utils/images/placeholder.jpg';

const nonTeachingStaff = [
  {
    name: 'Mr. Mahesh Pawar',
    designation: 'Technical Assistant',
    image: staff1,
  },
  {
    name: 'Ms. Sneha Kulkarni',
    designation: 'Lab Assistant',
    image: staff2,
  },
  {
    name: 'Mr. Anil Kale',
    designation: 'Peon',
    image: staff3,
  },
  // Add more staff as needed
];

function NonTeachingStaff() {
  return (
    <div className="non-teaching-staff-page py-5">
      <div className="non-teaching-header-strip text-white text-center py-3">
        <h2 className="mb-0 fw-bold">Non-Teaching Staff</h2>
      </div>

      <Container className="mt-4">
        <Row>
          {nonTeachingStaff.map((staff, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <Card className="shadow non-card">
                <Card.Img
                  variant="top"
                  src={staff.image}
                  alt={staff.name}
                  className="non-img"
                />
                <Card.Body>
                  <Card.Title className="text-danger fw-bold">{staff.name}</Card.Title>
                  <Card.Text className="text-muted">{staff.designation}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NonTeachingStaff;
