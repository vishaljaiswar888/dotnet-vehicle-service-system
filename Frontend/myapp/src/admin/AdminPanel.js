import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-5 shadow text-center">
          <h2 className="text-center m-4">Welcome back, Admin!</h2>
          
          <form>
            <Link className="btn btn-outline-danger mx-2" to="/allUserDetail"
              style={{ fontSize: '24px', padding: '20px', width: '300px', marginTop: '20px', marginBottom: '20px' }}>
                View User Details
            </Link>

            <Link className="btn btn-outline-success mx-2" to="/allVehicleDetail"
              style={{ fontSize: '24px', padding: '20px', width: '300px', marginTop: '20px', marginBottom: '20px' }}>
                View Order Details
            </Link>

            {/* <Link className="btn btn-outline-success mx-2" to="/addpart1"
              style={{ fontSize: '24px', padding: '20px', width: '300px', marginTop: '20px', marginBottom: '20px' }}>
                Add New Product
            </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
