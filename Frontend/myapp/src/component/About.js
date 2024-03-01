import React from 'react';

const About = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center py-4">
      <div className="text-center mb-5">
        <h2>About Us</h2>
        <p className="mt-3">
          We are a vehicle servicing website dedicated to providing top-notch services to our customers. Our mission is to ensure that every vehicle receives the best care and attention it deserves. With our team of experienced professionals, we strive to exceed our customers' expectations and deliver exceptional results.
        </p>
      </div>
      
      <div className="row mt-5 justify-content-center">
        <div className="col-md-2 text-center">
          <img src="https://source.unsplash.com/random/240x240/?cartoon" alt="Member 1" className="img-fluid" />
          <p className="mt-2">Mayur</p>
        </div>
        <div className="col-md-2 text-center">
          <img src="https://source.unsplash.com/random/240x240/?cartoon" alt="Member 2" className="img-fluid" />
          <p className="mt-2">Mrunali</p>
        </div>
        <div className="col-md-2 text-center">
          <img src="https://source.unsplash.com/random/240x240/?cartoon" alt="Member 3" className="img-fluid" />
          <p className="mt-2">Vishal</p>
        </div>
        <div className="col-md-2 text-center">
          <img src="https://source.unsplash.com/random/240x240/?cartoon" alt="Member 4" className="img-fluid" />
          <p className="mt-2">Hariom</p>
        </div>
        <div className="col-md-2 text-center">
          <img src="https://source.unsplash.com/random/240x240/?cartoon" alt="Member 5" className="img-fluid" />
          <p className="mt-2">Pratik</p>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h4>Our Team</h4>
        <p>
          We have a dedicated team of professionals who are experts in their fields and strive to provide the best service to our customers. Each member of our team brings unique skills and experiences, contributing to our collective success. Our commitment to excellence and customer satisfaction sets us apart in the industry.
        </p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
