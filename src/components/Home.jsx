import { FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const backgroundImage =
    "radial-gradient(125% 125% at 50% 0%, #212529 50%, #6c757d)";

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="Home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage }}
    >
      <motion.div
        className="container mx-auto px-6 relative z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* NOME CENTRALE */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg"
          variants={itemVariants}
        >
          ANGELO INTINI
        </motion.h1>

        {/* SOTTOTITOLO */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300"
          variants={itemVariants}
        >
          Sviluppatore Frontend & Appassionato di UI/UX
        </motion.p>
      </motion.div>

      {/* SOCIAL IN BASSO A SINISTRA */}
      <motion.div
        className="absolute bottom-6 left-6 flex flex-col gap-4 text-gray-300"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          variants={itemVariants}
        >
          <FaInstagram size={24} />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          variants={itemVariants}
        >
          <FaGithub size={24} />
        </motion.a>
      </motion.div>

      {/* FRECCIA IN BASSO A DESTRA */}
      <motion.div
        className="absolute bottom-6 right-6 text-gray-300 hover:text-white transition"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <Link to="/about" className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}

export default Home;