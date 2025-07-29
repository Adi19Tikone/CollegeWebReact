import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import CseImg from '../../utils/images/btech_cse1.jpg';
import CseAiMlImg from '../../utils/images/btech_cse_ai_ml.jpg';
import CseAiDsImg from '../../utils/images/artificail.jpg';
import FaqAccordion from '../../components/faqAccordion/FaqAccordion';




const courses = [
  {
    id: 1,
    img: [CseImg],
  
  },
  {
    id: 2,
    img: [CseAiMlImg],
   
    
  },
  {
    id: 3,
    img: [CseAiDsImg],
   
   
  },
]


function Courses() {
  return (
    <div className='courses-page'>
      <header className='height-75'>
         <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
           <h1 className='text-center fw-semibold'>Our Courses</h1>
           <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Ipsum impedit fugit, obcaecati voluptate hic optio quam rerum cupiditate deserunt 
            nostrum atque delectus explicabo culpa cumque 
            veniam! Quod aut iusto eum.</p>
         </div>
      </header>
      <div className='container py-5'>
        <div className='row g-4'>
          {courses.map((course) => (
            <div key={course.id} className='col-lg-6'>
              <Card className='text-white shadow scale-hover-effect'>
                <Card.Img src={course.img} />
                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                  <Card.Title className='fs-1 text-danger'>
                    {course.title}</Card.Title>
                    <Card.Text className='text-center'>
                      {course.description}</Card.Text>
                </Card.ImgOverlay>
              </Card>
             </div>
          ))}
               <a
  href="https://pcu.edu.in/School_of_Engineering_and_Technology.php"  
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
>
  See More About Courses !
</a>
                
        </div>


        <div className='bg-dark text-light py-5'>
          <FaqAccordion />
        </div>
      </div>
    </div>
  )
}

export default Courses;