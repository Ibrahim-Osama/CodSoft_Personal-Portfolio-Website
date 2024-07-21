import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import headerimg from '../../assets/images--main/tr2.gif' 
const Home = () => 
{
    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front End Web Developer',' Also React Developer','Glad To Help U'],
      typeSpeed: 70,
      loop: true,
      backSpeed: 30,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '_',
      fadeOut: true,
    });
      
      
    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

  return <>
  <section id='Home' className='vh-100 row justify-content-center align-items-center my-5 gx-0'>
    
      <div className='col-12 col-md-6 text-center'>
      <h1 className='my-4'>Hi I'm <span className='name'>Ibrahim</span>.</h1>
        <h3>And I'm   <span className='lighty' ref={el} /> </h3>
        </div>
      <div className='col-12 col-md-6 '>
      <img src={headerimg} className='w-100' alt="" />

      </div>
       
    
  
  </section>


  
  
  
  </>
}

export default Home
