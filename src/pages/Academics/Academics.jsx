import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { AiFillBook } from 'react-icons/ai';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaRulerCombined } from 'react-icons/fa';
import Footer from '../../components/Footer';
import './Academics.css';

function Academics() {
  return (
    <div className="academics-page d-flex flex-column min-vh-100">
      {/* Header */}
      <div className="academics-header-strip text-white text-center py-5 my-5">
        <h2 className="mb-0 fw-bold">Academic Programs</h2>
      </div>

      <Container className="flex-grow-1 py-5 bg-white">
        {/* Program Cards */}
        <Row className="mb-5">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }} 
              transition={{ type: 'spring', stiffness: 200 }}
             
            >
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center gap-2 text-white academics-header-strip fw-semibold">
                    <FaGraduationCap className="fs-4" />
                    B.Tech in Computer Science & Engineering
                  </Card.Title>
                  <Card.Text>
                    A 4-year undergraduate program offering a strong foundation in computing, programming, algorithms, and advanced topics like AI, ML, cybersecurity, and software engineering.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }} 
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center gap-2 text-white academics-header-strip fw-semibold">
                    <FaGraduationCap className="fs-4" />
                    M.Tech in Computer Science
                  </Card.Title>
                  <Card.Text>
                    A 2-year postgraduate program focusing on research and specialized knowledge in areas like data science, IoT, high-performance computing, and more.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row className="mb-5">
  <Col>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-danger text-white p-3 d-flex align-items-center rounded mb-3">
        <AiFillBook size={28} className="me-2" />
        <h4 className="mb-0 fw-semibold">Curriculum Highlights</h4>
      </div>

      <ul className="ps-3">
        <li>Programming Fundamentals, Data Structures, Algorithms</li>
        <li>Database Management Systems, Operating Systems, Networks</li>
        <li>Artificial Intelligence, Machine Learning, and Deep Learning</li>
        <li>Cybersecurity, Blockchain, and Cloud Computing</li>
        <li>Web and Mobile App Development</li>
        <li>Capstone Projects and Industry Internships</li>
      </ul>
      <p>
        Curriculum is designed as per guidelines of AICTE and affiliating university, with frequent updates based on industry needs.
      </p>
    </motion.div>
  </Col>
</Row>

<Row className="mb-5">
  <Col>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-danger text-white p-3 d-flex align-items-center rounded mb-3">
        <BsCalendar2WeekFill size={22} className="me-2" />
        <h4 className="mb-0 fw-semibold">Academic Calendar & Timetables</h4>
      </div>

      <p>
        Semester-wise academic calendars, examination schedules, and timetables are released by the department and can be accessed below:
      </p>
      <ul>
        <li><a href="/AC1-Higher-Classes.pdf" target="_blank" rel="noopener noreferrer">Academic Calendar (PDF)</a></li>
        <li><a href="/SOE_FY_B.tech_2024.pdf" target="_blank" rel="noopener noreferrer">B.Tech Computer Science & Engineering Syllabus (FY)</a></li>
        <li><a href="/SOE_B.tech_2nd_year_CSE_2024.pdf" target="_blank" rel="noopener noreferrer">B.Tech Computer Science & Engineering Syllabus (SY)</a></li>
        <li><a href="/SOE_B.tech_CSE_AIML.pdf" target="_blank" rel="noopener noreferrer">B.Tech Computer Science & Engineering AIML Syllabus</a></li>
        <li><a href="/SOE_M.tech_2024.pdf" target="_blank" rel="noopener noreferrer">M.Tech Computer Science & Engineering Syllabus (AI)</a></li>
      </ul>
    </motion.div>
  </Col>
</Row>

<Row>
  <Col>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-danger text-white p-3 d-flex align-items-center rounded mb-3">
        <FaRulerCombined size={22} className="me-2" />
        <h4 className="mb-0 fw-semibold">Examination & Evaluation</h4>
      </div>

      <p>
        The department follows a continuous internal assessment system along with end-semester examinations. Evaluation includes quizzes, assignments, practicals, mid-terms, and final exams.
      </p>
      <p>
        Grading is done as per university norms, with transparency and moderation processes in place.
      </p>
    </motion.div>
  </Col>
</Row>
      </Container>

  
    </div>
  );
}

export default Academics;