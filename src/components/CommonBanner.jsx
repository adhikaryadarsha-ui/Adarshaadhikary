import { motion } from "framer-motion";

const CommonBanner = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      {/* Liquid Shape */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-40"
        viewBox="0 0 1440 320"
      >
        <motion.path
          fill="#ffffff"
          fillOpacity="0.15"
          initial={{
            d: "M0,160L80,170C160,180,320,200,480,186.7C640,173,800,128,960,128C1120,128,1280,173,1360,197.3L1440,220L1440,320L0,320Z",
          }}
          animate={{
            d: [
              "M0,160L80,170C160,180,320,200,480,186.7C640,173,800,128,960,128C1120,128,1280,173,1360,197.3L1440,220L1440,320L0,320Z",
              "M0,180L80,190C160,200,320,220,480,206.7C640,193,800,148,960,148C1120,148,1280,193,1360,217.3L1440,240L1440,320L0,320Z",
              "M0,160L80,170C160,180,320,200,480,186.7C640,173,800,128,960,128C1120,128,1280,173,1360,197.3L1440,220L1440,320L0,320Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg opacity-90"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default CommonBanner;
