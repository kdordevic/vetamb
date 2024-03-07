import React from 'react';
import { motion } from "framer-motion";
import "../style/NotFound.css";

function NotFound() {
    return (
      <motion.main
        className="not-found"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1> 404 Page not found</h1>
        <div className="graphic"> </div>
      </motion.main>
    );
}

export default NotFound
