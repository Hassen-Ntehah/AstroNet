import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import DarkModeSwitch from "../DarkModeComponents/DarkModeSwitch";


export default function Navbar() {

  return (
    <nav className="py-10 px-16 flex justify-between items-center">
      <div className="font-bold text-xl tracking-widest text-cyan uppercase">
      <Nav.Link 
          className="Navlink no-underline  text-sm font-medium transition-colors duration-300 hover:text-gray-500 text-pink " 
          as={Link} 
          to="/"
        >
          
        <span className="text-info text-2xl text-dark dark:text-white hover:text-gray-500">Astro</span>Net
        </Nav.Link>
      </div>
      <div className="flex gap-12">
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500 " 
          as={Link} 
          to="/"
        >
          Home
        </Nav.Link>
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500 " 
          as={Link} 
          to="/latest"
        >
          Archive
        </Nav.Link>
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500 " 
          href="https://www.nasa.gov/blogs/" 
          target="_blank"
        >
          Blogs
        </Nav.Link>
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500 " 
          as={Link} 
          to="/History"
        >
          History
        </Nav.Link>
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500 " 
          href="https://www.nasa.gov" 
          target="_blank"
        >
          NASA Official
        </Nav.Link>
      </div>
      <div className="flex gap-6 items-center">
        <DarkModeSwitch/>
      </div>
    </nav>
  )
}
