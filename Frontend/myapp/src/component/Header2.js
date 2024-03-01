import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Header2 = () => {
    const history = useNavigate();

    const userLogout = () => {
        localStorage.clear();
        history("/landing");
    }

    const isUserLoggedIn = localStorage.getItem("SignInData");

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">AutoMaster</Navbar.Brand>
                    <Nav className="me-auto">
                        {isUserLoggedIn && ( // Conditionally render links if user is logged in
                            <>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </>
                        )}
                    </Nav>
                    {isUserLoggedIn && (
                        <Nav>
                            <Button onClick={userLogout} style={{ background: "black" }}>LogOut</Button>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </div>
    )
}

export default Header2;




// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';

// const Header2 = () => {
//     const history = useNavigate();

//     const userLogout = () => {
//         localStorage.clear();
//         history("/landing");
//     }

//     // Check if SignInData exists in localStorage
//     const isUserLoggedIn = localStorage.getItem("SignInData");

//     return (
//         <div>
//             <Navbar bg="dark" data-bs-theme="dark">
//                 <Container>
//                     <Navbar.Brand href="#">AutoMaster</Navbar.Brand>
//                     <Nav className="me-auto">
//                         {isUserLoggedIn && ( // Conditionally render links if user is logged in
//                             <>
//                                 <Nav.Link href="/">Home</Nav.Link>
//                                 <Nav.Link href="/about">About</Nav.Link>
//                                 <Nav.Link href="/contact">Contact</Nav.Link>
//                                 <Nav.Link href="/blog">Blog</Nav.Link>
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

// export default Header2;






















// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';

// const Header2 = ({ userEmail }) => {
//     const history = useNavigate();

//     const userLogout = () => {
//         localStorage.removeItem("SignInData");
//         history("/signup2");
//     }

//     // Check if SignInData exists in localStorage
//     const isUserLoggedIn = localStorage.getItem("SignInData");
//     const isAdmin = userEmail === "admin@automaster.com"; // Check if the user is an admin

//     return (
//         <div>
//             <Navbar bg="dark" data-bs-theme="dark">
//                 <Container>
//                     <Navbar.Brand href="/signup2">AutoMaster</Navbar.Brand>
//                     <Nav className="me-auto">
//                         {isUserLoggedIn && ( // Conditionally render links if user is logged in
//                             <>
//                                 {isAdmin ? (
//                                     <Nav.Link href="/addVehicle">Home</Nav.Link>
//                                 ) : (
//                                     <>
//                                         <Nav.Link href="#features">Features</Nav.Link>
//                                         <Nav.Link href="#pricing">Pricing</Nav.Link>
//                                     </>
//                                 )}
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

// export default Header2;
