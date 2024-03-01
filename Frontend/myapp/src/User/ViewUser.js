import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {

    const [user, setUser] = useState({
        userFullName: "",
        userEmail: "",
        userDOB: "",
        userRole: "",
        userPassword: ""
      });
    
      const { id } = useParams();
    
      useEffect(() => {
        loadUsers();
      }, []);
    
      const loadUsers = async () => {
        const result = await axios.get(`http://localhost:5230/api/user/${id}`);
        setUser(result.data);
      };

    return (
        <div>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-12'>Viewing User Detail</h3>

                        <div className="row gutters-sm mt-5">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://source.unsplash.com/random/240x240/?face" alt="Admin" className="rounded-circle" width="275" />    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                    <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Role</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {user.userRole}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {user.userFullName}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {user.userEmail}

                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">DOB</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {user.userDOB}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Password</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {user.userPassword}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <Link to="/allUserDetail" className="btn btn-primary mx-2" style={{backgroundColor:"black"}}>Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ViewUser;
