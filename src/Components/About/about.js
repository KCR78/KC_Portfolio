import React, { Component } from 'react';
import user from '../../assets/images/intro2.jpg';
import ind from '../../assets/images/ind.jpg';
import uk from '../../assets/images/uk.jpg';
import lang from '../../assets/images/lang.png';
import c from '../../assets/images/c.png';
import cpp from '../../assets/images/cpp.png';
import web from '../../assets/images/web.png';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import bt from '../../assets/images/bt.png';
import react from '../../assets/images/react.png';
import vue from '../../assets/images/vue.png';
import addon from '../../assets/images/addon.png';
import msvs from '../../assets/images/msvs.png';
import flask from '../../assets/images/flask.png';
import sql from '../../assets/images/sql.png';
import './about.css'
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {

    render() {
        return (
            <div>
                <h4 className='hrline mb-5'>ABOUT ME</h4>

                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-12 mb-2'>
                            <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                <h3 className='headings'>KRUSHNA CHANDRA ROUT</h3>
                            </ScrollAnimation>
                        </div>
                        <div className='col-sm-8 col-12'>
                            <ScrollAnimation animateIn='fadeIn' duration={2} animateOnce={true}>
                                <p className='summery text-justify mb-5 cursive'>
                                    Seeking a suitable and rewarding career, with an esteemed Organization, this would over good advancement potential, challenges and opportunities to zoom my career growth, contributing to the success of organization. I am hardworking and very enthusiastic in nature. I like to experience new things and always come up with innovative ideas. As a Computer Science student I am interested in web developing and a little bit fluent in React JS Framework and want to become a Full-Stack Web Developer. I am looking forward to a competitive environment to develop my skills to learn much more new features about this field to get new opportunities in an organization for the growth of my career.
                                </p>
                            </ScrollAnimation>
                        </div>
                        <div className='col-sm-4 col-12 mb-2'>
                            <ScrollAnimation animateIn='headShake' duration={3} animateOnce={true}>
                                <img src={user} alt='user' className='intropic' />
                            </ScrollAnimation>
                        </div>
                        <div className='col-sm-8 col-12'>
                            <ul className='language list-inline'>
                                <li className="list-inline-item mr-5">
                                    <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                        <img src={uk} width='15' height='10' className='mb-2 mr-1' alt='uk' /> ENGLISH
                                    </ScrollAnimation>
                                </li>

                                <li className="list-inline-item mr-5">
                                    <ScrollAnimation animateIn='fadeIn' duration={1} delay={50} animateOnce={true}>
                                        <img src={ind} width='15' height='10' className='mb-2 mr-1' alt='india' /> HINDI
                                    </ScrollAnimation>
                                </li>

                                <li className="list-inline-item">
                                    <ScrollAnimation animateIn='fadeIn' duration={1} delay={100} animateOnce={true}>
                                        <img src={ind} width='15' height='10' className='mb-2 mr-1' alt='india' /> ODIA
                                    </ScrollAnimation>
                                </li>
                            </ul>
                        </div>

                        <div className='skills row col-12 mt-3'>
                            <div className='technical col-12 mb-2'>
                                <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                    <h4 className='headings'>TECHNICAL SKILLS</h4>
                                </ScrollAnimation>
                                <div>
                                    <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                        <p className='techs'><img src={lang} width='20' className='mb-1 mr-1' alt='' /> Language</p>
                                    </ScrollAnimation>
                                    <ul className='mb-5'>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} animateOnce={true}><img src={c} className='skillicons' alt='C' /></ScrollAnimation></li>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} delay={100} animateOnce={true}><img src={cpp} className='skillicons' alt='C++' /></ScrollAnimation></li>
                                    </ul>
                                </div>

                                <div>
                                    <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                        <p className='techs'><img src={web} width='20' className='mb-1 mr-1' alt='' /> Web Development (Specialization)</p>
                                    </ScrollAnimation>
                                    <ul className='mb-5'>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} animateOnce={true}><img src={html} className='skillicons' alt='HTML' /></ScrollAnimation></li>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} delay={100} animateOnce={true}><img src={css} className='skillicons' alt='CSS' /></ScrollAnimation></li>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} delay={200} animateOnce={true}><img src={js} className='skillicons' alt='JAVA SCRIPT' /></ScrollAnimation></li>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} delay={300} animateOnce={true}><img src={bt} className='skillicons' alt='BOOTSTRAP' /></ScrollAnimation></li>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} delay={400} animateOnce={true}><img src={react} className='skillicons' alt='RAECT JS' /></ScrollAnimation></li>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} delay={500} animateOnce={true}><img src={vue} className='skillicons' alt='VUE JS' /></ScrollAnimation></li>
                                    </ul>
                                </div>

                                <div>
                                    <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                        <p className='techs'><img src={addon} width='20' className='mb-1 mr-1' alt='' /> Add_On</p>
                                    </ScrollAnimation>
                                    <ul className='mb-5'>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} animateOnce={true}><img src={msvs} className='skillicons mr-4' alt='MICROSOFT VISUAL STUDIO' /></ScrollAnimation></li>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} delay={100} animateOnce={true}><img src={flask} className='skillicons mr-4' alt='FLASK' /></ScrollAnimation></li>
                                        <li className="list-inline-item"><ScrollAnimation animateIn='zoomIn' duration={1} delay={200} animateOnce={true}><img src={sql} className='skillicons mr-4' alt='SQL' /></ScrollAnimation></li>
                                    </ul>
                                </div>
                                <hr />
                            </div>

                            <div className='soft col-12 row'>
                                <div className='col-12'>
                                    <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                        <h4 className='headings'>SOFT SKILLS</h4>
                                    </ScrollAnimation>
                                </div>

                                <div className='col-sm-6 col-12'>
                                    <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                        <p className='softs'><i className='fas fa-user text-info'></i> Personalities</p>
                                    </ScrollAnimation>
                                    <ul className='ml-4 cursive'>
                                        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}><li className="list-unstyled"><i className="fad fa-angle-double-right arrow"></i> Hard working ability in any condition, any situation and fast learner.</li></ScrollAnimation>
                                        <ScrollAnimation animateIn='fadeIn' duration={1} delay={100} animateOnce={true}><li className="list-unstyled"><i className="fad fa-angle-double-right arrow"></i> Disciplined and Responsible Competent.</li></ScrollAnimation>
                                        <ScrollAnimation animateIn='fadeIn' duration={1} delay={100} animateOnce={true}><li className="list-unstyled"><i className="fad fa-angle-double-right arrow"></i> Maintain punctuality in every step of my life</li></ScrollAnimation>
                                        <ScrollAnimation animateIn='fadeIn' duration={1} delay={200} animateOnce={true}><li className="list-unstyled"><i className="fad fa-angle-double-right arrow"></i> Positive in thoughts and action.</li></ScrollAnimation>
                                        <ScrollAnimation animateIn='fadeIn' duration={1} delay={300} animateOnce={true}><li className="list-unstyled"><i className="fad fa-angle-double-right arrow"></i> Leadership Skills.</li></ScrollAnimation>
                                    </ul>
                                </div>

                                <div className='col-sm-6 col-12'>
                                    <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                        <p className='softs'><i className='fas fa-heart text-danger'></i> Hobbies</p>
                                    </ScrollAnimation>
                                    <ul className='ml-4 cursive'>
                                        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}><li className="list-unstyled"><i className="fad fa-angle-double-right arrow"></i> Gaming</li></ScrollAnimation>
                                        <ScrollAnimation animateIn='fadeIn' duration={1} delay={100} animateOnce={true}><li className="list-unstyled"><i className="fad fa-angle-double-right arrow"></i> Social Networking</li></ScrollAnimation>
                                        <ScrollAnimation animateIn='fadeIn' duration={1} delay={200} animateOnce={true}><li className="list-unstyled"><i className="fad fa-angle-double-right arrow"></i> Surfing the Internet</li></ScrollAnimation>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;