import React from "react";
import styled from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className={styled.container}>

        <div className={styled.photo}>
        <div>
        <img className={styled.img} src='./static/img/imgprofile.jpg' />
      </div>

      <div className={styled.me}>
      <div className={styled.meText}>

        <h1>Hi, i'm <span>Juan Arguello</span></h1>
        <h2>Desarrollador Full Stack</h2></div>

        <div className={styled.iconContainer}>

         <div>
            <a target='_blank' href="https://www.linkedin.com/in/juanarguello02/" className={` ${styled.singleIcon}  ${styled.linkedin}`}>
          <FontAwesomeIcon icon= {faLinkedin}  />
          <p>@JuanArguello02</p>
          </a>
         </div>

         <div >
         <a target='_blank' href='https://github.com/Nachito02' className={` ${styled.singleIcon}  ${styled.git}`}>

          <FontAwesomeIcon icon= {faGithub}  />
          <p>@Nachito02</p>
          </a>

         </div>

        </div>
      </div>
        </div>

          <div className={styled.text}>
          Hola, mi nombre es Juan Arguello y soy un desarrollador web con experiencia en el desarrollo de sitios y aplicaciones web. Actualmente estoy estudiando en el bootcamp de Henry y me encanta aprender nuevas tecnologías y técnicas de desarrollo. Me gustaría ser contratado por una empresa en la que pueda aplicar mis habilidades y conocimientos y contribuir al crecimiento de la empresa. Estoy seguro de que puedo aportar valor a cualquier proyecto en el que me involucre y estoy dispuesto a trabajar duro para alcanzar mis metas profesionales. Si estás buscando un desarrollador web dedicado y apasionado, no dudes en ponerte en contacto conmigo.
          </div>
    </div>
  );
};

export default About;
