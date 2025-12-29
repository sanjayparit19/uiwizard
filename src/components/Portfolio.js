import React from 'react'

function Portfolio() {
  return (
    <>
       <section id="portfolio" className="section bg-dark-2">
        <div className="container">
         <div className="section-head ">
          <h2>PORTFOLIO</h2>
          <h3>
            My Work <span className="border2"> </span>
          </h3>
        </div>
    
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src="/img/recent-work3.jpg" alt="project1" className="img-fluid" />
          </div>

           <div className="col-md-4 mb-4">
            <img src="/img/recent-work4.jpg" alt="project1" className="img-fluid" />
          </div>

           <div className="col-md-4 mb-4">
            <img src="/img/recent-work10.jpg" alt="project1" className="img-fluid" />
          </div>

           <div className="col-md-4 mb-4">
            <img src="/img/recent-work3.jpg" alt="project1" className="img-fluid" />
          </div>

          </div>


    </div>  
      </section>
    </>
  )
}

export default Portfolio
