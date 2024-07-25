import React from 'react';
import { motion } from 'framer-motion';

const Students = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Students
      </motion.h1>
      <p className="mb-6 text-justify animate__animated animate__fadeIn">
        Our students are at the heart of everything we do at Springdale School. We are proud of our diverse and talented student body, which represents a wide range of backgrounds, interests, and abilities. Our students are encouraged to explore their passions, develop their talents, and become active, engaged members of our school community.
      </p>
      <motion.img
        src="/images/26.jpg"
        alt="Student Event"
        className="w-full h-80 object-cover rounded-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <h2 className="text-2xl font-bold mb-4">Student Life</h2>
      <p className="mb-6 text-justify">
        Student life at Springdale School is vibrant and dynamic. We offer a wide range of extracurricular activities, clubs, and organizations that allow students to pursue their interests and develop new skills. Our students are actively involved in sports, arts, community service, and leadership activities, making our campus a lively and engaging place to be.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="images/18.jpg" alt="Sports" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Sports</h2>
          <p>Our sports program offers a variety of activities, including soccer, basketball, volleyball, and track and field. These programs help students develop physical fitness, teamwork, and leadership skills.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="images/19.jpg" alt="Arts" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Arts</h2>
          <p>Our arts program includes visual arts, music, theater, and dance. Students have the opportunity to express themselves creatively and participate in performances and exhibitions.</p>
        </div>
      </motion.div>
      <h2 className="text-2xl font-bold mb-4">Clubs and Organizations</h2>
      <p className="mb-6 text-justify">
        We offer a wide range of clubs and organizations that cater to a variety of interests. These include academic clubs, cultural organizations, and special interest groups. Students are encouraged to join or even start new clubs that align with their passions.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="images/20.jpg" alt="Science Club" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Science Club</h2>
          <p>Our Science Club allows students to explore scientific concepts, conduct experiments, and participate in science fairs and competitions.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="images/21.jpg" alt="Debate Club" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Debate Club</h2>
          <p>Our Debate Club encourages students to develop their public speaking and critical thinking skills through regular debates and discussions on various topics.</p>
        </div>
      </motion.div>
      <h2 className="text-2xl font-bold mb-4">Community Service</h2>
      <p className="mb-6 text-justify">
        Community service is an integral part of student life at Springdale School. Our students are actively involved in various service projects, both within the school and in the wider community. These projects help students develop a sense of social responsibility and empathy.
      </p>
      <motion.img
        src="/images/23.jpg"
        alt="Community Service"
        className="w-full h-80 object-cover rounded-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <h2 className="text-2xl font-bold mb-4">Student Leadership</h2>
      <p className="mb-6 text-justify">
        We provide numerous opportunities for students to develop their leadership skills. Students can take on leadership roles in student government, clubs, sports teams, and other organizations. These roles help students develop important skills such as communication, organization, and problem-solving.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="/images/24.jpg" alt="Student Council" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Student Council</h2>
          <p>The Student Council is the representative body for students, working to organize events and address student concerns. Members are elected by their peers and play a crucial role in school life.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <img src="images/25.jpg" alt="Peer Mentoring" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Peer Mentoring</h2>
          <p>Our Peer Mentoring program pairs older students with younger ones to provide guidance, support, and friendship. This program fosters a sense of community and helps new students adjust to school life.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Students;
