import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faDesktop,  faPalette, faPenRuler, faSearch } from '@fortawesome/free-solid-svg-icons' 
import { faCodepen } from '@fortawesome/free-brands-svg-icons'


function Service() {
  return (
   <>
        <section id="service" class="bg-dark-2">
             <div class="container">
               <div class="section-head ">
            <h2>SERVICES</h2>
            <h3>What I Do? <span className='border2'></span></h3>
            </div>

       
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="service-box">
                  <div class="icon">
                    <FontAwesomeIcon icon={faPalette} className='iconsize'/>
                                     
                  </div>
                  <div class="iconcontent">
                    <h4>UI Development</h4>
                    <p>
                    Building clean, responsive, and high-performance user interfaces using modern technologies such as HTML5, CSS3, JavaScript, SCSS, and component-based frameworks like React and Angular. 
                    </p>
                  </div>
                </div>  
                </div>
                 <div class="col-md-6 mb-4">
                <div class="service-box">
                  <div class="icon">
                     <FontAwesomeIcon icon={faDesktop} className='iconsize'/>                  
                  </div>
                  <div class="iconcontent">
                    <h4>Web Design</h4>
                    <p>
                    Modern and responsive website designs focused on user-friendly layouts, clean typography, and seamless navigation to enhance user experience and brand presence.
                    </p>
                  </div>
                </div>  
                </div>
                 <div class="col-md-6 mb-4">
                <div class="service-box">
                  <div class="icon">
                     <FontAwesomeIcon icon={faPenRuler} className='iconsize'/>                  
                  </div>
                  <div class="iconcontent">
                    <h4>UI/UX Design</h4>
                    <p>
                    Designing intuitive, functional, and visually engaging user interfaces backed by strong UX research to ensure smooth interaction and maximum user satisfaction.
                    </p>
                  </div>
                </div>  
                </div>
                 <div class="col-md-6 mb-4">
                <div class="service-box">
                  <div class="icon">
                        
                     <FontAwesomeIcon icon={faCodepen} className='iconsize'/>                  
                  </div>
                  <div class="iconcontent">
                    <h4>React/Angular Development</h4>
                    <p>
                    Building fast, scalable, and interactive user interfaces using modern React concepts and best practices.
                    </p>
                  </div>
                </div>  
                </div>
                 <div class="col-md-6 mb-4">
                <div class="service-box">
                  <div class="icon">
                     <FontAwesomeIcon icon={faChartArea} className='iconsize'/>                  
                  </div>
                  <div class="iconcontent">
                    <h4>Business Analysis</h4>
                    <p>
                    Analyzing business needs and processes to deliver strategic solutions that improve efficiency, reduce costs, and support digital transformation.
                    </p>
                  </div>
                </div>  
                </div>
                 <div class="col-md-6 mb-4">
                <div class="service-box">
                  <div class="icon">
                     <FontAwesomeIcon icon={faSearch} className='iconsize'/>                  
                  </div>
                  <div class="iconcontent">
                    <h4>SEO Marketing</h4>
                    <p>
                    Increasing website visibility and driving organic traffic with effective SEO strategies including keyword optimization, technical SEO, and content improvements.
                    </p>
                  </div>
                </div>  
                </div>

              </div>
            
          </div>
        </section>
   </>
  )
}

export default Service
