import React from "react";
import assets from "../assets/assets";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* top footer */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10 ">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt=""
            className="w-32 sm:w-44"
          />
          <p className="max-w-md">
            We provide cutting-edge POS solutions tailored to your business
            needs. Contact us today to learn more.
          </p>

          <ul className="flex gap-8">
            <li>
              <a
                className="hover:text-black hover:font-bold dark:hover:text-white"
                href="#hero"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-black hover:font-bold dark:hover:text-white"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hover:text-black hover:font-bold dark:hover:text-white"
                href="#our-work"
              >
                Our Works
              </a>
            </li>

            <li>
              <a
                className="hover:text-black hover:font-bold dark:hover:text-white"
                href="#contact-us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-bold text-black dark:text-white">Our Location</h3>
          <p className="mt-2">123 Business Street, Suite 100</p>
          <p className="mt-1">New York, NY 10001</p>
        </motion.div>
      </div>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      {/* bottom footer */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p className="flex flex-wrap">
          {" "}
          Copyright 2026 © POS System Agency - All right Reserved
        </p>
        <div className="flex items-center justify-between gap-4">
          <Facebook />
          <Youtube />
          <Instagram />
          <Linkedin />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
