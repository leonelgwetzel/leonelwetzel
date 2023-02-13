import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import styles from "./about.module.css";
import leonelImg from "../../assets/leonel.png";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Zoom } from "react-awesome-reveal";

const AboutContainer = ({ lang }) => {
  return (
    <section id="about" className={`container-fluid p-0 ${styles.aboutSection}`}>
      <div className="row my-5 pt-5 ps-3 mb-5">
        <h2 className="text-uppercase ps-5 pb-5">
          <BsPersonSquare className="h4" />{" "}
          {lang === "es" ? "Sobre mí" : "About me"}
        </h2>
      </div>
      <div className="row text-white">
        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <Zoom>
          <img
            className="rounded-circle img-fluid"
            src={leonelImg}
            alt="leonel-img"
            width={300}
          />
          </Zoom>
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center">
          {lang === "es" && (
            <p className="p-5">
              👋 ¡Hola!, Te doy la bienvenida a mi sitio Web...
              <br />
              Como has visto, mi nombre es Leonel y soy un desarZoomador Web
              FullStack. Soy Argentino y actualmente resido en Buenos Aires. Me
              encanta aprender nuevas tecnologías y ponerlas a prueba en
              diferentes tipos de proyectos.
              Si querés conocer más de mi estaré encantado de charlar con vos 😃.
            </p>
          )}

          {lang === "en" && (
            <p className="p-5">
              👋 ¡Hey!, Welcome to my Web portfolio...
              <br />
                As you already read, my name is Leonel and I'm a FullStack Web developer based in Buenos Aires, Argentina. I love to learn and improve on new knowledges of differents tecnologies, working on third-party proyects or doing my own apps to practice 😃. <br />
                If you want to know more about me, I'll be happy to talk with you.
            </p>
          )}
          <a href="#contact" className="btn btn-custom1"><BiMessageRoundedDetail/> {lang==='es'?'Contáctame' : "Let's chat"}</a>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
