import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Blog.css';

const Blog = () => {
  return (
    <section>
    <div className="container">
      <h1 className="heading text-center">Vehicle Blog</h1>
      <div className="card-container mt-3">
        <Link to="#" className="card">
          <h2>How to change the oil filter?</h2>
          <p>Click here to see the full blog...</p>
        </Link>
        <br />
        <Link to="#" className="card">
          <h2>How to paint the car?</h2>
          <p>Click here to see the full blog...</p>
        </Link>
        <br />
        <Link to="#" className="card">
          <h2>How to change the tire?</h2>
          <p>Click here to see the full blog...</p>
        </Link>
        <br />
        <Link to="#" className="card">
          <h2>How to do the service?</h2>
          <p>Click here to see the full blog...</p>
        </Link>
        <br />
        <Link to="#" className="card">
          <h2>How to do the bike service?</h2>
          <p>Click here to see the full blog...</p>
        </Link>
        <br />
      </div>
      <br />
      <br />
      <br />
    </div>
    </section>
  );
}

export default Blog;
