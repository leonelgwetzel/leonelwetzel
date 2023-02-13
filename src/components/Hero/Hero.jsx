import React from "react";
import styles from "./hero.module.css";

const Hero = ({ lang }) => {
  return (
    <div className={styles.heroContainer}>
      <div className="container-fluid">
        <div className="row flex-sm-row-reverse align-items-center">
          <div
            id="heroImg"
            className="col-sm-12 col-lg-6 d-flex justify-content-center"
          >
            <img
              src="https://i.pinimg.com/originals/a0/26/1b/a0261b885cfba5a65c675c33327acf5a.png"
              width={300}
            />
          </div>
          <div className="col-sm-12 col-lg-6 text-center">
            <h1 className="text-white text-uppercase display-5">
              Leonel Wetzel
            </h1>
            <h3 className="text-white text-uppercase">- FullStack Dev -</h3>
            <hr />
            <h4 className="w-75 mx-auto text-white">
              <em>
                {lang === "es"
                  ? " Soy un desarrollador WEB Argentino y me encanta trabajar en proyectos nuevos..."
                  : "I'm a Web developer based in Argentina and passionate for new projects..."}
              </em>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
