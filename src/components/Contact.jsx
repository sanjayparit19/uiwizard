import React from "react";
import { useState } from "react";



function Contact() {

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <>
      <section id="resume" class="bg-dark-1">
        <div className="container">
          <div className="section-head">
            <h2>CONTACT</h2>
            <h3>
              Get In Touch <span className="border2 text-info"> </span>
            </h3>
          </div>


          <div className="row mt-5">
            <form onSubmit={handleSubmit}>
            <div className="col-xl-6 mb-4">
  <label for="Name" className="form-label">Name : <span>*</span></label>
 <input name="name" className="form-control" value={formData.name} onChange={handleChange} />
 
</div>

            <div className="col-xl-6 mb-4">
  <label for="email" className="form-label">Email : <span>*</span></label>
 <input name="email" className="form-control" value={formData.email} onChange={handleChange} />
 
</div>
   <div className="col-xl-6 mb-4">
  <label for="tel" className="form-label">Contact No. : <span>*</span></label>
  <input name="mobile" className="form-control" value={formData.mobile} onChange={handleChange} />
 
</div>
<div className="col-xl-9 mb-4">
  <label for="message" className="form-label">Message :</label>
  <textarea className="form-control" name="message" rows={7}  value={formData.message} onChange={handleChange}></textarea>
        
</div>

<div className="col-xl-10 mb-4">  
  <button type="submit" className="btn btn-outline-info btn-lg">Submit</button>
</div>

</form>

          </div>
          
        </div>
      </section>
    </>
  );
}

export default Contact;
