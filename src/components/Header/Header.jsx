import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";

const Header = () => 
{



  return <>
  
  <header>
    
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Ibrahim : React JS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link me-4 my-1 active" aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item me-4 my-1 ">
          <a class="nav-link" href="#About">About Me</a>
        </li>       
        <li class="nav-item me-4 my-1">
          <a class="nav-link" href="#Projects">Projects</a>
        </li>       
       
        
        <li class="nav-item me-4 my-1">
          <a class="nav-link" href="#Contact">Contact Us</a>
        </li>       
      </ul>
      
    </div>
  </div>
</nav>






  </header>
  
  </>
}

export default Header
