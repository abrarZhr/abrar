import { motion } from "framer-motion";
import profilePic from "../assets/OIP.jpg";

function Slider() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-5 py-20 sm:py-28 overflow-hidden bg-white">

      {/* Background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-[600px] h-72 sm:h-[600px] bg-[#00CEB3] opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Profile photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-5"
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#00CEB3] shadow-lg">
          <img src={profilePic} alt="Abrar Alzhrani" className="w-full h-full object-cover" />
        </div>
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#00CEB3] border-2 border-white rounded-full" />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="handwritten text-4xl sm:text-5xl font-bold text-gray-900 mb-1"
      >
        Abrar Alzhrani
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-base sm:text-lg font-semibold text-[#FBB130] mb-5 tracking-wide"
      >
        Front-End Engineer
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-sm sm:max-w-lg text-gray-500 text-sm leading-relaxed mb-8 px-2"
      >
        Passionate Front-End Developer with 3+ years of experience building scalable,
        responsive interfaces using React.js and Angular. Currently at{" "}
        <span className="font-semibold text-gray-700">Jahez Company</span>, shipping
        products used by millions across Saudi Arabia.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex gap-3 flex-wrap justify-center"
      >
        <button
          onClick={() => scrollTo("projects")}
          className="px-7 py-3 rounded-full bg-[#00CEB3] text-black font-bold text-sm shadow-lg shadow-[#00CEB3]/30 hover:bg-[#00b89f] hover:shadow-[#00CEB3]/50 transition-all cursor-pointer"
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo("contact")}
                  className="px-7 py-3 rounded-full bg-[#00CEB3] text-black font-bold text-sm shadow-lg shadow-[#00CEB3]/30 hover:bg-[#00b89f] hover:shadow-[#00CEB3]/50 transition-all cursor-pointer"

        >
          Get in Touch
        </button>
      </motion.div>

    </section>
  );
}

export default Slider;
