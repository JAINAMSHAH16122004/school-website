import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <p className="mb-6 text-justify animate__animated animate__fadeIn">
        We welcome your inquiries and feedback. Please feel free to contact us using the information provided below or by filling out the contact form. Our staff will respond to your queries promptly.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <h2 className="text-2xl font-bold mb-2">School Address</h2>
          <p>Springdale School<br />123 Main Street<br />Hometown, ST 12345</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p>Phone: (123) 456-7890<br />Email: info@springdaleschool.com</p>
        </div>
      </motion.div>
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
      <motion.form
        className="bg-white p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
          <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
      </motion.form>
    </div>
  );
}

export default Contact;
