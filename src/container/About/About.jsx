import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client
      .fetch(query)
      .then((data) => {
        setAbouts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Add a loading indicator
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Display an error message
  }

  return (
    <>
      <h2 className="head-text">
        Weaving Magic into <span>Web Interfaces</span>
        <br />
        with <span> Front-End Expertise</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={`${about._id}-${index}`}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p
              className="p-text"
              style={{ marginTop: 10, textAlign: "center" }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
