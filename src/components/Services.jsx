import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Comprehensive testing for all your needs.</p>
      </div>
      <div className="services-grid">
        <motion.div
          className="service-item"
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Home Collection</h3>
          <p>Convenient sample collection from your doorstep.</p>
        </motion.div>
        <motion.div
          className="service-item"
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Digital Reports</h3>
          <p>Access your reports online, anytime.</p>
        </motion.div>
        <motion.div
          className="service-item"
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3>Wellness Packages</h3>
          <p>Curated packages for a holistic health view.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
