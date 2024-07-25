import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "/images/event1.jpg",
  "/images/event2.jpg",
  "/images/event3.jpg",
  "/images/event4.jpg",
  "/images/event5.jpg",
  "/images/event6.jpg"
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h1>
      <p className="mb-6 text-justify animate__animated animate__fadeIn">
        Welcome to our gallery! Here, you can explore various events, activities, and highlights from Springdale School. Each image tells a story of our vibrant community, exciting events, and memorable moments. Enjoy browsing through our collection!
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Gallery;
