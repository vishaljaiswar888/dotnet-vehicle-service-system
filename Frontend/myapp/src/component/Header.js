import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Header = ({ userEmail }) => {
    const history = useNavigate();

    const userLogout = () => {
        localStorage.clear(); // Remove all data from localStorage
        history("/signup2"); // Navigate to "/signup2" after logout
    }

    // Check if SignInData exists in localStorage
    const isUserLoggedIn = localStorage.getItem("SignInData");
    const isAdmin = userEmail === "admin@automaster.com"; // Check if the user is an admin

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/signup2">AutoMaster</Navbar.Brand>
                    <Nav className="me-auto">
                        {isUserLoggedIn && ( // Conditionally render links if user is logged in
                            <>
                                {isAdmin ? (
                                    <Nav.Link href="/addVehicle">Home</Nav.Link>
                                ) : (
                                    <>
                                        <Nav.Link href="#features">Features</Nav.Link>
                                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                                    </>
                                )}
                            </>
                        )}
                    </Nav>
                    {isUserLoggedIn && ( // Conditionally render logout button
                        <Nav>
                            <Button onClick={userLogout} style={{ background: "black" }}>LogOut</Button>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;





// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//     const history = useNavigate();

//     const userLogout = () => {
//         localStorage.removeItem("SignInData");
//         history("/signup");
//     }

//     // Check if SignInData exists in localStorage
//     const isUserLoggedIn = localStorage.getItem("SignInData");

//     return (
//         <div>
//             <Navbar bg="dark" data-bs-theme="dark">
//                 <Container>
//                     <Navbar.Brand href="#home">AutoMaster</Navbar.Brand>
//                     <Nav className="me-auto">
//                         {isUserLoggedIn && ( // Conditionally render links if user is logged in
//                             <>
//                                 <Nav.Link href="/addVehicle">Home</Nav.Link>
//                                 <Nav.Link href="#features">Features</Nav.Link>
//                                 <Nav.Link href="#pricing">Pricing</Nav.Link>
//                             </>
//                         )}
//                     </Nav>
//                     {isUserLoggedIn && ( // Conditionally render logout button
//                         <Nav>
//                             <Button onClick={userLogout} style={{ background: "black" }}>LogOut</Button>
//                         </Nav>
//                     )}
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default Header;
