import React, { Component } from 'react';
import './main.css'
import About from './About/about';
import Work from './Work_Education/work';
import Project from './Project/project';
import Contact from './Contact/contact';
import Education from './Work_Education/education';
import ScrollAnimation from 'react-animate-on-scroll';
import Clock from 'react-live-clock';

class Main extends Component {

    render() {
        return (
            <div>
                <div className='jumbotron' id='jumbotron'>

                    <label className='dnt'>
                        <Clock format={'ddd | Do MMM | YYYY | h:mm:ss A'} />
                    </label>

                    <div className='name-plate'>
                        <label className='p-name'>
                            <ScrollAnimation animateIn='backInDown' duration={2} animateOnce={true}>
                                <span className='text-trans'>K</span>
                                <span className='text-trans'>R</span>
                                <span className='text-trans'>U</span>
                                <span className='text-trans'>S</span>
                                <span className='text-trans'>H</span>
                                <span className='text-trans'>N</span>
                                <span className='text-trans'>A</span>
                                <span className='text-trans'> </span>
                                <span className='text-trans'>C</span>
                                <span className='text-trans'>H</span>
                                <span className='text-trans'>A</span>
                                <span className='text-trans'>N</span>
                                <span className='text-trans'>D</span>
                                <span className='text-trans'>R</span>
                                <span className='text-trans'>A</span>
                                <span className='text-trans'> </span>
                                <span className='text-trans'>R</span>
                                <span className='text-trans'>O</span>
                                <span className='text-trans'>U</span>
                                <span className='text-trans'>T</span>
                            </ScrollAnimation>
                        </label><br />

                        <ScrollAnimation animateIn='backInLeft' duration={2} delay={100} animateOnce={true}>
                            <label className='p-designation'>Web Developer</label><br />
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='backInUp' duration={2} delay={200} animateOnce={true}>
                            <label className='p-location'><i className='fas fa-map-marker-alt'></i> Bhubaneswar, Odisha</label>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation animateIn='fadeIn' duration={2} delay={4000} animateOnce={true}>
                        <div className="down-arrow slideUp">
                            <a className="btn btn-lg p-0 blink" href="#stickybar"><i className="fad fa-angle-double-up fa-lg"></i></a>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className='stickybar' id='stickybar'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <a className="nav-item nav-link" href="#about-details">About Me</a>
                                <a className="nav-item nav-link" href="#work-details">Work Experience</a>
                                <a className="nav-item nav-link" href="#education-details">Education</a>
                                <a className="nav-item nav-link" href="#project-details">Project</a>
                                <a className="nav-item nav-link" href="#contact-details">Contact Me</a>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* <div className='navigation container mt-3'>
                    <div className='row justify-content-around'>

                        <div className='nav-box col-4'>
                            <ScrollAnimation animateIn='bounceIn' duration={1.5} animateOnce={true}>
                                <a href='#about-details'><p className='box-desc about'>About Me</p></a>
                            </ScrollAnimation>
                        </div>

                        <div className='nav-box col-4'>
                            <ScrollAnimation animateIn='bounceIn' duration={1.5} animateOnce={true}>
                                <a href='#work-details'><p className='box-desc work'>Work Experience</p></a>
                            </ScrollAnimation>
                        </div>

                        <div className='nav-box col-4'>
                            <ScrollAnimation animateIn='bounceIn' duration={1.5} animateOnce={true}>
                                <a href='#education-details'><p className='box-desc education'>Education</p></a>
                            </ScrollAnimation>
                        </div>

                        <div className='nav-box col-4'>
                            <ScrollAnimation animateIn='bounceIn' duration={1.5} animateOnce={true}>
                                <a href='#project-details'><p className='box-desc project'>Project</p></a>
                            </ScrollAnimation>
                        </div>

                        <div className='nav-box col-4'>
                            <ScrollAnimation animateIn='bounceIn' duration={1.5} animateOnce={true}>
                                <a href='#contact-details'><p className='box-desc contact'>Contact Me</p></a>
                            </ScrollAnimation>
                        </div>

                    </div>
                </div> */}

                <div className='about-details navdown' id='about-details'>
                    <About />
                </div>

                <div className='work-details navdown' id='work-details'>
                    <Work />
                </div>

                <div className='education-details navdown' id='education-details'>
                    <Education />
                </div>

                <div className='project-details navdown' id='project-details'>
                    <Project />
                </div>

                <div className='contact-details navdown' id='contact-details'>
                    <Contact />
                </div>

                <div className="footer">
                    <div className="text-center absolute-center">
                        <a className="mr-4 btn btn-social-icon btn-facebook" href="https://www.facebook.com/krushnachandra.rout.9" target='_blank' rel="noopener noreferrer">
                            <i className="social-icons fab fa-facebook-f"></i>
                        </a>
                        <a className="mr-4 btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/krushna-chandra-rout-5b119b162/" target='_blank' rel="noopener noreferrer">
                            <i className="social-icons fab fa-linkedin-in"></i>
                        </a>
                        <a className="mr-4 btn btn-social-icon btn-twitter" href="https://twitter.com/krishnarout17" target='_blank' rel="noopener noreferrer">
                            <i className="social-icons fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-social-icon" href="https://github.com/KCR78">
                            <i className="social-icons fab fa-github"></i>
                        </a>

                        <p className="copyright">Copyright &#9400; 2022 &nbsp;|&nbsp; <a href='#jumbotron' className='kcp'> KC - Portfolio </a> &nbsp;|&nbsp; All Rights Reserved.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;