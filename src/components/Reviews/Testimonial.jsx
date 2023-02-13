import React from "react";
import styles from "./reviews.module.css";
import { FaUserAlt } from "react-icons/fa";

const Testimonial = ({ person, text }) => {
  return (
    <p className="h5 w-75 mx-auto text-white text-justify">
      <h3 className={styles.textReviews}><FaUserAlt/> {person}</h3>
      <br />
      {text}
    </p>
  );
};

export default Testimonial;
