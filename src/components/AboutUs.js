import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      <p className="mb-6 text-justify animate__animated animate__fadeIn">
        Springdale School is committed to providing a well-rounded education that prepares students for success in college and beyond. Our dedicated faculty, rigorous curriculum, and supportive community create an environment where students can thrive academically, socially, and personally. We emphasize critical thinking, creativity, and a love of learning. Our mission is to inspire and empower students to achieve their full potential and become responsible, respectful, and resourceful members of society.
      </p>
      <motion.img
        src="images/1.jpg"
        alt="School Logo"
        className="w-32 h-32 mb-6 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="mb-6 text-justify">
        To inspire and empower students to achieve their full potential and become responsible, respectful, and resourceful members of society. Our vision is to be a leading educational institution known for excellence in teaching, learning, and innovation, fostering a culture of continuous improvement and lifelong learning. Our core values include integrity, respect, excellence, innovation, and community.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/2.jpg" alt="Event 4" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our History</h2>
          <p>Founded in 1990, Springdale School has a rich history of academic excellence and a tradition of nurturing student potential.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="/images/3.jpg" alt="Event 5" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Achievements</h2>
          <p>Our students consistently achieve high academic performance, winning numerous awards in various competitions.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="/images/4.jpg" alt="Event 6" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Our Future</h2>
          <p>We are committed to continuous improvement and innovation, ensuring that our students are well-prepared for the future.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
