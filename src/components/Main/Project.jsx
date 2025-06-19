import React from 'react';
import "../../pages/Project/ProjectPage.css";
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./xerofy.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Xerofy</h3>
                            <p>
                                web application for smart print orders
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> tailwind
                                <span> -</span> shadcn
                                <span> -</span> TypeScript
                                <span> -</span> CUPS 
                                <span> -</span> NodeJS
                                <span> -</span> MongoDB
                                <span> -</span> Redis 
                                <span> -</span> microservices
                            </p>
                            <a href="https://www.xerofy.net/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/suhas-developer07/printify-backend" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./backend.jpeg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Brainly backend</h3>
                            <p>
                                sharing our thoughts to our members
                            </p>
                            <p className="tecnologias">
                                
                                <span> -</span> Nodejs
                                <span> -</span> typescript
                                <span> -</span> mongodb
                                <span> -</span> jsonwebtoken
                            </p>
                            <a href="https://github.com/suhas-developer07/Brainly" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./librarymanagement.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Library Management </h3>
                            <p>
                                Creates a library management system server
                            </p>
                            <p className="tecnologias">
                                NodeJS 
                                <span> -</span> express
                                <span> -</span> mongodb
                                <span> -</span> jsonwebtoken
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://github.com/suhas-developer07/Library-Management-backend-" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./newsquery.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>News query</h3>
                            <p>
                                random project
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://github.com/suhas-developer07/Javscript-Projects/tree/main/news%20querry" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./todolist.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>To-do List</h3>
                            <p>
                               simple to-do list 
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://github.com/suhas-developer07/Javscript-Projects/tree/main/to%20do%20list" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./WEBRTC.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>WEBRTC</h3>
                            <p>
                               Establish peer-to-peer connection between two browsers
                            </p>
                            <p className="tecnologias">
                               React
                                <span> -</span> CSS
                                <span> -</span> TypeScript
                                <span> -</span> WebRTC
                                <span> -</span> Socket.io
                                <span> -</span> NodeJS
                            </p>
                            <a href="https://github.com/suhas-developer07/WEBRTC" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            {/* <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div> */}
        </section>

    )
};
export default React.memo(Project);