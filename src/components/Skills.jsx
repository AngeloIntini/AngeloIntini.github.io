import { motion } from "framer-motion";
import cLogo from "../assets/c.svg";
import cppLogo from "../assets/cpp.svg";
import javaLogo from "../assets/java.svg";
import jsLogo from "../assets/javascript.svg";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindcss.svg";

const skills = [
  { name: "C", img: cLogo, level: 85 },
  { name: "C++", img: cppLogo, level: 80 },
  { name: "Java", img: javaLogo, level: 75 },
  { name: "JavaScript", img: jsLogo, level: 90 },
  { name: "HTML", img: htmlLogo, level: 95 },
  { name: "CSS", img: cssLogo, level: 90 },
  { name: "React", img: reactLogo, level: 85 },
  { name: "Tailwind CSS", img: tailwindLogo, level: 80 },
];

function Skills() {
  const backgroundImage =
    "radial-gradient(125% 125% at 50% 0%, #212529 50%, #6c757d)";

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="Skills"
      style={{ backgroundImage }}
      className="min-h-screen text-gray-300 flex items-center py-20 bg-cover bg-no-repeat"
    >
      <motion.div
        className="container mx-auto px-6 lg:px-20 flex flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Titolo */}
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-10"
          custom={0}
          variants={itemVariants}
        > 
        </motion.h2>

        {/* Griglia linguaggi */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          custom={1}
          variants={itemVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col items-center justify-center hover:shadow-white/30 transition-all"
              custom={index + 2}
              variants={itemVariants}
            >
              {/* Immagine linguaggio */}
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-3"
              />

              <p className="text-lg font-semibold text-white">{skill.name}</p>           
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;