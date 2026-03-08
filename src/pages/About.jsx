import React from 'react'
import CommonBanner from '../components/CommonBanner'
import { FaArrowsAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <CommonBanner
        title="About Me"
        subtitle="I build modern, responsive and high performance websites"
      />
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-6">
        
          <div className="grid md:grid-cols-2 mt-20 gap-16">
            <div className="text-lg max-w-xl">
              <p>
                Hello! I'm{" "}
                <span className="font-bold text-md mb-5">Adarsha Adhikary</span>
                ,
              </p>
              <p className="mt-2">
                I have strong experience in UI design, responsive layout
                development, and website optimization.I enjoy turning creative
                ideas into functional and user-friendly websites.
              </p>
              <p className="mt-2">
                {" "}
                I also have experience working with design tools like Adobe
                Photoshop and Adobe Illustrator, which helps me create better UI
                designs and graphics.
              </p>
            </div>
            <div className=" text-lg">
              <h1 className="font-semibold text-xl">Personal Details</h1>
              <p className="mt-4 flex items-center">
                <span className="font-bold flex items-center me-3">
                  <FaArrowsAlt className="me-2 text-sm text-orange-600" />
                  Phone :
                </span>
                <Link to="tel:9564790085" className="">
                  9564790085
                </Link>
              </p>
              <p className="mt-2 flex items-center">
                <span className="font-bold flex items-center me-3">
                  <FaArrowsAlt className="me-2 text-sm text-orange-600" />
                  Email:
                </span>
                adarshaadhikary@gmail.com
              </p>
              <p className="mt-2 flex items-center">
                <span className="font-bold flex items-center me-3">
                  <FaArrowsAlt className="me-2 text-sm text-orange-600" />
                  Location:
                </span>
                Kolkata, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About