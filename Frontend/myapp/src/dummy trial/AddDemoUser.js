import React, { useEffect, useState } from 'react'
import {Button, Table} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
// import SignUp_Img from './SignUp_Img';
// import SignIn_Img from '../component/SignIn_Img';

const AddDemoUser = () => {
    const url = "http://localhost:5230/api/user";

    const [user, setUser] = useState({
        userFullName: "",
        userEmail: "",
        userDOB: "",
        userPassword: ""
    });

    const { userFullName, userEmail, userDOB, userPassword } = user;

    

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post(url, user);
            setUser({ userFullName: "", userEmail: "", userDOB: "", userPassword: "" });
        }catch (error) {
            console.error("Error:", error);
        }
            
    }

  return (
    <div>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>

                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3 col-lg-6 mt-3">
                                <Form.Control type="text" name='userFullName' value={userFullName} onChange={onInputChange} placeholder="Your Full Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="email" name='userEmail' value={userEmail} onChange={onInputChange}  placeholder="Enter Your Email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="date" name='userDOB' value={userDOB} onChange={onInputChange}  placeholder="Enter Your DOB" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="password" name='userPassword' value={userPassword} onChange={onInputChange}  placeholder="Enter Your Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6 mt-2' style={{ background: "black" }} type="submit">
                                Submit
                            </Button>

                            <p className='mt-2'>Already have an account? <span><NavLink to="/signin2">SignIn</NavLink></span></p>
                        </Form>

                    </div>
                    {/* <SignUp_Img /> */}
                </section>
            </div>
        </div>
  )
}

export default AddDemoUser;