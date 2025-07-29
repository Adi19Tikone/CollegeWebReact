import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutImg from '../../utils/images/study-1968077_1280.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import trophy from '../../utils/images/trophy.png';

const trophies = [
  {
    id: 1,
    img: [trophy]
  },
  {
    id: 2,
    img: [trophy]
  },
  {
    id: 3,
    img: [trophy]
  },
  {
    id: 5,
    img: [trophy]
  },
  {
    id: 6,
    img: [trophy]
  },
  {
    id: 7,
    img: [trophy]
  },
  {
    id: 8,
    img: [trophy]
  },
  {
    id: 9,
    img: [trophy]
  },
  {
    id: 10,
    img: [trophy]
  },

]

function About() {
  return (
    <div className='about-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'></h1>
        </div>
      </header>
      <div className='container my-5'>
        <div className="row">
          <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
            <h2 className='mb-4 mb-lg-5'>About the School of Engineering & Technology – PCU</h2>
            <p>Empowering Innovators. Building Futures.
            At Pimpri Chinchwad University (PCU), the School of Engineering & Technology stands as a beacon of academic excellence, innovation, and real-world readiness. Backed by a legacy of 34 years, PCU combines strong academic foundations with industry-driven learning to prepare students for the future of technology.</p>
                <Link to="\contact">
                <button type='button' className='btn btn-danger' btn-lg mx-0 mx-sm-2 my-2 my-sm-0>Contact Us</button>
                </Link>
          </div>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src={AboutImg} className='img-fluid w-75' alt="" />
          </div>
        </div>
      </div>
        <div className='bg-dark text-light py-5'>
          <ChooseSection />
        </div>
        <div className='bg-body-tertiary py-5'>
          <div className="container">
            <h2 className='text-center mb-5'>Our Winners</h2>
            <div className='row g-4'>
               {trophies.map((trophy) => (
                <div key={trophy.id} className='col-md-4'>
                  <img src={trophy.img} className='img-fluid' alt="" />
                  </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;