import React from "react";
import cv from '../assets/SanjayKumar-CV.pdf';

function Header() {
  return (
    <>
      <section id="about" className=" bg-dark-1">
        <div className="container">
          <div className="section-head ">
            <h2>ABOUT ME</h2>
            <h3>
              Know Me More <span className="border2"></span>
            </h3>
          </div>
          <div class="row">
            <div class="col-md-8 pt-5">
              <h1>
                I'm <span className="clr">Sanjay Kumar</span>, UI Developer
              </h1>
              <p className="py-2 mt-3">
              Experienced with  UI/Frontend Developer with expertise in UI Development including expertise in HTML5, CSS3, JavaScript, Photoshop, Figma, Bootstrap & Reactjs.               
              </p>

              <p className="py-2">
                 Proficient in creating responsive and user-friendly web applications with a focus on performance optimization and cross-browser compatibility. Strong problem-solving skills and a team player with a passion for delivering high-quality user experiences.
              </p>
              <a className="btn btn-outline-info mt-3" href={cv} download='SanjayKumarCV.pdf'>Download CV</a>



            </div>
            <div class="col-md-4 pt-5">
            






            </div>
          </div>

          <div class="row">
      <div class="col-md-6 pt-5">
            <p className="text-white mb-1 mt-2">Reactjs <span className="float-end">85%</span></p>
            <div class="progress" role="progressbar" aria-label="info" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar w-75"></div>
            </div>

            <p className="text-white mb-1 mt-4">Redux <span className="float-end">95%</span></p>
            <div class="progress" role="progressbar" aria-label="info" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar w-100"></div>
            </div>
      

<p className="text-white mb-1 mt-4">JavaScript ES6 <span className="float-end">65%</span></p>
            <div class="progress" role="progressbar" aria-label="info" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar w-75"></div>   
</div>

<p className="text-white mb-1 mt-4">RestApi <span className="float-end">60%</span></p>
            <div class="progress" role="progressbar" aria-label="info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar w-50"></div>   
</div>





            </div>
            <div class="col-md-6 pt-5">
       

            <p className="text-white mb-1 mt-1">HTML5 <span className="float-end">95%</span></p>
            <div class="progress" role="progressbar" aria-label="info" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar w-100"></div>
            </div>
            <p className="text-white mb-1 mt-4">CSS3/SCSS/SASS <span className="float-end">75%</span></p>
            <div class="progress" role="progressbar" aria-label="info" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar w-75"></div>   
</div>

<p className="text-white mb-1 mt-4">Bootstrap <span className="float-end">85%</span></p>
            <div class="progress" role="progressbar" aria-label="info" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar w-75"></div>   
</div>

<p className="text-white mb-1 mt-4">Figma <span className="float-end">60%</span></p>
            <div class="progress" role="progressbar" aria-label="info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar w-50"></div>   
</div>






            </div>

</div>
        </div>
      </section>
    </>
  );
}

export default Header;
