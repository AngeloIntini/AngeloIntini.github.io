import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importa Link da react-router-dom

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800 bg-opacity-30 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <div className="text-2xl font-bold tracking-widest text-white">
          ANGELO INTINI
        </div>

        {/* LINKS - visibili solo su desktop */}
        <ul className="hidden md:flex flex-row gap-6 text-gray-300">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{
                y: -3, 
                color: "#ffffff", // Bianco molto acceso
                textShadow: "0 0 8px #ffffff", // Effetto glow/neon
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={item.path} className="transition duration-300">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* HAMBURGER ICON - visibile solo su mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-dark border-t border-gray-800 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <ul className="flex flex-col gap-4 px-6 py-4 text-gray-300">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    to={item.path}
                    className="transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_#ffffff]"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;