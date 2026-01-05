import React from "react";
import Title from "./Title";
import { motion } from "motion/react";
import { posWorks } from "../assets/assets";

const OurWork = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Work"
        desc="Trusted POS solutions delivered to real businesses"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {posWorks.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-105 duration-500 transition-all mb-10 cursor-pointer"
          >
            <img
              src={work.image}
              alt={work.title}
              className="rounded-lg shadow-lg"
            />
            <h3 className="mt-3 mb-2 text-base font-semibold">{work.title}</h3>
            <p className="text-sm    opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
