import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Springdale School
      </motion.h1>
      <p className="mb-6 text-justify animate__animated animate__fadeIn">
        Springdale School is dedicated to providing a nurturing and challenging environment for students to grow and thrive. Our commitment to excellence in education is reflected in our outstanding academic programs and supportive community. We believe in holistic development, emphasizing both academics and extracurricular activities. Our state-of-the-art facilities and experienced faculty ensure that students receive a well-rounded education.
      </p>
      <motion.img
        src="/images/school_building.jpg"
        alt="School Building"
        className="w-full h-80 object-cover rounded-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <p className="text-xl font-bold mb-6 text-center animate__animated animate__fadeIn">
        Discover our vibrant community and explore the opportunities we offer.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="p-4 bg-white rounded-lg shadow-lg animate__animated animate__zoomIn">
          <img src="/images/18.jpg" alt="Event 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Sports Day</h2>
          <p>Our annual Sports Day fosters teamwork and sportsmanship. Students compete in various events, showcasing their athletic skills.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg animate__animated animate__zoomIn">
          <img src="/images/20.jpg" alt="Event 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Science Fair</h2>
          <p>The Science Fair is a platform for students to exhibit their scientific acumen and innovative projects.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg animate__animated animate__zoomIn">
          <img src="/images/event1.jpg" alt="Event 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Cultural Fest</h2>
          <p>Our Cultural Fest celebrates the diversity and talent of our students through various performances and activities.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
