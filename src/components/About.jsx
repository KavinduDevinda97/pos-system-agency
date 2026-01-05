import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="about"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >


      {/* Section title */}
      <Title
        title="About Us"
        desc="We build secure, scalable, and user-friendly POS systems designed for modern businesses."
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl text-center space-y-4"
      >
        <p className="text-sm sm:text-base">
          We are a POS system development agency focused on delivering powerful
          point-of-sale solutions for retail, restaurant, and service-based
          businesses. Our systems help streamline operations, manage inventory,
          and improve overall efficiency.
        </p>

        <p className="text-sm sm:text-base">
          With a strong focus on performance, security, and modern UI/UX, we
          build POS solutions that scale with your business and adapt to your
          evolving needs.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
