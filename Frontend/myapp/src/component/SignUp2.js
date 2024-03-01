import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignUp_Img from './SignUp_Img';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp2 = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userFullName: "",
        userEmail: "",
        userDOB: "",
        userPassword: "",
        userCPassword: ""
    });

    const { userFullName, userEmail, userDOB, userPassword, userCPassword } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const selectedDate = new Date(userDOB);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (userFullName.trim() === "") {
            alert("Full Name is required!");
        } else if (!/^[A-Za-z]{3,}\s[A-Za-z]{3,}$/.test(userFullName)) {
            alert("Please enter full name in the format 'XXX XXX', with at least three characters before and after the space.");
            return;
        } else if (userEmail.trim() === "") {
            alert("Email is required!");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            alert("Please enter a valid email address.");
        } else if (userDOB === "") {
            alert("Date of Birth is required!");
        } else if (userPassword === "") {
            alert("Password is required!");
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(userPassword)) {
            alert("Password should be at least 6 characters long and contain at least one numeric digit, one uppercase and one lowercase letter.");
        } else if (userCPassword.trim() === "") {
            alert("Confirm password is required!");
        } else if (userCPassword !== userPassword) {
            alert("Confirm password must match the password.");
        } else {
            try {
                const response = await axios.get("http://localhost:5230/api/user");
                const existingEmails = response.data.map(user => user.userEmail);
                if (existingEmails.includes(userEmail)) {
                    alert("User with this email already exists. Please use a different email.");
                } else {
                    await axios.post("http://localhost:5230/api/user", user);
                    console.log("SignUp successful.");
                    alert("SignUp Successful.");
                    setUser({ userFullName: "", userEmail: "", userDOB: "", userPassword: "", userCPassword: "" });
                    navigate("/signup2", { replace: true });
                }
            } catch (error) {
                console.error("Error:", error);
            }
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
                                <Form.Control type="email" name='userEmail' value={userEmail} onChange={onInputChange} placeholder="Enter Your Email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="date" name='userDOB' value={userDOB} onChange={onInputChange} placeholder="Enter Your DOB" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="password" name='userPassword' value={userPassword} onChange={onInputChange} placeholder="Enter Your Password" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="password" name='userCPassword' value={userCPassword} onChange={onInputChange} placeholder="Confirm Your Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6 mt-2' style={{ background: "black" }} type="submit">
                                Submit
                            </Button>

                            <p className='mt-2'>Already have an account? <span><NavLink to="/signin2">SignIn</NavLink></span></p>
                        </Form>

                    </div>
                    <SignUp_Img />
                </section>
            </div>
        </div>
    )
}

export default SignUp2;
