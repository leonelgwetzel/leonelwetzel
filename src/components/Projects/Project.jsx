import React from "react";
import styles from "./projects.module.css";
import { Slide } from "react-awesome-reveal";

const Project = ({ imgSrc, link, title, type, desc, lang }) => {
  return (
    <Slide>
          <div className={`d-flex flex-column pb-3  ${styles.projectCard}`}>
      <img className="img-fluid w-100 h-100 m-0 pt-0" src={imgSrc} alt="" />
      <h3 className={`text-center text-uppercase mt-4 ${styles.title}`}>
        {title}
      </h3>
      <p className="h6 badge bg-dark mx-auto w-auto my-2">{type}</p>
      <hr className="w-75 mx-auto" />
      <p className={`ps-3 my-4 ${styles.desc}`}>{desc}</p>
      <a href={link} target="_blank" className="btn btn-outline-dark w-75 mx-auto text-uppercase">{lang=='es' ? 'Visitar' : 'View More'}</a>

    </div>
    </Slide>
  );
};

export default Project;
