import React from "react";
import { FaLaptop } from "react-icons/fa";
import Project from "./Project";
import ValZyl from "../../assets/projectsImgs/ValZyl.png";
import Vilum from "../../assets/projectsImgs/Vilum.png";
import TransportesOscar from "../../assets/projectsImgs/TransportesOscar.png";
import Follsnet from "../../assets/projectsImgs/Follsnet.png";
import ROL from "../../assets/projectsImgs/ROL.png";
import WeatherApp from "../../assets/projectsImgs/WeatherApp.png";
import TodoApp from "../../assets/projectsImgs/TodoApp.png";
import FoxStore from "../../assets/projectsImgs/FoxStore.png";




const Projects = ({ lang }) => {
  return (
    <section id="projects" className="container-fluid p-0 pt-2">
      <div className="row mt-4 pt-5 ps-3 mb-5">
        <h2 className="text-uppercase ps-5 pb-5">
          <FaLaptop className="h4" /> {lang === "es" ? "Proyectos" : "Projects"}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 ps-2 pt-3">
            <Project
              imgSrc={ValZyl}
              link="https://valeriazyl.com/"
              title="ValZyl"
              type={lang == "es" ? "Sitio Web" : "Web Site"}
              desc={
                lang == "es"
                  ? "Diseño y desarrollo de sitio web para Valeria Zyl, referente en movimientos de centros de energía."
                  : "Web design and develop for Valeria Zyl, a referent of energy centers movements."
              }
              lang={lang}
            />
          </div>
          <div className="col-sm-12 col-md-6 ps-2 pt-3">
            <Project
              imgSrc={Vilum}
              link="https://www.vilum.com.ar/"
              title="Vilum"
              type={lang == "es" ? "Sitio Web" : "Web Site"}
              desc={
                lang == "es"
                  ? "Sitio web desarrollado para Grupo Vilum, empresa fabricante de vidrios."
                  : "Web site maded for Grupo Vilum, a glass manufacturer company."
              }
              lang={lang}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 ps-2 pt-3">
            <Project
              imgSrc={TransportesOscar}
              link="https://www.transportesoscar.com/"
              title="Transportes Oscar"
              type={lang == "es" ? "Sitio Web" : "Web Site"}
              desc={
                lang == "es"
                  ? "Sitio web desarrollado para Transportes Oscar, empresa de transportes."
                  : "Web site maded for Transportes Oscar, a courier company."
              }
              lang={lang}
            />
          </div>
          <div className="col-sm-12 col-md-6 ps-2 pt-3">
            <Project
              imgSrc={Follsnet}
              link="http://follsnet.com/"
              title="Follsnet"
              type={lang == "es" ? "Sitio Web" : "Web Site"}
              desc={
                lang == "es"
                  ? "Sitio web dinámico con panel de administración desarrollado para Follsnet, marca proveedora de insumos de red."
                  : "Dynamyc web site with a control panel maded for Follsnet, an IT networks brand."
              }
              lang={lang}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 ps-2 pt-3">
            <Project
              imgSrc={ROL}
              link="https://rolpas.com.ar/"
              title="ROL"
              type={lang == "es" ? "Sitio Web" : "Web Site"}
              desc={
                lang == "es"
                  ? "Sitio web desarrollado para ROL, compañía aseguradora."
                  : "Web site maded for ROL, an Insaurance company."
              }
              lang={lang}
            />
          </div>
          <div className="col-sm-12 col-md-6 ps-2 pt-3">
            <Project
              imgSrc={WeatherApp}
              link="https://leonelgwetzel.github.io/react-hooks-localStorage/"
              title={lang=='es'?'Pronostico meteorológico':'Weather App'}
              type={lang == "es" ? "Aplicación" : "Application"}
              desc={
                lang == "es"
                  ? "Aplicación meteorológica en tiempo real con predicción del clima en las próximas horas."
                  : "Weather real time application and next hours prediction."
              }
              lang={lang}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 ps-2 pt-3">
            <Project
              imgSrc={TodoApp}
              link="https://leonelgwetzel.github.io/react-hooks-localStorage/"
              title={lang=='es'?'Tareas':'To do list app'}
              type={lang == "es" ? "Aplicación" : "App"}
              desc={
                lang == "es"
                  ? "Aplicativo para gestionar tareas."
                  : "Tasks managment application."
              }
              lang={lang}
            />
          </div>
          <div className="col-sm-12 col-md-6 ps-2 pt-3">
            <Project
              imgSrc={FoxStore}
              link="https://reactcoderhousefoxstore.netlify.app/"
              title='Fox Store'
              type={lang == "es" ? "Sitio Web" : "Web Site"}
              desc={
                lang == "es"
                  ? "Plataforma simuladora de E-commerce desarrollada con React JS."
                  : "E-commerce simulator maded with React JS."
              }
              lang={lang}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
