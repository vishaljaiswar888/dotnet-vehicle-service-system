import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


const AllVehicleDetail = () => {

  const [vehicles, setVehicles] = useState([]);

  useEffect(()=>{
    loadVehicles();
  },[]);

  const loadVehicles=async()=>{
    const result=await axios.get("http://localhost:5230/api/vehi");
    setVehicles(result.data);
  }

  const deleteVehicle = async (id) => {
    // Display confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");
    
    // If user confirms deletion
    if (confirmDelete) {
      await axios.delete(`http://localhost:5230/api/vehi/${id}`);
      loadVehicles();
    }
  }
  

  return (
    <div className='container'>
      <div className="py-4">
      <Link to="/adminPanel">
        <Button style={{ background: "black" }}>Back to Admin Panel</Button>
      </Link>
            
        <Table striped="columns" className='border mt-3'>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>V. Type</th>
              <th>V. Number</th>
              <th>Book City</th>
              <th>Book Date</th>
              <th>B. Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              vehicles.map((vehicle, index)=>(
                <tr>
                <td key={index}>{index+1}</td>
                <td>{vehicle.custName}</td>
                <td>{vehicle.custEmail}</td>
                <td>{vehicle.custPhone}</td>
                <td>{vehicle.vehicleType}</td>
                <td>{vehicle.vehicleNo}</td>
                <td>{vehicle.custCity}</td>
                <td>{vehicle.bookDate}</td>
                <td>{vehicle.vehicleStatus}</td>

                <td>
                  <Link className='btn btn-primary mx-2' to={`/viewVehicle/${vehicle.Id}`}>View</Link>
                  <Link className='btn btn-outline-primary mx-2' to={`/editVehicle/${vehicle.Id}`}>Update</Link>
                  <Link className='btn btn-danger mx-2' onClick={()=>deleteVehicle(vehicle.Id)}>Delete</Link>
                </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default AllVehicleDetail;