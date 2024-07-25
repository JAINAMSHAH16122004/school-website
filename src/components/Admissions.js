import React from 'react';
import { motion } from 'framer-motion';

const Admissions = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admissions
      </motion.h1>
      <p className="mb-6 text-justify animate__animated animate__fadeIn">
        The admission process at Springdale School is designed to identify students who will benefit from our educational programs and contribute positively to our school community. We seek students who are academically motivated, intellectually curious, and eager to engage in a dynamic learning environment.
      </p>
      <motion.img
        src="images/10.jpg"
        alt="Admissions Event"
        className="w-full h-80 object-cover rounded-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <h2 className="text-2xl font-bold mb-4">Admission Process</h2>
      <p className="mb-6 text-justify">
        Our admission process is straightforward and transparent. Prospective students and their families are encouraged to visit our campus, meet our faculty, and learn more about our programs. Admission forms are available for download from our website. Completed forms, along with required documents, should be submitted to the school office. An entrance test and interview will be scheduled for shortlisted candidates.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/11.jpg" alt="Process 1" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Step 1: Inquiry</h2>
          <p>Contact our admissions office to learn more about our programs and schedule a campus visit.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/12.jpg" alt="Process 2" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Step 2: Application</h2>
          <p>Submit the completed admission form along with the required documents to the school office.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/13.jpg" alt="Process 3" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Step 3: Entrance Test</h2>
          <p>Shortlisted candidates will be invited to take an entrance test to assess their academic abilities.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/14.jpg" alt="Process 4" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Step 4: Interview</h2>
          <p>Candidates who pass the entrance test will be invited for an interview with the admissions committee.</p>
        </div>
      </motion.div>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-8 mb-6">
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
    </div>
  );
}

export default Admissions;
