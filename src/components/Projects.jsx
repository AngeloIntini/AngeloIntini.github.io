import { motion } from "framer-motion";
import Progetto1 from "../assets/Progetto1.png";

const projects = [
  {
    name: "Floral Shop Website",
    description: (<>A website for a small floral business. <br /> Technologies used: HTML, CSS, JavaScript.</>),
    link: "https://emozioninfiore.altervista.org",
  },
];

const backgroundImage =
    "radial-gradient(125% 125% at 50% 0%, #212529 50%, #6c757d)";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="Projects"
      className="min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center py-20 px-6 lg:px-20"
      style={{ backgroundImage }}
    >
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        <motion.p className="text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
          A selection of my most recent projects.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.link}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            variants={itemVariants}
          >
            {/* Immagine */}
            <img
              src={Progetto1}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
