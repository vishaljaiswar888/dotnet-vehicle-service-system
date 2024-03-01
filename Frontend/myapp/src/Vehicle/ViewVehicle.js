import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewVehicle = () => {

    const [vehicle, setVehicle] = useState({
        vehicleType:"",
        vehicleBrand:"",
        vehicleYear:"",
        custCity:"",
        bookDate:"",
        vehicleStatus:""
    });
    
      const { id } = useParams();
    
      useEffect(() => {
        loadVehicle();
      }, []);
    
      const loadVehicle = async () => {
        const result = await axios.get(`http://localhost:5230/api/vehi/${id}`);
        setVehicle(result.data);
      };

    return (
        <div>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-12'>Viewing Vehicle Detail</h3>

                        <div className="row gutters-sm mt-3">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://source.unsplash.com/random/240x240/?ferrari" alt="Admin" className="rounded-circle" width="325" />    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                    
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Vehicle Type</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {vehicle.vehicleType}
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Vehicle Brand</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {vehicle.vehicleBrand}
                                            </div>
                                        </div>

                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Purchase Year</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {vehicle.vehicleYear}
                                            </div>
                                        </div>

                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Pickup Location</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {vehicle.custCity}
                                            </div>
                                        </div>

                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Booking Date</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {vehicle.bookDate}
                                            </div>
                                        </div>

                                        <br />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Booking Status</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {vehicle.vehicleStatus}
                                            </div>
                                        </div>

                                        <br />
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <Link to="/allVehicleDetail" className="btn btn-primary mx-2" style={{backgroundColor:"black"}}>Back</Link>
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

export default ViewVehicle;
