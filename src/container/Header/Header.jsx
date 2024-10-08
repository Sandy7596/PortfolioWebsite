import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  const animationVariants = {
    whileInView: {
      x: [-100, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
      },
    },
    fadeIn: {
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
      },
    },
    scale: {
      whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  };

  const handleDownloadCV = () => {
    const cvUrl =
      "https://flowcv.com/resume/sun2kvgshk";
      window.open(cvUrl, '_blank');
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        variants={animationVariants.whileInView}
        initial="hidden"
        animate="whileInView"
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">SANDESH HEGDE</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Front-end Development</p>
            <p className="p-text">Project Management</p>
            <p className="p-text">UI/UX</p>
          </div>

          {/* Download CV Button */}
          <button onClick={handleDownloadCV} className="button app__flex">
            Download CV
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={animationVariants.fadeIn}
        initial="hidden"
        animate="fadeIn"
        className="app__header-img"
      >
        <img src={images.profile} alt="profile.bg" loading="lazy" />
        <motion.img
          variants={{ whileInView: animationVariants.scale.whileInView }}
          initial="hidden"
          animate="whileInView"
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        variants={animationVariants.scale.whileInView}
        initial="hidden"
        animate="whileInView"
        className="app__header-circles"
      >
        {[images.figma, images.react, images.redux].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
