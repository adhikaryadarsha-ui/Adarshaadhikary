import { FaFacebookF, FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gray-900 text-white mt-20">
      {/* Animated Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>

      {/* Wave Background */}
      <div className="wave"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
       
        <p className="text-gray-400 mb-6">Web Designer & Front-End Developer</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a className="social-icon">
            <FaFacebookF />
          </a>

          <a className="social-icon">
            <FaLinkedinIn />
          </a>

          <a className="social-icon">
            <FaGithub />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Adarsha Adhikary. All rights reserved.
        </p>
      </div>

      {/* Scroll To Top */}
      <button onClick={scrollTop} className="scroll-top">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
