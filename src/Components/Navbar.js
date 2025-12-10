import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import DarkModeSwitch from "../DarkModeComponent/DarkModeSwitch";
import logo from "../images/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 md:py-10 px-4 md:px-8 lg:px-16 flex justify-between items-center relative">
      <div className="font-bold text-xl tracking-widest text-cyan uppercase">
        <Nav.Link 
          className="Navlink flex gap-1 no-underline items-center justify-center text-sm font-medium transition-colors duration-300 hover:text-gray-500" 
          as={Link} 
          to="/"
        >
          <img src={logo} className="w-12 md:w-20" alt=""/>
          <span className="hidden sm:block text-info text-base md:text-lg text-dark dark:text-white hover:text-gray-500">AstroNet</span>
        </Nav.Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 xl:gap-12">
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500" 
          as={Link} 
          to="/"
        >
          Home
        </Nav.Link>
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500" 
          as={Link} 
          to="/latest"
        >
          Archive
        </Nav.Link>
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500" 
          href="https://www.nasa.gov/blogs/" 
          target="_blank"
        >
          Blogs
        </Nav.Link>
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500" 
          as={Link} 
          to="/History"
        >
          History
        </Nav.Link>
        <Nav.Link 
          className="Navlink no-underline text-dark dark:text-muted text-sm font-medium transition-colors duration-300 hover:text-gray-500" 
          href="https://www.nasa.gov" 
          target="_blank"
        >
          NASA Official
        </Nav.Link>
      </div>

      {/* Desktop Dark Mode Switch */}
      <div className="hidden lg:flex gap-6 items-center">
        <DarkModeSwitch/>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2 text-dark dark:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col px-4 py-4 gap-4">
          <Nav.Link 
            className="Navlink no-underline text-dark dark:text-muted text-base font-medium transition-colors duration-300 hover:text-gray-500 py-2" 
            as={Link} 
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            className="Navlink no-underline text-dark dark:text-muted text-base font-medium transition-colors duration-300 hover:text-gray-500 py-2" 
            as={Link} 
            to="/latest"
            onClick={() => setIsMenuOpen(false)}
          >
            Archive
          </Nav.Link>
          <Nav.Link 
            className="Navlink no-underline text-dark dark:text-muted text-base font-medium transition-colors duration-300 hover:text-gray-500 py-2" 
            href="https://www.nasa.gov/blogs/" 
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Nav.Link>
          <Nav.Link 
            className="Navlink no-underline text-dark dark:text-muted text-base font-medium transition-colors duration-300 hover:text-gray-500 py-2" 
            as={Link} 
            to="/History"
            onClick={() => setIsMenuOpen(false)}
          >
            History
          </Nav.Link>
          <Nav.Link 
            className="Navlink no-underline text-dark dark:text-muted text-base font-medium transition-colors duration-300 hover:text-gray-500 py-2" 
            href="https://www.nasa.gov" 
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            NASA Official
          </Nav.Link>
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <DarkModeSwitch/>
          </div>
        </div>
      </div>
    </nav>
  )
}
