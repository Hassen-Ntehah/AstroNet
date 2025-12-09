// import React,{useContext,} from "react";
// import Nav from "react-bootstrap/Nav";
// import Image from "react-bootstrap/Image";
// import Button from 'react-bootstrap/esm/Button';
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

// import logo from "./Subject.png";
// // import { ThemeContext } from "./App";
// export default function MyNavbar() {
//   // const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <Navbar expand="lg" variant="dark" className="navbar-custom sticky-top">
//       <Container>
//         {/* <Navbar.Brand as={Link} to="/" className="fw-bold text-info">
//           <Image width={40} height={40} src={logo} alt="" />
//         </Navbar.Brand> */}
//         <Navbar.Brand as={Link} to="/" className="apptitle fw-bold">
//         Astro<span className="text-info text-xl">Net</span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link className="Navlink" as={Link} to="/">
//               Home
//             </Nav.Link>
//             <Nav.Link className="Navlink" as={Link} to="/latest">
//               Archive
//             </Nav.Link>
//             <Nav.Link className="Navlink" href="https://www.nasa.gov/blogs/" target="_blank" >
//               Blogs
//             </Nav.Link>
//             <Nav.Link className="Navlink" as={Link} to="/History">
//               History
//             </Nav.Link>
//             <Nav.Link className="Navlink" href="https://www.nasa.gov" target="_blank">
//               NASA Official
//             </Nav.Link>
//             <Button 
//               variant="outline-secondary" 
//               onClick={toggleTheme} 
//               className="ms-2 rounded-circle"
//               style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//             >
//               {theme === 'dark' ? '☀️' : '🌙'}
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
