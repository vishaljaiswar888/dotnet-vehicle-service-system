import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


const AllUserDetail = () => {

  const {id} = useParams();

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:5230/api/user");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    // Display confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    
    // If user confirms deletion
    if (confirmDelete) {
      await axios.delete(`http://localhost:5230/api/user/${id}`);
      loadUsers();
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
              <th>Role</th>
              <th>First Name</th>
              <th>Email Id</th>
              <th>DOB</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, index)=>(
                <tr>
                <td key={index}>{index+1}</td>
                <td>{user.userRole}</td>
                <td>{user.userFullName}</td>
                <td>{user.userEmail}</td>
                <td>{user.userDOB}</td>
                <td>{user.userPassword}</td>
                <td>
                  <Link className='btn btn-primary mx-2' to={`/viewUser/${user.userId}`}>View</Link>
                  <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.userId}`}>Update</Link>
                  <Link className='btn btn-danger mx-2' onClick={()=>deleteUser(user.userId)}>Delete</Link>
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

export default AllUserDetail;