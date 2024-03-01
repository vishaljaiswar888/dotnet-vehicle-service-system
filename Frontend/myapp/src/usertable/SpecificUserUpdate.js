import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EditUserImg from '../User/EditUserImg';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SpecificUserUpdate = () => {

    const { id } = useParams();
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userFullName: "",
        userEmail: "",
        userDOB: "",
        userPassword: "",
        userCPassword: "",
    });

    const { userFullName, userEmail, userDOB, userPassword, userCPassword } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (userFullName.trim() === "") {
            alert("Full Name is required!");
            return;
        }
        if (!/^[A-Za-z]{3,}\s[A-Za-z]{3,}$/.test(userFullName)) {
            alert("Please enter full name in the format 'XXX XXX', with at least three characters before and after the space.");
            return;
        }
        if (userEmail.trim() === "") {
            alert("Email is required!");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (userDOB === "") {
            alert("Date of Birth is required!");
            return;
        }
        if (userPassword === "") {
            alert("Password is required!");
            return;
        }
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(userPassword)) {
            alert("Password should be at least 6 characters long and contain at least one numeric digit, one uppercase and one lowercase letter.");
            return;
        }
        if (userCPassword.trim() === "") {
            alert("Confirm password is required!");
            return;
        }
        if (userCPassword !== userPassword) {
            alert("Confirm password must match the password.");
            return;
        }

        try {
            await axios.put(`http://localhost:5230/api/user/${id}`, user);
            navigate(`/specificUserView/${id}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const { userId } = JSON.parse(localStorage.getItem('SignInData'));
        try {
            const result = await axios.get(`http://localhost:5230/api/user/${userId}`, {
                params: { userId }
            });
            setUser(result.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Update User Details</h3>
                        <Link to={`/specificUserView/${id}`}>
                            <Button style={{ background: "black" }}>Back</Button>
                        </Link>
                        <Form onSubmit={(e) => onSubmit(e)}>

                            <Form.Group className="mb-3 col-lg-6 mt-3">
                                <Form.Label htmlFor="userFullName">User Full Name</Form.Label>
                                <Form.Control type="text" name='userFullName' value={userFullName} onChange={(e) => onInputChange(e)} placeholder="Your Full Name" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label htmlFor="userEmail">User Email</Form.Label>
                                <Form.Control type="email" name='userEmail' value={userEmail} onChange={(e) => onInputChange(e)} placeholder="Enter Your Email" disabled />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label htmlFor="userDOB">User DOB</Form.Label>
                                <Form.Control type="date" name='userDOB' value={userDOB} onChange={(e) => onInputChange(e)} placeholder="Vehicle Booking Date" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label htmlFor="userPassword">User Password</Form.Label>
                                <Form.Control type="text" name='userPassword' value={userPassword} onChange={(e) => onInputChange(e)} placeholder="Enter Your Password" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label htmlFor="userCPassword">User Confirm Password</Form.Label>
                                <Form.Control type="text" name='userCPassword' value={userCPassword} onChange={(e) => onInputChange(e)} placeholder="User Confirm Password" />
                            </Form.Group>


                            <Button variant="primary" className='col-lg-6 mt-2' style={{ background: "black" }} type="submit">
                                Update
                            </Button>
                        </Form>
                    </div>
                    <EditUserImg />
                </section>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default SpecificUserUpdate;
