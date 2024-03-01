// import React, { useEffect, useState } from 'react'
// import {Button, Table} from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const AllUserList = () => {
//     const url = "http://localhost:5230/api/user";
//     const[data, setData] = useState([]);

//     useEffect(()=>{
//         getData();
//     },[]);

//     const getData = () => {
//         axios.get(url)
//         .then((result)=>{
//             setData(result.data);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
//     };

//     const handleDelete = (id) =>{
//         if(window.confirm("Are you sure?") == true){
//             alert(id);
//         }
//     }

//     const deleteUser = async (id) => {
//         // Display confirmation dialog
//         const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        
//         // If user confirms deletion
//         if (confirmDelete) {
//           await axios.delete(`http://localhost:8080/fetchAllUserDetail/${id}`);
//           loadUsers();
//         }
//       }


//   return (
//     <div className='container'>
//       <div className="py-4">

//       <Link to="/adminPanel">
//         <Button style={{ background: "black" }}>Back to Admin Panel</Button>
//       </Link>

//         <Table striped="columns" className='border mt-3'>
//           <thead>
//             <tr>
//               <th>Sr</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Username</th>
//               <th>Password</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>

//             {
//                 data.map((item, index)=>(
//                 <tr key={index}>
//                 <td>{index+1}</td>
//                 <td>{item.userFullName}</td>
//                 <td>{item.userEmail}</td>
//                 <td>{item.userDOB}</td>
//                 <td>{item.userPassword}</td>
//                 <td>
//                   <Link className='btn btn-primary mx-2' to={`/viewDemoUser/${item.userId}`}>View</Link>
//                   <Link className='btn btn-outline-primary mx-2' to={`/editDemoUser/${item.userId}`}>Edit</Link>
//                   <Link className='btn btn-danger mx-2' onClick={()=>deleteUser(item.userId)}>Delete</Link>
//                 </td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   )
// }

// export default AllUserList