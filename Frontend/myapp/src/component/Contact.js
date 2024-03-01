import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const Contact = () => {
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: '',
        email: '', 
        subject: '',
        message: ''
    });

    useEffect(() => {
        const signInData = localStorage.getItem('SignInData');
        if (signInData) {
            const { userEmail } = JSON.parse(signInData);
            setContact(prevState => ({ ...prevState, email: userEmail }));
        }
    }, []);

    const { name, email, subject, message } = contact;

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            await axios.post('http://localhost:5230/api/contact', contact);
            console.log('Contact added successfully.');
            alert('Contact added successfully.');
            setContact({ name: '', email: '', subject: '', message: '' });
            navigate('/contact', { replace: true });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-3">
            {/* <Link to="/" style={{ textAlign: 'left' }}>
                    <Button style={{ background: "black" }}>Back to Home Page</Button>
                </Link> */}
            <div className="d-flex justify-content-center align-items-center">
                <h2>Contact us</h2>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <form id="form" className="text-center" style={{ width: '100%', maxWidth: '300px' }} onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={handleChange}
                            required
                            disabled // Disable editing of email field
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control"
                            value={subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            value={message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block my-4" style={{ background: 'black' }}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Contact = () => {
//     const navigate = useNavigate();

//     const [contact, setContact] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     const { name, email, subject, message } = contact;

//     const handleChange = (e) => {
//         setContact({ ...contact, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
//             alert('Please fill in all fields.');
//             return;
//         }

//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//             alert('Please enter a valid email address.');
//             return;
//         }

//         try {
//             await axios.post('http://localhost:5230/api/contact', contact);
//             console.log('Contact added successfully.');
//             alert('Contact added successfully.');
//             setContact({ name: '', email: '', subject: '', message: '' });
//             navigate('/contact', { replace: true });
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container d-flex justify-content-center align-items-center mt-3">
//             <form id="form" className="text-center" style={{ width: '100%', maxWidth: '300px' }} onSubmit={handleSubmit}>
//                 <h2>Contact us</h2>
//                 <div className="mb-4">
//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="form-control"
//                         value={name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email">Email address</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         value={email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="subject">Subject</label>
//                     <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         className="form-control"
//                         value={subject}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="message">Message</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         className="form-control"
//                         value={message}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block my-4" style={{ background: 'black' }}>
//                     Send
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Contact;
