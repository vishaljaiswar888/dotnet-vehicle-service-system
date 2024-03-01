import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header2 from './component/Header2';
import Home from './component/Home';
import {Routes, Route} from "react-router-dom";
import UserSignUpData from './data/UserSignUpData';
import AllUserDetail from './User/AllUserDetail';
import Copyright from './component/Copyright';
import AddVehicle from './Vehicle/AddVehicle';
import AllVehicleDetail from './Vehicle/AllVehicleDetail';
import SignUp2 from './component/SignUp2';
import SignIn2 from './component/SignIn2';
import EditUser from './User/EditUser';
import EditVehicle from './Vehicle/EditVehicle';
import ViewUser from './User/ViewUser';
import ViewVehicle from './Vehicle/ViewVehicle';
import AdminPanel from './admin/AdminPanel';

import VehiclePayment from './payment/VehiclePayment';
import Invoice from './payment/Invoice';
import Contact from './component/Contact';
import About from './component/About';
import Landing from './component/Landing';

import Blog from './extra/Blog';
import SpecificUserDetail from './usertable/SpecificUserDetail';
import UserPanel from './usertable/UserPanel';
import SpecificUserView from './usertable/SpecificUserView';
import SpecificUserUpdate from './usertable/SpecificUserUpdate';
import SpecificUserVehicle from './usertable/SpecificUserVehicle';
import SpecificUserVehicleUpdate from './usertable/SpecificUserVehicleUpdate';
import SpecificUserVehicleView from './usertable/SpecificUserVehicleView';
import EmployeePanel from './employee/EmployeePanel';


function App() {
  return (
    <div>
      <Header2 />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup2' element={<SignUp2 />}/>
        <Route path='/signin2' element={<SignIn2 />}/>
        <Route path='/signUpData' element={<UserSignUpData />}/>
        <Route path='/allUserDetail' element={<AllUserDetail />}/>
        <Route path='/addVehicle' element={<AddVehicle />}/>
        <Route path='/allVehicleDetail' element={<AllVehicleDetail />}/>
        <Route path='/editUser/:id' element={<EditUser />}/>
        <Route path='/editVehicle/:id' element={<EditVehicle />}/>
        <Route path='/viewUser/:id' element={<ViewUser />}/>
        <Route path='/viewVehicle/:id' element={<ViewVehicle />}/>
        <Route path='/adminPanel' element={<AdminPanel />}/>
        <Route path='/vehiclePayment' element={<VehiclePayment />}/>
        <Route path='/invoice' element={<Invoice />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/landing' element={<Landing />}/>

        
        <Route path='/blog' element={<Blog />}/>
        <Route path='/specificUserDetail' element={<SpecificUserDetail />}/>
        <Route path='/userPanel' element={<UserPanel />}/>
        <Route path='/specificUserView/:id' element={<SpecificUserView />}/>
        <Route path='/specificUserUpdate/:id' element={<SpecificUserUpdate />}/>
        <Route path='/specificUserVehicleUpdate/:id' element={<SpecificUserVehicleUpdate />}/>
        <Route path='/specificUserVehicleView/:id' element={<SpecificUserVehicleView />}/>
        <Route path='/specificUserVehicle' element={<SpecificUserVehicle />}/>
        <Route path='/employeePanel' element={<EmployeePanel />}/>

      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
