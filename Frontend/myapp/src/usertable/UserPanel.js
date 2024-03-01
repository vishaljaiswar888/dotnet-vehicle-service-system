import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserPanel = () => {
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem('SignInData'));
        if (userDetails) {
            setUserName(userDetails.userFullName);
            setUserId(userDetails.userId);
        }
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 border rounded p-4 mt-5 shadow text-center">
                    <h2 className="text-center m-4">Welcome back, {userName}!</h2>

                    <form>
                        <Link
                            className="btn btn-outline-danger mx-2"
                            to={`/specificUserView/${userId}`} 
                            style={{
                                fontSize: '24px',
                                padding: '20px',
                                width: '300px',
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}
                        >
                            Update Your Profile
                        </Link>

                        <Link
                            className="btn btn-outline-success mx-2"
                            to="/addVehicle"
                            style={{
                                fontSize: '24px',
                                padding: '20px',
                                width: '300px',
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}
                        >
                            Create A New Service
                        </Link>

                        <Link
                            className="btn btn-outline-warning mx-2"
                            to="/specificUserVehicle"
                            style={{
                                fontSize: '24px',
                                padding: '20px',
                                width: '300px',
                                marginTop: '20px',
                                marginBottom: '20px'
                            }}
                        >
                            View Your Past Bookings
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserPanel;
