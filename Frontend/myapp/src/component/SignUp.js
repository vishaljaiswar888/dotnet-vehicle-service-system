import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignUp_Img from './SignUp_Img';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../component/Header';

const SignUp = () => {
    let navigate = useNavigate();

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
        const selectedDate = new Date(userDOB);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (userFullName.trim() === "") {
            alert("Full Name is required!");
        } else if (userEmail.trim() === "") {
            alert("Email is required!");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            alert("Please enter a valid email address.");
        } else if (userDOB === "") {
            alert("Date of Birth is required!");
        } else if (selectedDate < today) {
            alert("Please select today's date or a future date.");
        } else if (userPassword === "") {
            alert("Password is required!");
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(userPassword)) {
            alert("Password should be at least 6 characters long and contain at least one numeric digit, one uppercase and one lowercase letter.");
        } else {
            try {
                const response = await axios.get("http://localhost:8080/fetchAllUserDetail");
                const existingEmails = response.data.map(user => user.userEmail);
                if (existingEmails.includes(userEmail)) {
                    alert("User with this email already exists. Please use a different email.");
                } else {
                    await axios.post("http://localhost:8080/insertUserDetail", user);
                    console.log("SignUp successful.");
                    alert("SignUp Successful.");
                    setUser({ userFullName: "", userEmail: "", userDOB: "", userPassword: "" });
                    navigate("/signup2", { replace: true });
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }

    return (
        
        <div>
            <Header userEmail={userEmail} />
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

export default SignUp;



// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import SignUp_Img from './SignUp_Img';
// import axios from 'axios';
// import { NavLink, useNavigate } from 'react-router-dom';

// const SignUp = () => {
//     let navigate = useNavigate();

//     const [inpval, setInpval] = useState({
//         name: "",
//         email: "",
//         date: "",
//         password: ""
//     })

   

//     const [data,setData] = useState([]);

//     const getdata = (e) => {
//         // console.log(e.target.value);


//         const { value, name } = e.target;
//         // console.log(value,name);


//         setInpval(() => {
//             return {
//                 ...inpval,
//                 [name]: value
//             }
//         })

//     }




//     const addData = (e) => {
//         e.preventDefault();

//         const { name, email, date, password } = inpval;

//             console.log("data added succesfully");
//             navigate("/signin")
//             localStorage.setItem("SignUpData",JSON.stringify([...data,inpval]));

   

//     }

//     const [user, setUser] = useState({
//         userFullName: "",
//         userEmail: "",
//         userDOB: "",
//         userPassword: ""
//     });

//     const { userFullName, userEmail, userDOB, userPassword } = user;

//     const onInputChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     }

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         const selectedDate = new Date(userDOB);
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);

//         if (userFullName.trim() === "") {
//             alert("Full Name is required!");
//         } else if (userEmail.trim() === "") {
//             alert("Email is required!");
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
//             alert("Please enter a valid email address.");
//         } else if (userDOB === "") {
//             alert("Date of Birth is required!");
//         } else if (selectedDate < today) {
//             alert("Please select today's date or a future date.");
//         } else if (userPassword === "") {
//             alert("Password is required!");
//         } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(userPassword)) {
//             alert("Password should be at least 6 characters long and contain at least one numeric digit, one uppercase and one lowercase letter.");
//         } else {
//             try {
//                 const response = await axios.get("http://localhost:8080/fetchAllUserDetail");
//                 const existingEmails = response.data.map(user => user.userEmail);
//                 if (existingEmails.includes(userEmail)) {
//                     alert("User with this email already exists. Please use a different email.");
//                 } else {
//                     await axios.post("http://localhost:8080/insertUserDetail", user);
//                     console.log("SignUp successful.");
//                     localStorage.setItem("SignInData",JSON.stringify([...data,inpval]));
//                     alert("SignUp Successful.");
//                     setUser({ userFullName: "", userEmail: "", userDOB: "", userPassword: "" });
//                     navigate("/signup2", { replace: true });
//                 }
//             } catch (error) {
//                 console.error("Error:", error);
//             }
//         }
//     }

//     return (
//         <div>
//             <div className="container mt-2">
//                 <section className='d-flex justify-content-between'>
//                     <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
//                         <h3 className='text-center col-lg-6'>Sign Up</h3>

//                         <Form onSubmit={onSubmit}>
//                             <Form.Group className="mb-3 col-lg-6 mt-3">
//                                 <Form.Control type="text" name='userFullName' value={userFullName} onChange={onInputChange} placeholder="Your Full Name" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6">
//                                 <Form.Control type="email" name='userEmail' value={userEmail} onChange={onInputChange} placeholder="Enter Your Email" />
//                                 <Form.Text className="text-muted">
//                                     We'll never share your email with anyone else.
//                                 </Form.Text>
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6">
//                                 <Form.Control type="date" name='userDOB' value={userDOB} onChange={onInputChange} placeholder="Enter Your DOB" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6">
//                                 <Form.Control type="password" name='userPassword' value={userPassword} onChange={onInputChange} placeholder="Enter Your Password" />
//                             </Form.Group>

//                             <Button variant="primary" className='col-lg-6 mt-2' style={{ background: "black" }} type="submit">
//                                 Submit
//                             </Button>

//                             <p className='mt-2'>Already have an account? <span><NavLink to="/signin2">SignIn</NavLink></span></p>
//                         </Form>

//                     </div>
//                     <SignUp_Img />
//                 </section>
//             </div>
//         </div>
//     )
// }

// export default SignUp;
