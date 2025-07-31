import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AdminStaff.css'; // Create this CSS file
import Footer from '../../components/Footer';
import admin1 from '../../utils/images/placeholder.jpg'; // Replace with real images
import admin2 from '../../utils/images/placeholder.jpg';
import admin3 from '../../utils/images/placeholder.jpg';

const adminStaffData = [
  {
    name: 'Mrs. Sunita Patil',
    designation: 'Department Office Coordinator',
    image: admin1,
  },
  {
    name: 'Mr. Rajesh Shinde',
    designation: 'Lab Coordinator',
    image: admin2,
  },
  {
    name: 'Ms. Priya Jadhav',
    designation: 'Office Assistant',
    image: admin3,
  },
  // Add more admin staff here if needed
];

function AdminStaff() {
  return (
    <div className="admin-staff-page py-5">
      <div className="admin-header-strip text-white text-center py-3">
        <h2 className="mb-0 fw-bold">Administrative Staff</h2>
      </div>

      <Container className="mt-4">
        <Row>
          {adminStaffData.map((staff, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <Card className="shadow admin-card">
                <Card.Img
                  variant="top"
                  src={staff.image}
                  alt={staff.name}
                  className="admin-img"
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

export default AdminStaff;