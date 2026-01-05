import React from "react";
import Title from "./Title";
import assets, { posServices } from "../assets/assets";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}

      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      {/* Background image */}
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 z-[-1] dark:hidden"
      />

      {/* Section title */}
      <Title 
        title="Our Services"
        desc="Discover the range of services we offer to help your business thrive."
      />

      {/* Service cards grid */}
      <div className="flex flex-col  md:grid grid-cols-2 ">
        {posServices.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
