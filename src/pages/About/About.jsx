import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaQuoteLeft } from 'react-icons/fa';
import { Accordion } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import './About.css';
import student1 from '../../utils/images/imgplaceholder.jpeg';
import student2 from '../../utils/images/imgplaceholder.jpeg';
import student3 from '../../utils/images/imgplaceholder.jpeg';
import student4 from '../../utils/images/imgplaceholder.jpeg';
import student5 from '../../utils/images/imgplaceholder.jpeg';
import student6 from '../../utils/images/imgplaceholder.jpeg';
import student7 from '../../utils/images/imgplaceholder.jpeg';
import student8 from '../../utils/images/imgplaceholder.jpeg';
import student9 from '../../utils/images/imgplaceholder.jpeg';


const testimonials = [
  { name: "Aarav Deshmukh", year: "CSE 2022", quote: "Great experience at PCU!", image: student1 },
  { name: "Sneha Kulkarni", year: "AI/ML 2023", quote: "Supportive faculty and vibrant campus life.", image: student2 },
  { name: "Ravi Patil", year: "M.Tech CSE", quote: "State-of-the-art labs and resources.", image: student3 },
  { name: "Nisha Verma", year: "CSE 2024", quote: "Innovative curriculum and industry exposure.", image: student4 },
  { name: "Harsh Mehta", year: "AI/ML 2023", quote: "Loved the hackathons and projects!", image: student5 },
  { name: "Divya Joshi", year: "CSE 2022", quote: "Best place to kickstart a tech career.", image: student6 },
  { name: "Kunal Rao", year: "DS 2025", quote: "Amazing peer network and opportunities.", image: student7 },
  { name: "Pooja Singh", year: "AI 2022", quote: "Faculties helped me reach my goals.", image: student8 },
  { name: "Rohit Nair", year: "ML 2023", quote: "Great balance of academics and activities.", image: student9 },
];

function About() {
  const carouselRef = useRef(null);
  const groupSize = 3;
  const groupCount = Math.ceil(testimonials.length / groupSize);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % groupCount);
    }, 4000); // every 4 secs
  
    return () => clearInterval(interval);
  }, [groupCount]);
  
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 1.2s ease-in-out';
      carouselRef.current.style.transform = `translateX(-${(currentIndex * 100) / groupCount}%)`;
    }
  }, [currentIndex, groupCount]);
  
  return (
    <motion.div className="py-5 bg-white text-dark" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >
      <Container>
        <motion.h2 className="mb-4 text-center section-strip" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          About the Department
        </motion.h2>

        <Row className="mb-5">
          <Col>
            <motion.p className="fs-5" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              The <b>Department of Computer Science & Engineering</b> at <b>PCET's Pimpri Chinchwad University </b>, established under the prestigious <b>Pimpri Chinchwad Education Trust (PCET)</b>, is committed to shaping the next generation of innovators, technologists, and industry leaders.
              With a strong foundation in core computing principles and a forward-looking curriculum aligned with <b>NEP 2020 and Outcome-Based Education (OBE)</b>, the department offers B.Tech programs in Computer Science & Engineering, as well as specializations in <b>Artificial Intelligence & Machine Learning and Data Science</b>. Postgraduate (M.Tech) and doctoral (Ph.D.) programs further support advanced learning and research excellence.
              Students benefit from state-of-the-art infrastructure, industry-grade labs, and active learning environments led by experienced faculty and supported by strategic collaborations with leading tech companies. A culture of innovation is fostered through student clubs, hackathons, research projects, and a focus on entrepreneurship.
              Backed by <b>PCET’s centralized placement cell</b> and a strong industry network, the department ensures career-ready graduates with opportunities both in India and internationally. The department continues to build a legacy of excellence through its emphasis on academic rigor, ethical values, and real-world impact.
            </motion.p>
            <motion.p className="fs-5" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              The curriculum emphasizes <b>AI</b>, cybersecurity, data science, and modern technologies, adapting to real-world demands.
            </motion.p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200 }} viewport={{ once: true }}>
              <Card className="h-100 shadow border-0" style={{ borderLeft: '5px solid #dc3545' }}>
                <Card.Body>
                  <Card.Title className="text-white section-strip  fw-bold d-flex align-items-center">
                    <FaBullseye className="me-2" /> Mission
                  </Card.Title>
                  <Card.Text className="fs-5">
                    To provide quality education in Computer Science and Engineering by fostering creativity, innovation, and leadership.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200 }} viewport={{ once: true }}>
              <Card className="h-100 shadow border-0" style={{ borderLeft: '5px solid #ffc107' }}>
                <Card.Body>
                  <Card.Title className="text-warning section-strip fw-bold d-flex align-items-center">
                    <FaEye className="me-2" /> Vision
                  </Card.Title>
                  <Card.Text className="fs-5">
                    To be a center of excellence in Computer Science education and research, producing globally competent and socially responsible professionals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row className="mb-5">
  <Col>
    <motion.h4
      className="fw-bold section-strip text-start mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Department Overview
    </motion.h4>
    <motion.p
      className="fs-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      The Department of Computer Science & Engineering at PCET’s Pimpri Chinchwad University offers cutting-edge education grounded in modern pedagogy and aligned with NEP 2020 and industry standards. With programs at undergraduate, postgraduate, and doctoral levels, the department is committed to producing globally competent professionals equipped with technical and ethical excellence.
    </motion.p>
  </Col>
</Row>
<Row className="mb-5">
  <Col>
    <motion.h4
      className="fw-bold section-strip text-start mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Program Educational Objectives (PEOs)
    </motion.h4>
    <ul className="fs-5">
      <li><b>PEO1:</b> Graduates will establish themselves as successful professionals in computing and allied fields.</li>
      <li><b>PEO2:</b> Engage in continuous learning and advanced education to adapt to emerging technologies.</li>
      <li><b>PEO3:</b> Demonstrate leadership, communication skills, and ethical responsibility in diverse professional settings.</li>
    </ul>
  </Col>
</Row>

<Accordion defaultActiveKey="0" flush className="mb-5">
<Accordion.Item eventKey="1">
<Accordion.Header className="red-strip text-uppercase">PROGRAM OUTCOMES (POs)</Accordion.Header>
    <Accordion.Body>
      <ol className="fs-5 mb-0">
        <li>Engineering knowledge: Apply knowledge of mathematics, science, and engineering fundamentals.</li>
        <li>Problem analysis: Identify and solve complex engineering problems using scientific principles.</li>
        <li>Design/development of solutions for societal and environmental needs.</li>
        <li>Conduct investigations using research-based knowledge and methods.</li>
        <li>Modern tool usage: Apply modern IT tools with an understanding of limitations.</li>
        <li>The engineer and society: Assess societal, health, safety, legal, and cultural issues.</li>
        <li>Environment and sustainability: Understand the impact of solutions in a global context.</li>
        <li>Ethics: Commit to professional ethics and responsibilities.</li>
        <li>Individual and teamwork: Function effectively as an individual and team member.</li>
        <li>Communication: Communicate effectively on complex engineering activities.</li>
        <li>Project management and finance: Apply knowledge of engineering and management principles.</li>
        <li>Life-long learning: Recognize the need and ability to engage in lifelong learning.</li>
      </ol>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
  <Accordion.Header className="red-strip text-uppercase">PROGRAM SPECIFIC OUTCOMES (PSOs)</Accordion.Header>
    <Accordion.Body>
      <ul className="fs-5 mb-0">
        <li><b>PSO1:</b> Apply fundamental knowledge of computing, mathematics, and engineering to solve complex real-world problems.</li>
        <li><b>PSO2:</b> Design intelligent systems and applications using AI, Data Science, and Machine Learning frameworks.</li>
      </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

    <Row className="mb-5">
  <Col>
    <motion.h4
      className="fw-bold section-strip  text-center mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200 }}
      viewport={{ once: true }}
    >
      <FaQuoteLeft className="me-2" />
      Student Testimonials
    </motion.h4>

    <div className="position-relative overflow-hidden" style={{ width: '100%' }}>
      <div
        ref={carouselRef}
        className="d-flex"
        style={{
          width: `${groupCount * 100}%`,
        }}
      >
        {Array.from({ length: groupCount }).map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="d-flex justify-content-around"
            style={{ width: `${100 / groupCount}%` }}
          >
            {testimonials
              .slice(groupIndex * groupSize, groupIndex * groupSize + groupSize)
              .map((t, i) => (
                <Card
                  key={i}
                  className="m-2 shadow border-0"
                  style={{ minWidth: '30%', flex: 1 }}
                >
                  <Card.Img
                    variant="top"
                    src={t.image}
                    alt={t.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Text className="fs-6 text-dark">
                      {t.quote || 'Great experience at PCU!'}
                    </Card.Text>
                    <Card.Subtitle className="mt-3 text-muted">
                      {t.name} – {t.year}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              ))}
          </div>
        ))}
      </div>
    </div>
  </Col>
</Row>

        <Row className="mb-5">
          <Col>
            <motion.div className="d-flex align-items-center justify-content-center mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h4 className="fw-bold section-strip mb-4">📢 News & Announcements</h4>
            </motion.div>

            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaCalendarAlt className="me-2 text-danger" />
                  July 15, 2025 – Orientation Program
                </Accordion.Header>
                <Accordion.Body>
                  Orientation for the new B.Tech CSE batch will be held at 10:00 AM in the main auditorium. Parents are welcome.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <FaCalendarAlt className="me-2 text-danger" />
                  July 20, 2025 – AI/ML Workshop
                </Accordion.Header>
                <Accordion.Body>
                  A certified NVIDIA trainer will host a hands-on AI/ML workshop. Limited seats—register via the department portal.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <FaCalendarAlt className="me-2 text-danger" />
                  August 1, 2025 – Hackathon Registrations
                </Accordion.Header>
                <Accordion.Body>
                  Registrations are now open for PCU's flagship hackathon. Exciting prizes, industry mentors, and live judging.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;
