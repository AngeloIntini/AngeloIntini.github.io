import { FaEnvelope, FaPhone, FaInstagram, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";

function Contacts() {
  const backgroundImage =
    "radial-gradient(125% 125% at 50% 0%, #212529 50%, #6c757d)";

  const [email, setEmail] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const emailDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "libero.it"];

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value.includes("@")) {
      const [_, partialDomain] = value.split("@");
      setSuggestions(
        emailDomains.filter((domain) => domain.startsWith(partialDomain))
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (domain) => {
    const [localPart] = email.split("@");
    setEmail(`${localPart}@${domain}`);
    setSuggestions([]);
  };

  // Variants per animazioni scroll
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
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m32ez2x",
        "template_gk9j8rh",
        e.target,
        "h2z-VmUssDWuaeR9z" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="Contacts"
      className="min-h-screen flex items-center justify-center text-white py-20"
      style={{ backgroundImage }}
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Informazioni di contatto */}
        <motion.div
          className="flex flex-col gap-6"
          custom={0}
          variants={itemVariants}
        >
          <motion.h2
            className="text-4xl font-bold leading-tight"
            custom={1}
            variants={itemVariants}
          >
            Let’s talk on something{" "}
            <span className="text-[#6c757d]">great</span> together
          </motion.h2>

          <motion.div
            className="flex items-center gap-4"
            custom={2}
            variants={itemVariants}
          >
            <FaEnvelope size={20} />
            <span>intiniangelo08@gmail.com</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            custom={3}
            variants={itemVariants}
          >
            <FaPhone size={20} />
            <span>+39 379 185 3223</span>
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex gap-4 mt-4"
            custom={4}
            variants={itemVariants}
          >
            <a href="#" className="hover:text-[#6c757d] transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-[#6c757d] transition">
              <FaGithub size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Form di contatto */}
        <motion.div
          className="bg-white text-gray-800 rounded-lg shadow-lg p-6 md:p-12"
          custom={5}
          variants={itemVariants}
        >
          <form className="flex flex-col gap-6" onSubmit={sendEmail}>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="John Smith"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6c757d]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="email@gmail.com"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6c757d]"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {suggestions.length > 0 && (
                <ul className="bg-white border rounded-lg mt-2">
                  {suggestions.map((domain, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(domain)} // Gestisci il clic sui suggerimenti
                    >
                      {email.split("@")[0]}@{domain}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="4"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6c757d]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6c757d] text-white py-2 rounded-lg hover:bg-[#5a6268] transition"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contacts;