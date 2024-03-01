import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const Invoice = () => {
  const [cardHolderName, setCardHolderName] = useState('');

  useEffect(() => {
    const cardDetails = JSON.parse(localStorage.getItem('cardDetails'));
    if (cardDetails) {
      setCardHolderName(cardDetails.cardHolderName);
    }
  }, []);
  return (
    <div className="container py-5">
      <div className="card">
        <div className="card-body mx-4">
          <div className="container">
            <p className="my-5 text-center" style={{ fontSize: "30px" }}>
              <h2>Thank for your purchase</h2>
            </p>
            <div className="row">
              <ul className="list-unstyled">
              <li className="text-black">{cardHolderName}</li>
                <li className="text-muted mt-1">
                  <span className="text-black">Invoice</span> #12345
                </li>
                <li className="text-black mt-1">February 21 2024</li>
              </ul>
              <hr />
              <div className="col-xl-10">
                <p>Pro Package</p>
              </div>
              <div className="col-xl-2">
                <p className="float-end">$209.00</p>
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-xl-10">
                <p>Consulting</p>
              </div>
              <div className="col-xl-2">
                <p className="float-end">$100.00</p>
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-xl-10">
                <p>Support</p>
              </div>
              <div className="col-xl-2">
                <p className="float-end">$-9.00</p>
              </div>
              <hr style={{ border: "2px solid black" }} />
            </div>
            <div className="row text-black">
              <div className="col-xl-12">
                <p className="float-end fw-bold">Total: $300.00</p>
              </div>
              <hr style={{ border: "2px solid black" }} />
            </div>
            <div className="text-center" style={{ marginTop: "90px" }}>
              <a href="/" className="text-info">
                <Button style={{backgroundColor:"black"}}>Back to Home</Button>
              </a>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Invoice