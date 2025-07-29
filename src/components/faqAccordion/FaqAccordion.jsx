import React from 'react';
import './FaqAccordion.css';
import { Accordion } from 'react-bootstrap';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'> Frequently Asked Question </h2>
            <p> Here’s a tailored FAQ section specifically about School Of Engineering & Technology at PCET's Pimpri Chinchwad University</p>
                <Accordion defaultActiveKey="" flush>
                    <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is the eligibility for B.Tech at PCU ? </Accordion.Header>
                    <Accordion.Body>
                    → Candidates must have passed Class 12 (HSC) with Physics, Chemistry, and Mathematics and secured a minimum 60% aggregate. Entrance exams like JEE Main / MHT-CET may apply depending on the program.
                    </Accordion.Body>
                   </Accordion.Item>
                   <Accordion.Item eventKey='1'>
                    <Accordion.Header> Does PCU offer placement support for engineering students?</Accordion.Header>
                    <Accordion.Body>
                    → Yes. PCU has a dedicated Training & Placement Cell and maintains strong ties with companies in IT, automotive, manufacturing, and tech services for placements and internships.


                    </Accordion.Body>
                   </Accordion.Item>
                   <Accordion.Item eventKey='2'>
                    <Accordion.Header>  Are PCU’s engineering labs and infrastructure up-to-date?</Accordion.Header>
                    <Accordion.Body>
                    → Absolutely. PCU provides modern labs, smart classrooms, simulation centers, and innovation hubs to support practical learning and research.


                    </Accordion.Body>
                   </Accordion.Item>
                   <Accordion.Item eventKey='3'>
                    <Accordion.Header>Does PCU support student projects, research, or startups?</Accordion.Header>
                    <Accordion.Body>
                    → Yes. PCU encourages innovation with hackathons, research mentorship, and startup incubation programs under its entrepreneurship cell.


                    </Accordion.Body>
                   </Accordion.Item>
                </Accordion>
            </div> 

    </div>
  )
}

export default FaqAccordion;