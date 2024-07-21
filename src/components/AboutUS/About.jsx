import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/images--main/tr.gif' 
const About = () => 
{

    
  return <>
  
    <section id='About' className=' my-5'>
        <div>
            <h1 className='seaction-header'>About Us</h1>
        </div>

        <div>
          <div className='col-md-9 offset-1 text-capthion'>
            <p className=''>I am a passionate and detail-oriented Front-End Developer with a focus on creating engaging and user-friendly web applications. With a solid foundation in HTML, CSS, JavaScript, and a deep expertise in ReactJS, I specialize in building responsive and interactive user interfaces.</p>
          </div>
        </div>
      
        <div className='col-md-12'>
        <Card  className='text-center m-auto mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Front End Web Developer</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">See My Projects</Button>
      </Card.Body>
    </Card>





        </div>

    </section>
  
  
  
  </>
}

export default About
