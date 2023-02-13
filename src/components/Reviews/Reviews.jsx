import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./reviews.module.css";
import Testimonial from "./Testimonial";
import { HiOutlineStar } from "react-icons/hi";

const Reviews = ({ lang }) => {
  return (
    <>
      <svg
        className={`mt-4 ${styles.divider}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,128L13.3,144C26.7,160,53,192,80,197.3C106.7,203,133,181,160,176C186.7,171,213,181,240,197.3C266.7,213,293,235,320,208C346.7,181,373,107,400,101.3C426.7,96,453,160,480,176C506.7,192,533,160,560,138.7C586.7,117,613,107,640,117.3C666.7,128,693,160,720,170.7C746.7,181,773,171,800,181.3C826.7,192,853,224,880,224C906.7,224,933,192,960,170.7C986.7,149,1013,139,1040,128C1066.7,117,1093,107,1120,122.7C1146.7,139,1173,181,1200,176C1226.7,171,1253,117,1280,133.3C1306.7,149,1333,235,1360,261.3C1386.7,288,1413,256,1427,240L1440,224L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"
        ></path>
      </svg>
      <section
        id="reviews"
        className={`container-fluid ${styles.reviewContainer}`}
      >
        <div className="row pt-5 ps-3 mb-5">
          <h2 className="text-uppercase ps-5 pb-5">
            <HiOutlineStar className="h4" />{" "}
            {lang === "es" ? "Testimonios" : "Testimonials"}
          </h2>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <Carousel fade indicators={false}>
                <Carousel.Item className={styles.item}>
                  <Testimonial
                    person="Valeria Zyl"
                    text={
                      lang == "es"
                        ? "El trabajo de Leonel ha sido maravilloso, nos entendimos a la primera . Ha captado muy bien lo que yo quería transmitir en la web, me ha dado muy buenas ideas y con muy buen gusto además. He quedado muy contenta y lo recomiendo totalmente."
                        : "Leonel`s work has been wonderful, we understood each other the first time. It has captured very well what I wanted to transmit on the web, it has given me very good ideas and with very good taste as well. I have been very satisfied and I totally recommend it."
                    }
                  />
                </Carousel.Item>
                <Carousel.Item className={styles.item}>
                  <Testimonial
                    person="Hugo - Transportes Oscar"
                    text={
                      lang == "es"
                        ? "Quedé mas que satisfecho con el trabajo realizado por Leonel, nos encantó el sitio web y además es una persona muy responsable y atenta."
                        : "I was more than satisfied with the work carried out by Leonel, we loved the website and he is also very responsible and attentive."
                    }
                  />
                </Carousel.Item>
                <Carousel.Item className={styles.item}>
                  <Testimonial
                    person="Lorena - Grupo Vilum"
                    text={
                      lang == "es"
                        ? "Desde Vilum les podemos decir que el trabajo realizado por Leonel fue maravilloso, organizó el contenido y lo volcó en un diseño profesional. Nos ayudó y guió en todo el proceso de la creación del sitio."
                        : "We can tell you that the work carried out by Leonel was wonderful, he organized the content and turned it into a professional design. He helped us and guided us through the entire process of creating the site."
                    }
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
