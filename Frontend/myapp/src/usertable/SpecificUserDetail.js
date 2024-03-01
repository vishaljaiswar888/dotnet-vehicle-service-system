import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const SpecificUserDetail = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const signInData = localStorage.getItem('SignInData');
      if (signInData) {
        const { userId } = JSON.parse(signInData);
        const response = await axios.get(`http://localhost:5230/api/user/${userId}`);
        setUser(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteUser = async (id) => {
    // Display confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    
    // If user confirms deletion
    if (confirmDelete) {
      await axios.delete(`http://localhost:5230/api/user/${id}`);
      loadUser();
    }
  };

  return (
    <div className='container'>
      <div className="py-4">
        <Link to="/adminPanel">
          <Button style={{ background: "black" }}>Back to Admin Panel</Button>
        </Link>
        {user && (
          <Table striped bordered hover className='border mt-3'>
            <thead>
              <tr>
                <th>User Full Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.userFullName}</td>
                <td>{user.userEmail}</td>
                <td>{user.userDOB}</td>
                <td>{user.userPassword}</td>
                <td>
                  <Link className='btn btn-primary mx-2' to={`/viewUser/${user.userId}`}>View</Link>
                  <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.userId}`}>Update</Link>
                  <Link className='btn btn-danger mx-2' onClick={() => deleteUser(user.userId)}>Delete</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default SpecificUserDetail;

















// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import Button from 'react-bootstrap/esm/Button';

// const SpecificUserDetail = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     try {
//       const signInData = localStorage.getItem('SignInData');
//       if (signInData) {
//         const { userEmail } = JSON.parse(signInData);
//         const response = await axios.get(`http://localhost:5230/api/user/${id}`);
//         const userData = response.data;
//         if (userData.userEmail === userEmail) {
//           setUser(userData);
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const deleteUser = async (id) => {
//     // Display confirmation dialog
//     const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    
//     // If user confirms deletion
//     if (confirmDelete) {
//       await axios.delete(`http://localhost:5230/api/user/${id}`);
//       loadUser();
//     }
//   };

//   return (
//     <div className='container'>
//       <div className="py-4">
//         <Link to="/adminPanel">
//           <Button style={{ background: "black" }}>Back to Admin Panel</Button>
//         </Link>
//         <Table striped bordered hover className='border mt-3'>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>User Full Name</th>
//               <th>Email</th>
//               <th>DOB</th>
//               <th>Password</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user && (
//               <tr>
//                 <td>1</td>
//                 <td>{user.userFullName}</td>
//                 <td>{user.userEmail}</td>
//                 <td>{user.userDOB}</td>
//                 <td>{user.userPassword}</td>
//                 <td>
//                   <Link className='btn btn-primary mx-2' to={`/viewUser/${user.userId}`}>View</Link>
//                   <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.userId}`}>Update</Link>
//                   <Link className='btn btn-danger mx-2' onClick={() => deleteUser(user.userId)}>Delete</Link>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default SpecificUserDetail;
