import React from "react";
import styles from "./skills.module.css";
import {
  BsFillGearFill,
  BsFillBootstrapFill,
  BsWordpress,
  BsCameraVideo,
} from "react-icons/bs";
import {
  DiReact,
  DiPhp,
  DiMysql,
  DiMongodb,
  DiPhotoshop,
} from "react-icons/di";
import { MdOutlineSmartphone, MdSupportAgent } from "react-icons/md";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { SiFirebase, SiCpanel } from "react-icons/si";

const Skills = ({ lang }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,272C672,267,768,245,864,218.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <section id="skills" className="container-fluid p-0 m-0 mt-5 pt-3">
        <div className="row my-5 pt-5 ps-3 mb-5">
          <h2 className="text-uppercase ps-5 pb-5">
            <BsFillGearFill className="h4" />{" "}
            {lang === "es"
              ? "Conocimientos & Tecnologías"
              : "Skills & Technologies"}
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <h4>
                <b>Back:</b>
              </h4>
              <hr className="w-50 mb-3" />
              <ul>
                <li>
                  <IoLogoJavascript className={`h4 ${styles.textCustom1}`} />{" "}
                  JavaScript
                </li>
                <li>
                  <HiDocumentText className={`h4 ${styles.textCustom1}`} />{" "}
                  API's
                </li>
                <li>
                  <IoLogoNodejs className={`h4 ${styles.textCustom1}`} /> NodeJS
                </li>
                <li>
                  <DiPhp className={`h4 ${styles.textCustom1}`} /> PHP
                </li>
                <li>
                  <IoLogoPython className={`h4 ${styles.textCustom1}`} /> Python
                </li>
                <li>
                  <DiMysql className={`h4 ${styles.textCustom1}`} /> MySQL
                </li>
                <li>
                  <DiMongodb className={`h4 ${styles.textCustom1}`} /> Mongo DB
                </li>
                <li>
                  <SiFirebase className={`h4 ${styles.textCustom1}`} /> Fire
                  Base
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-4">
              <h4>
                <b>Front:</b>
              </h4>
              <hr className="w-50 mb-3" />
              <ul>
                <li>
                  <IoLogoHtml5 className={`h4 ${styles.textCustom1}`} /> HTML5
                </li>
                <li>
                  <IoLogoCss3 className={`h4 ${styles.textCustom1}`} /> CSS3
                </li>
                <li>
                  <IoLogoJavascript className={`h4 ${styles.textCustom1}`} />{" "}
                  JavaScript
                </li>
                <li>
                  <DiReact className={`h4 ${styles.textCustom1}`} /> React JS
                </li>
                <li>
                  <BsFillBootstrapFill className={`h4 ${styles.textCustom1}`} />{" "}
                  Bootstrap
                </li>
                <li>
                  <MdOutlineSmartphone className={`h4 ${styles.textCustom1}`} />{" "}
                  {lang == "es" ? "Diseño responsivo" : "Responsive design"}
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-4">
              <h4>
                <b>
                  {lang == "es" ? "Otros conocimientos:" : "Others skills:"}
                </b>
              </h4>
              <hr className="w-50 mb-3" />
              <ul>
                {" "}
                <li>
                  <BsWordpress className={`h4 ${styles.textCustom1}`} />{" "}
                  WordPress
                </li>
                <li>
                  <SiCpanel className={`h4 ${styles.textCustom1}`} /> C-Panel /
                  Hosting / Domains
                </li>
                <li>
                  <DiPhotoshop className={`h4 ${styles.textCustom1}`} />{" "}
                  PhotoShop
                </li>
                <li>
                  <BsCameraVideo className={`h4 ${styles.textCustom1}`} />{" "}
                  {lang == "es" ? "Edición de video" : "Video edit"}
                </li>
                <li>
                  <MdSupportAgent className={`h4 ${styles.textCustom1}`} />{" "}
                  {lang == "es" ? "Soporte técnico" : "IT Support"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
