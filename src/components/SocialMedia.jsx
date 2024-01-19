import React from "react";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://twitter.com/S_Sandesh_Hegde"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitterX />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/sandesh-s-hegde/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/sandesh.s.hegde/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
