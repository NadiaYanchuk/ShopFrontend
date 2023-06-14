import React from "react";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <small> 2023, Practice for CEITI + Practice in Romark Code</small>
      <div className="social-links">
        <Link to="https://github.com/NadiaYanchuk" target="_blank">
          <ImGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/nadia-yanchuk/" target="_blank">
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};
