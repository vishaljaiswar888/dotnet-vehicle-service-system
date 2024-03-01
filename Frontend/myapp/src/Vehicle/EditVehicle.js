import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CarImg from './CarImg';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditVehicle = () => {

    const { id } = useParams();

    let navigate = useNavigate();

    // constructing an object
    const [vehicle, setVehicle] = useState({
        custName: "",
        custEmail: "",
        custPhone: "",
        vehicleType: "",
        vehicleBrand: "",
        vehicleYear: "",
        vehicleNo: "",
        custCity: "",
        bookDate:"",
        vehicleStatus:""
    })

    // deconstructing an object
    const { custName, custEmail, custPhone, vehicleType, vehicleBrand, vehicleYear, vehicleNo, custCity, bookDate, vehicleStatus } = vehicle;

    const onInputChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value })
    }



    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.put(`http://localhost:5230/api/vehi/${id}`, vehicle);
    //     navigate('/allVehicleDetail');
    // }


    const onSubmit = async (e) => {
        e.preventDefault();
    
        if (!custName.trim()) {
            alert("Full Name is required.");
            return;
        } else if (!/^[A-Za-z]{3,}\s[A-Za-z]{3,}$/.test(custName)) {
            alert("Please enter full name in the format 'XXX XXX', with at least three characters before and after the space.");
            return;
        } else if (!custPhone.trim()) {
            alert("Phone Number is required.");
            return;
        } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(custPhone)) {
            alert("Please enter a valid mobile number.");
            return;
        } else if (!custEmail.trim()) {
            alert("Email is required.");
            return;
        } else if (!vehicleType.trim()) {
            alert("Vehicle Type is required.");
            return;
        } else if (!vehicleBrand.trim()) {
            alert("Vehicle Brand is required.");
            return;
        } else if (!vehicleYear.trim()) {
            alert("Vehicle Purchase Year is required.");
            return;
        } else if (!vehicleNo.trim()) {
            alert("Vehicle Number is required.");
            return;
        } else if (!/^[A-Z]{2}-\d{3}-\d{3}$/.test(vehicleNo)) {
            alert("Invalid vehicle number format. Format should be XX-123-123");
            return;
        } else if (!custCity.trim()) {
            alert("City is required.");
            return;
        } else if (!bookDate.trim()) {
            alert("Booking Date is required.");
            return;
        } else {
            try {
                await axios.put(`http://localhost:5230/api/vehi/${id}`, vehicle);
                console.log("Vehicle updated successfully.");
                alert("Vehicle updated successfully.");
                navigate("/allVehicleDetail", { replace: true });
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }



    // useParams

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
                        <h3 className='text-center col-lg-6'>Update Vehicle Details</h3>
                        <Link to="/allVehicleDetail">
                            <Button style={{ background: "black" }}>Back</Button>
                        </Link>
                        <Form onSubmit={(e) => onSubmit(e)}>
                            <Form.Group className="mb-3 col-lg-6 mt-3">
                            <Form.Label htmlFor="custName">Customer Full Name</Form.Label>

                                <Form.Control type="text" name='custName' value={custName} onChange={(e) => onInputChange(e)} placeholder="Your Full Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 mt-3">
                            <Form.Label htmlFor="custEmail">Customer Email Id</Form.Label>

                                <Form.Control type="text" name='custEmail' value={custEmail} onChange={(e) => onInputChange(e)} placeholder="Your Email Id" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                            <Form.Label htmlFor="custPhone">Customer Phone No.</Form.Label>

                                <Form.Control type="text" name='custPhone' value={custPhone} onChange={(e) => onInputChange(e)} placeholder="Your Phone Number" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                            <Form.Label htmlFor="vehicleType">Vehicle Type</Form.Label>

                                <Form.Control as="select" name="vehicleType" value={vehicleType} onChange={(e) => onInputChange(e)}>
                                    <option value="">Select a vehicle type</option>
                                    <option value="Car">Car</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Truck">Truck</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                            <Form.Label htmlFor="vehicleBrand">Vehicle Brand</Form.Label>

                                <Form.Control as="select" name="vehicleBrand" value={vehicleBrand} onChange={(e) => onInputChange(e)}>
                                    <option value="">Select a brand</option>
                                    <option value="Audi">Audi</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Kawasaki">Kawasaki</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Tata">Tata</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                            <Form.Label htmlFor="vehicleYear">Vehicle Purchase Year</Form.Label>
                                <Form.Control as="select" name="vehicleYear" value={vehicleYear} onChange={(e) => onInputChange(e)}>
                                    <option value="">Select year of vehicle</option>
                                    {generateYearsOptions()}
                                </Form.Control>
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                            <Form.Label htmlFor="vehicleNo">Vehicle Number</Form.Label>
                                <Form.Control type="text" name='vehicleNo' value={vehicleNo} onChange={(e) => onInputChange(e)} placeholder="Your Vehicle Number" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                            <Form.Label htmlFor="custCity">Booking City</Form.Label>
                                <Form.Control as="select" name="custCity" value={custCity} onChange={(e) => onInputChange(e)}>
                                    <option value="">Select a city</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Rajashthan">Rajashthan</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label htmlFor="bookDate">Booking Date</Form.Label>
                                <Form.Control type="date" name='bookDate' value={bookDate} onChange={(e) => onInputChange(e)} placeholder="Vehicle Booking Date" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label htmlFor="vehicleStatus">Booking Status</Form.Label>
                                <Form.Control as="select" name="vehicleStatus" value={vehicleStatus} onChange={(e) => onInputChange(e)}>
                                    <option value="">Update a Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Completed">Completed</option>
                                </Form.Control>
                            </Form.Group>


                            <Button variant="primary" className='col-lg-6 mt-2' style={{ background: "black" }} type="submit">
                                Update
                            </Button>
                        </Form>

                    </div>
                    <CarImg />
                </section>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

function generateYearsOptions() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= currentYear - 20; year--) {
        years.push(<option key={year} value={year}>{year}</option>);
    }
    return years;
}

export default EditVehicle;