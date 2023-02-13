import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import "./app.css";
import AboutContainer from "./components/About/AboutContainer";
import Skills from "./components/Skills/Skills";
import { Fade } from "react-awesome-reveal";
import Projects from "./components/Projects/Projects";
import Reviews from "./components/Reviews/Reviews";
import {
  AiFillMail,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { DotSpinner } from "@uiball/loaders";

function App() {
  const [lang, setLang] = useState("es");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div class="container-fluid d-flex align-items-center justify-content-center loader">
        <div>
        <DotSpinner 
       size={40}
       speed={1} 
       color="white" 
      />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <header>
          <NavBar lang={lang} setLang={setLang} />
          <Hero lang={lang} />
        </header>
        <main>
          <Fade>
            <AboutContainer lang={lang} />
          </Fade>
          <Skills lang={lang} />
          <hr className="text-center w-75 mx-auto" />
          <Projects lang={lang} />
          <Reviews lang={lang} />
        </main>
        <footer className="container-fluid p-0 m-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#000000"
              fill-opacity="1"
              d="M0,256L120,261.3C240,267,480,277,720,266.7C960,256,1200,224,1320,208L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">
                {lang == "es" ? "¿Conversamos?" : "Let's Chat"}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5 d-flex justify-content-center">
              <a href="mailto:leonelgwetzel@outlook.com" className="btn">
                <AiFillMail className="h2 ficon" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/leonel-wetzel-13151218a/"
                className="btn"
              >
                <AiFillLinkedin className="h2 ficon" />
              </a>
              <a
                target="_blank"
                href="https://github.com/leonelgwetzel"
                className="btn"
              >
                <AiOutlineGithub className="h2 ficon" />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=541150607445"
                className="btn"
              >
                <AiOutlineWhatsApp className="h2 ficon" />
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
