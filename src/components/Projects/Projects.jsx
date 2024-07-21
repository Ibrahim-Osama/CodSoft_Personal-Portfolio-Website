import React from 'react'
import img1 from '../../assets/images--main/Screenshot (4).png'
import img2 from '../../assets/images--main/Screenshot (5).png'
import img3 from '../../assets/images--main/Screenshot (6).png'
import img4 from '../../assets/images--main/Screenshot (10).png'
import img5 from '../../assets/images--main/Screenshot (7).png'
import img6 from '../../assets/images--main/Screenshot (8).png'
import img7 from '../../assets/images--main/Screenshot (9).png'
import { FaGithub } from "react-icons/fa";

const Projects = () => {


    
  return <>
   <section id='Projects' className='vh-75'>
   <div>
            <h1 className='seaction-header'>Our Projects</h1>
        </div>
   <div class="container py-5">
            <div class="row gy-4 justify-content-center align-items-center">
                <div class="col-md-4 p-3">
                    <div class="item">
                        <img class="rounded-4 w-100" src={img1} alt=""/>
                    <div class="caption text-center mt-3">
                        <h4 className='my-3'><a className='links' href="https://ibrahim-osama.github.io/Ecommerce/">Demo Live</a></h4>
                       <a className='links '  href="https://github.com/Ibrahim-Osama/Ecommerce" target="_blank"><FaGithub className='fs-2 text-info'/></a>

                    </div>
                    </div>
                </div>
                <div class="col-md-4 p-3">
                    <div class="item"><img class="rounded-4 w-100" src={img2} alt=""/>
                    <div class="caption text-center mt-3">
                          <h4 className='my-3'><a className='links '  href="https://ibrahim-osama.github.io/Angular_movie_project/#/home" target="_blank">Demo Live</a></h4>
                       <a className='links '  href="https://github.com/Ibrahim-Osama/Angular_movie_project" target="_blank"><FaGithub className='fs-2 text-info'/></a>

                    </div>
                    </div>
                </div>
                <div class="col-md-4 p-3">
                    <div class="item"><img class="rounded-4 w-100" src={img3} alt=""/>
                    <div class="caption text-center mt-3">
                    <h4 className='my-3'><a className='links '  href="https://ibrahim-osama.github.io/Ecommerce/" target="_blank">Demo Live</a></h4>
                       <a className='links '  href="https://github.com/Ibrahim-Osama?tab=repositories" target="_blank"><FaGithub className='fs-2 text-info'/></a>

                    </div>
                    </div>
                </div>
                <div class="col-md-4 p-3">
                    <div class="item"><img class="rounded-4 w-100" src={img4} alt=""/>
                    <div class="caption text-center mt-3">
                          <h4 className='my-3'><a className='links '  href="https://ibrahim-osama.github.io/Fish_Store/" target="_blank">Demo Live</a></h4>
                       <a className='links '  href="github.com/Ibrahim-Osama/Fish_Store" target="_blank"><FaGithub className='fs-2 text-info'/></a>

                    </div>
                    </div>
                </div>
                <div class="col-md-4 p-3">
                    <div class="item"><img class="rounded-4 w-100" src={img5} alt=""/>
                    <div class="caption text-center mt-3">
                    <h4 className='my-3'><a className='links '  href="https://ibrahim-osama.github.io/Food_FullSystem//" target="_blank">Demo Live</a></h4>
                       <a className='links '  href="https://github.com/Ibrahim-Osama/Food_FullSystem" target="_blank"><FaGithub className='fs-2 text-info'/></a>

                    </div>
                    </div>
                </div>
                <div class="col-md-4 p-3">
                    <div class="item"><img class="rounded-4 w-100" src={img6} alt=""/>
                    <div class="caption text-center mt-3">
                    <h4 className='my-3'><a className='links '  href="https://ibrahim-osama.github.io/Food_FullSystem//" target="_blank">Demo Live</a></h4>
                       <a className='links '  href="https://github.com/Ibrahim-Osama/Food_FullSystem" target="_blank"><FaGithub className='fs-2 text-info'/></a>

                    </div>
                    </div>
                </div>
                <div class="col-md-4 p-3">
                    <div class="item"><img class="rounded-4 w-100" src={img7} alt=""/>
                    <div class="caption text-center mt-3">
                    <h4 className='my-3'><a className='links '  href="https://ibrahim-osama.github.io/Fish_Store/" target="_blank">Demo Live</a></h4>
                       <a className='links '  href="github.com/Ibrahim-Osama/Fish_Store" target="_blank"><FaGithub className='fs-2 text-info'/></a>

                    </div>
                    </div>
                </div>

            </div>
        </div>
        
       <div className='btn-center'>
       <button className='btn btn-dark p-3 mb-5 '> 
       <a className='links '  href="https://github.com/Ibrahim-Osama?tab=repositories" target="_blank">Wanna See more Projects Just click</a>
       </button>
       </div>
   </section>
  </>
}

export default Projects
