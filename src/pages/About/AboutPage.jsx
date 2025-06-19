import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import resume from '../../cv/resume.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              {/* <img src={imgabout} alt="" className="sobre-mi-img" /> */}
              
              <a href={resume} target="_blank" rel="noopener noreferrer" download="resume.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn--cv'
                      defaultMessage='Download resume'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about--info-1'
                  defaultMessage="Hi, I'm Suhas S, a 4th-semester student passionate about programming and using technology to solve real-world problems. Since starting web development in 2024, I’ve built a strong foundation in client-side development and am deeply curious about system design and backend technologies.
                  I’m enthusiastic about diving deeper into new technologies and constantly expanding my skills. I enjoy collaborating with like-minded, innovative thinkers to create practical, efficient, and well-structured systems that deliver seamless user experiences. Driven by curiosity and a growth mindset, my goal is to develop solutions that simplify everyday tasks and push the boundaries of what technology can do."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about--info-2'
                    defaultMessage='I consider myself a self-taught person since I like to be constantly learning day by day, both new technologies and new development methods that help me polish and raise my level of learning.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about--info-3'
                    defaultMessage="Built a print-ordering platform used by over 2500 students, enabling seamless requests to local print shops. Designed a queue-based system with microservices, integrated Razorpay for secure payments, and automated backend-to-printer workflows. This project gave me deep insight into how real-world systems scale, communicate, and deliver smooth user experiences."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title="Java" />
                <h2 className="skill-name">JAVA</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about--skills-1'
                    defaultMessage="I've been using Java for the past year, mostly for building backend logic and getting comfortable with OOP concepts.'"
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" title="CSS3" />
                <h2 className="skill-name">C</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about--skills-2'
                    defaultMessage='Been coding in C for about a year now — it really helped me understand how things work under the hood, especially memory and pointers.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about--skills-3'
                    defaultMessage='A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title="Linux"/>
                <h2 className="skill-name">Linux</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about--skills-4'
                    defaultMessage='I’ve been using Linux for the past year — it’s my go-to dev environment and helped me get hands-on with the terminal and system-level stuff.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                <h2 className="skill-name">Docker</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about--skills-5'
                    defaultMessage='I’ve been using Docker to containerize my apps and make them super easy to run anywhere.It’s been a game-changer for testing, deploying, and managing environments.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="jQuery" className="skills-img" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" title="tailwind" />
                <h2 className="skill-name">tailwind</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about--skills-6'
                    defaultMessage='I’ve been using Tailwind to quickly build clean, responsive UIs without writing custom CSS.It makes styling feel way more intuitive and speeds up my frontend workflow.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="jQuery" />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='More than a year using this JavaScript framework, carrying out multiple personal and work projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="jQuery" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='It is the cross-platform runtime environment that I use to make my web applications scalable.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="jQuery" />
                <h2 className="skill-name">Express</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.'
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;