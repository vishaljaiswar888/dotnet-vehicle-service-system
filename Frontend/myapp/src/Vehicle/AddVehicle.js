import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CarImg from './CarImg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddVehicle = () => {
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
        bookDate: ""
    });

    useEffect(() => {
        const signInData = localStorage.getItem('SignInData');
        if (signInData) {
            const { userEmail, userFullName } = JSON.parse(signInData);
            setVehicle(prevState => ({ ...prevState, custEmail: userEmail, custName: userFullName }));
        }
    }, []);

    // deconstructing an object
    const { custName, custEmail, custPhone, vehicleType, vehicleBrand, vehicleYear, vehicleNo, custCity, bookDate} = vehicle;

    const onInputChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const selectedDate = new Date(bookDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (!custName.trim()) {
            alert("Full Name is required.");
            return;
        } else if (!/^[A-Za-z]{3,}\s[A-Za-z]{3,}$/.test(custName)) {
            alert("Please enter full name in the format 'XXX XXX', with at least three characters before and after the space.");
            return;
        } else if (!custPhone.trim()) {
            alert("Phone Number is required.");
            return;
        } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(custPhone)){
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
        } else if (!custCity.trim()) {
            alert("City is required.");
            return;
        } else if (!bookDate.trim()) {
            alert("Booking Date is required.");
            return;
        }else if (selectedDate < today) {
            alert("Please select today's date or a future date.");
        }else{
            try {
                await axios.post("http://localhost:5230/api/vehi", vehicle);
                console.log("Vehicle added successfully.");
                alert("Vehicle added successfully.");
                setVehicle({ custName: "", custEmail: "", custPhone: "", vehicleType: "", vehicleBrand: "", vehicleYear: "", vehicleNo:"", custCity: "", bookDate:"" });
                navigate("/vehiclePayment", { replace: true });
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
                        <h3 className='text-center col-lg-6'>Enter Vehicle Details</h3>

                        <Form onSubmit={(e) => onSubmit(e)}>
                            <Form.Group className="mb-3 col-lg-6 mt-3">
                                <Form.Control type="text" name='custName' value={custName} onChange={(e) => onInputChange(e)} placeholder="Your Full Name" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 mt-3">
                                <Form.Control type="email" name='custEmail' value={custEmail} onChange={(e) => onInputChange(e)} placeholder="Your Email Id" disabled/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="text" name='custPhone' value={custPhone} onChange={(e) => onInputChange(e)} placeholder="Your Phone Number" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control as="select" name="vehicleType" value={vehicleType} onChange={(e) => onInputChange(e)}>
                                    <option value="">Select a vehicle type</option>
                                    <option value="Car">Car</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Truck">Truck</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
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
                                <Form.Control as="select" name="vehicleYear" value={vehicleYear} onChange={(e) => onInputChange(e)}>
                                    <option value="">Select year of vehicle</option>
                                    {generateYearsOptions()}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="text" name='vehicleNo' value={vehicleNo} onChange={(e) => onInputChange(e)} placeholder="Your Vehicle Number : XX-123-123" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control as="select" name="custCity" value={custCity} onChange={(e) => onInputChange(e)}>
                                    <option value="">Select a city</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Rajashthan">Rajashthan</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Label htmlFor="bookDate">Booking Date</Form.Label>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Control type="date" name='bookDate' value={bookDate} onChange={onInputChange} placeholder="Enter Booking Date" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6 mt-2' style={{ background: "black" }} type="submit">
                                Submit
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

export default AddVehicle;




// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import CarImg from './CarImg';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddVehicle = () => {

//     let navigate = useNavigate();

//     // constructing an object
//     const [vehicle, setVehicle] = useState({
//         custName: "",
//         custPhone: "",
//         vehicleType: "",
//         vehicleBrand: "",
//         vehicleYear: "",
//         custCity: ""
//     })

//     // deconstructing an object
//     const { custName, custPhone, vehicleType, vehicleBrand, vehicleYear, custCity } = vehicle;


//     const onInputChange = (e) => {
//         setVehicle({ ...vehicle, [e.target.name]: e.target.value });
//     }


//     const onSubmit = async (e) => {
//         e.preventDefault();

//         if (vehicle.custName === "") {
//             alert("Full Name is required!");
//         } else if(vehicle.custPhone === ""){
//             alert("Phone number is required!");
//         }else if(!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(custPhone)){
//             alert("Please enter a valid mobile number!");
//         }else if(vehicle.vehicleType === ""){
//             alert("Vehicle type is required!");
//         }else if(vehicle.vehicleBrand){
//             alert("VehiclebBrand is required!");
//         }else if(vehicle.vehicleYear){
//             alert("Purchase year is required!");
//         }
//         else if(vehicle.custCity){
//             alert("City is required!");
//         }else {
//             try {
//                 await axios.post("http://localhost:8080/insertVehicleDetail", vehicle);
//                 console.log("Vehicle added successfully.");
//                 alert("Vehicle added successfully.");
//                 setVehicle({ custName: "", custPhone: "", vehicleType: "", vehicleBrand: "", vehicleYear: "", custCity: "" });
//                 navigate("/addVehicle", { replace: true });
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
//                         <h3 className='text-center col-lg-6'>Enter Vehicle Details</h3>

//                         <Form onSubmit={(e) => onSubmit(e)}>
//                             <Form.Group className="mb-3 col-lg-6 mt-3">
//                                 <Form.Control type="text" name='custName' value={custName} onChange={(e) => onInputChange(e)} placeholder="Your Full Name" />
//                             </Form.Group>


//                             <Form.Group className="mb-3 col-lg-6">
//                                 <Form.Control type="text" name='custPhone' value={custPhone} onChange={(e) => onInputChange(e)} placeholder="Your Phone Number" />
//                             </Form.Group>


//                             <Form.Group className="mb-3 col-lg-6">
//                                 <Form.Control as="select" name="vehicleType" value={vehicleType} onChange={(e) => onInputChange(e)}>
//                                     <option value="">Select a vehicle type</option>
//                                     <option value="Car">Car</option>
//                                     <option value="Bike">Bike</option>
//                                     <option value="Truck">Truck</option>
//                                 </Form.Control>
//                             </Form.Group>


//                             <Form.Group className="mb-3 col-lg-6">
//                                 <Form.Control as="select" name="vehicleBrand" value={vehicleBrand} onChange={(e) => onInputChange(e)}>
//                                     <option value="">Select a brand</option>
//                                     <option value="Audi">Audi</option>
//                                     <option value="BMW">BMW</option>
//                                     <option value="Honda">Honda</option>
//                                     <option value="Kawasaki">Kawasaki</option>
//                                     <option value="Suzuki">Suzuki</option>
//                                     <option value="Toyota">Toyota</option>
//                                     <option value="Tata">Tata</option>
//                                 </Form.Control>
//                             </Form.Group>


//                             <Form.Group className="mb-3 col-lg-6">
//                                 <Form.Control as="select" name="vehicleYear" value={vehicleYear} onChange={(e) => onInputChange(e)}>
//                                     <option value="">Select year of vehicle</option>
//                                     {generateYearsOptions()}
//                                 </Form.Control>
//                             </Form.Group>


//                             <Form.Group className="mb-3 col-lg-6">
//                                 <Form.Control as="select" name="custCity" value={custCity} onChange={(e) => onInputChange(e)}>
//                                     <option value="">Select a city</option>
//                                     <option value="Mumbai">Mumbai</option>
//                                     <option value="Delhi">Delhi</option>
//                                     <option value="Banglore">Banglore</option>
//                                     <option value="Hyderabad">Hyderabad</option>
//                                     <option value="Rajashthan">Rajashthan</option>
//                                 </Form.Control>
//                             </Form.Group>


//                             <Button variant="primary" className='col-lg-6 mt-2' style={{ background: "black" }} type="submit">
//                                 Submit
//                             </Button>
//                         </Form>

//                     </div>
//                     <CarImg />
//                 </section>
//             </div>
//         </div>
//     )
// }

// function generateYearsOptions() {
//     const currentYear = new Date().getFullYear();
//     const years = [];
//     for (let year = currentYear; year >= currentYear - 20; year--) {
//         years.push(<option key={year} value={year}>{year}</option>);
//     }
//     return years;
// }

// export default AddVehicle