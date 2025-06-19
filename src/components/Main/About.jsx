import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import resume from '../../cv/resume.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='descriptionn'
                        defaultMessage='Iam Suhas a passionate developer from India'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my--description'
                        defaultMessage='Iam a web developer who loves building clean, user-friendly interfaces and working on the server side to create scalable, reliable systems. I’m always learning new technologies to improve my skills and follow best practices in everything I build.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            19
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                Cricket and Programming
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> suhasdeveloper07@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            India, Karnataka, Mysore
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={resume} target="_blank" rel="noopener noreferrer" download="suhas-resume.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn--cv'
                            defaultMessage='Download Resume'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
                        <h5>Tailwind</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
                        <h5>Nextjs</h5>
                    </div>
                    <div>
                        <img alt="Typescript" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <h5>Typescript</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="postgresql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                        <h5>PostgreSQL</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5>
                        </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" title="Redis" />
                        <h5>Redis</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="fastapi" className="icons-skils" src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.svg" title="fastapi" />
                        <h5>fastapi</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title="Linux" />
                        <h5>Linux</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" title="Notion" />
                        <h5>Notion</h5>
                    </div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://jwt.io/img/pic_logo.svg" title="JWT" />
                        <h5>JWT</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);