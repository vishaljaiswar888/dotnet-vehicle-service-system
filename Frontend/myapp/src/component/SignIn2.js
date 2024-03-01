import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignIn_Img from './SignIn_Img';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn2 = () => {
    const userSignUpDataHook = useNavigate();
    const [inpval, setInpval] = useState({ email: "", password: "" });

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(prevState => ({ ...prevState, [name]: value }));
    }

    const addData = async (e) => {
        e.preventDefault();
    
        const { email, password } = inpval;
    
        try {
            const response = await axios.get("http://localhost:5230/api/user");
            const userData = response.data;
    
            const user = userData.find(user => user.userEmail === email && user.userPassword === password);
    
            if (user) {
                console.log("User SignIn successful.");
    
                localStorage.setItem("SignInData", JSON.stringify(user));
    
                if (user.userRole === "Admin") {
                    userSignUpDataHook("/adminPanel");
                } else if (user.userRole === "Employee"){
                    userSignUpDataHook("/employeePanel");
                } else if (user.userRole === "Customer"){
                    userSignUpDataHook("/userPanel");
                }
            } else {
                alert("Invalid credentials!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while signing in.");
        }
    }
    

    return (
        <div>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} className='col-lg-6' style={{ background: "black" }} type="submit">
                                Submit
                            </Button>
                            <p className='mt-2'>Already have an account? <span><NavLink to="/signup2">SignIn</NavLink></span></p>
                        </Form>
                    </div>
                    <SignIn_Img />
                </section>
            </div>
        </div>
    )
}

export default SignIn2;
