import React from 'react'
import heroimage from "../assets/images/adarsha_adhikary.png";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="min-h-[100vh] overflow-hidden">
      <div className="md:max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="md:w-md"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-2xl text-gray-400 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, i'm
            </motion.p>

            <motion.h1
              className="text-5xl text-blue-900 font-bold my-3 border-gray-200 border-b pb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Adarsha <span className="text-orange-600">Adhikary</span>
            </motion.h1>

            <motion.h2
              className="text-2xl text-blue-900 font-semibold mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Web Designer & Front-End Developer
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I design and build modern responsive websites with a focus on
              usability and performance.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link
                to="/project"
                className="inline-block font-semibold bg-orange-700 text-center text-white md:px-6 py-3 rounded hover:bg-blue-500 transition duration-300"
              >
                View My Work
              </Link>

              <Link
                to="/Contact"
                className="inline-block border-amber-300 font-semibold border text-center text-gray-800 md:px-6 py-3 rounded hover:bg-gray-400 transition duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          <div className="flex justify-center">
            <div className="hero-img-container">
              <div className="circle circle1"></div>
              <div className="circle circle2"></div>
              <div className="circle circle3"></div>
              <img
                src={heroimage}
                alt="Banner Image"
                className="w-sm rounded-lg profile-img "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner