import React from "react";
import styled from "../styles/About.module.css";
import logo from "../img/image.jfif";
const About = () => {
  return (
    <div className={styled.container}>
      <div>
        <img className={styled.img} src={logo} />
      </div>

      <div className={styled.me}>
        <h1>Hi, i'm <span>Juan Arguello</span></h1>
        <h2>I'm Full Stack Developer</h2>
      </div>
    </div>
  );
};

export default About;
