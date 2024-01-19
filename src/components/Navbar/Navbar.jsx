import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    whileInView: {
      x: [300, 0],
      transition: { duration: 0.85, ease: "easeOut" },
    },
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links" style={{ textDecoration: 'bold' }}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`} className="app__flex bold-text">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setMenuOpen(true)} />

        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="whileInView"
          >
            <HiX onClick={() => setMenuOpen(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
