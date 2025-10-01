import { motion } from 'framer-motion';
import GlassButton from "./GlassButton";
import profilo from '../assets/profilo.png';
import { Link } from 'lucide-react';

function About() {
  const backgroundImage = "radial-gradient(125% 125% at 50% 0%, #212529 50%, #6c757d)";

  // Variants generali per animazioni scroll
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="About"
      style={{ backgroundImage }}
      className="min-h-screen text-gray-300 flex items-center py-20 bg-cover bg-no-repeat"
    >
      <motion.div
        className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >

        {/* FOTO */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center"
          custom={0}
          variants={itemVariants}
        >
          <img
            src={profilo}
            alt="Angelo Intini"
          />
        </motion.div>

        {/* TESTO */}
        <motion.div
          className="w-full lg:w-2/3 flex flex-col gap-6"
          custom={1}
          variants={itemVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            custom={2}
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            custom={3}
            variants={itemVariants}
          >
            Hi! I'm Angelo Intini, a developer passionate about technology, 
            design, and innovative solutions. With experience in front-end and
            back-end development, I enjoy creating elegant and functional interfaces, 
            with attention to detail and user experience.
          </motion.p>

          <motion.p
            className="text-gray-300 leading-relaxed text-lg"
            custom={4}
            variants={itemVariants}
          >
            I love continuously learning and applying new technologies to my projects, 
            always aiming to create high-performance, secure, and visually appealing products. 
            Collaboration, creativity, and precision are the values ​​that guide my work.
          </motion.p>

          {/* CTA */}
            <GlassButton>
              <a href="#/contacts" className='flex justify-center items-center gap-2 w-full'>
              <span className='flex justify-center items-center gap-2 w-full'>
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
              </span>
              </a>
            </GlassButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
