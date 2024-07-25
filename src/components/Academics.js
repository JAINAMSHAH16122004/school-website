import React from 'react';
import { motion } from 'framer-motion';

const Academics = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Academics
      </motion.h1>
      <p className="mb-6 text-justify animate__animated animate__fadeIn">
        At Springdale School, we offer a comprehensive and challenging academic program that prepares students for success in college and beyond. Our curriculum is designed to foster critical thinking, creativity, and a love of learning. We provide a wide range of courses, including Advanced Placement (AP) and honors classes, to meet the diverse needs of our students.
      </p>
      <motion.img
        src="/images/5.jpg"
        alt="Academic Event"
        className="w-full h-80 object-cover rounded-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <h2 className="text-2xl font-bold mb-4">Programs</h2>
      <p className="mb-6 text-justify">
        We offer a variety of academic programs, including advanced placement courses, honors classes, and extracurricular activities that enhance the learning experience. Our programs are designed to challenge students academically while providing the support they need to succeed. We encourage students to explore their interests and passions through a variety of elective courses and extracurricular activities.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/6.jpg" alt="Program 1" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">STEM Program</h2>
          <p>Our STEM program focuses on Science, Technology, Engineering, and Mathematics. It is designed to inspire students to pursue careers in these fields.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/7.jpg" alt="Program 2" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Humanities Program</h2>
          <p>Our Humanities program offers a diverse range of courses in literature, history, and social sciences, fostering critical thinking and cultural awareness.</p>
        </div>
      </motion.div>
      <h2 className="text-2xl font-bold mb-4">Support Services</h2>
      <p className="mb-6 text-justify">
        Our dedicated faculty and staff provide personalized support and guidance to help students achieve their academic goals. We offer tutoring, counseling, and other resources to ensure that every student has the tools they need to succeed. Our support services include academic advising, college counseling, and career planning.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/8.jpg" alt="Support 1" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Tutoring Services</h2>
          <p>We offer tutoring services in various subjects to help students strengthen their understanding and improve their academic performance.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="/images/9.jpg" alt="Support 2" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Counseling Services</h2>
          <p>Our counseling services provide students with the support they need to navigate academic and personal challenges, ensuring their well-being and success.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Academics;
