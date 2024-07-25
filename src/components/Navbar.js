import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-custom animate-fade-in">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <motion.img
            src="images/school_logo.png"
            alt="School Logo"
            className="w-12 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <Link to="/" className="text-white text-2xl font-bold hover:text-secondary">
            Springdale School
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-secondary">Home</Link>
          <Link to="/about" className="text-white hover:text-secondary">About</Link>
          <Link to="/academics" className="text-white hover:text-secondary">Academics</Link>
          <Link to="/admissions" className="text-white hover:text-secondary">Admissions</Link>
          <Link to="/faculty" className="text-white hover:text-secondary">Faculty</Link>
          <Link to="/students" className="text-white hover:text-secondary">Students</Link>
          <Link to="/gallery" className="text-white hover:text-secondary">Gallery</Link>
          <Link to="/contact" className="text-white hover:text-secondary">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
