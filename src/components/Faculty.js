import React from 'react';
import { motion } from 'framer-motion';

const Faculty = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Faculty
      </motion.h1>
      <p className="mb-6 text-justify animate__animated animate__fadeIn">
        Our faculty members are dedicated professionals who are committed to providing a high-quality education and fostering a positive learning environment. They bring a wealth of knowledge and experience to the classroom, inspiring students to achieve their best. Our faculty are not only educators but also mentors, guiding students in their academic and personal development.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="/images/teacher1.jpg" alt="Teacher 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">John Doe</h2>
          <p>Mathematics Teacher with over 20 years of experience in teaching algebra, calculus, and geometry.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="/images/teacher2.jpg" alt="Teacher 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Jane Smith</h2>
          <p>English Teacher specializing in literature and creative writing. She has published several academic papers.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="/images/teacher3.jpg" alt="Teacher 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Michael Johnson</h2>
          <p>Science Teacher with a passion for biology and environmental science. He has been with us for 15 years.</p>
        </div>
      </motion.div>
      <h2 className="text-2xl font-bold mb-4">Professional Development</h2>
      <p className="mb-6 text-justify">
        We believe in the continuous professional development of our faculty. We provide opportunities for our teachers to attend workshops, conferences, and training programs to stay updated with the latest educational trends and methodologies. Our professional development programs are designed to enhance the teaching skills and knowledge of our faculty, ensuring that they can provide the best possible education to our students.
      </p>
      <motion.img
        src="images/15.jpg"
        alt="Faculty Development"
        className="w-full h-80 object-cover rounded-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <h2 className="text-2xl font-bold mb-4">Faculty Achievements</h2>
      <p className="mb-6 text-justify">
        Our faculty members have achieved significant recognition in their respective fields. Many have received awards for their teaching excellence, published research papers, and presented at national and international conferences. Their achievements are a testament to their dedication and expertise.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/16.jpg" alt="Achievement 1" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Award for Excellence in Teaching</h2>
          <p>Several of our faculty members have received awards for their outstanding contributions to education.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img src="images/17.jpg" alt="Achievement 2" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Research Publications</h2>
          <p>Our faculty have published numerous research papers in prestigious journals, contributing to the advancement of knowledge in their fields.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Faculty;
