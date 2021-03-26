import React, { Component } from 'react';
import './work_education.css'
import plex from '../../assets/images/plex.png';
import vis from '../../assets/images/vis.png';
import ScrollAnimation from 'react-animate-on-scroll';

class Work extends Component {

    render() {
        return (
            <div>
                <h4 className='hrline mb-5'>WORK EXPERIENCE</h4>

                <div className='container mb-5'>
                    <div className="timeline">
                        <ScrollAnimation animateIn='slideInUp' duration={1} animateOnce={true}>
                            <div className="timeline-box">
                                <div className="content">
                                    <h3 className='year'>2021</h3>
                                    <div className="work-data">
                                        <h4>SOFTWARE ENGINEER TRAINEE</h4>
                                        <a href='https://www.visnet.in/' target='_blank' rel="noopener noreferrer"> <img src={vis} className='logos' alt='india' /> </a>
                                        <p className='mt-3'>
                                            {/* <span className='work-designation'>SOFTWARE ENGINEER TRAINEE</span> <br/> */}
                                            VIS Networks Pvt. Ltd. <br />
                                            Bhubaneswar, India
                                        </p>
                                        {/* <p className='mt-3 text-justify'>
                                            In this internship I got an opportunity to work on a US Client project and a company based project. Both are built in React JS.
                                        </p> */}
                                        <p>DURATION : MAR 2021 - <span className="live">WORKING</span></p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='slideInUp' duration={1} animateOnce={true}>
                            <div className="timeline-box">
                                <div className="content">
                                    <h3 className='year'>2020</h3>
                                    <div className="work-data">
                                        <h4>INTERNSHIP</h4>
                                        <a href='http://www.plexoware.com/' target='_blank' rel="noopener noreferrer"> <img src={plex} className='logos' alt='india' /> </a>
                                        <p className='mt-3'>
                                            <span className='work-designation'>FRONT-END WEB DEVELOPER</span> <br />
                                            Plexoware Technology Pvt. Ltd. <br />
                                            Puducherry, India
                                        </p>
                                        <p className='mt-3 text-justify'>
                                            In this internship I got an opportunity to work on a US Client project and a company based project. Both are built in React JS.
                                        </p>
                                        <p>DURATION : JAN 2020 - JUN 2020</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;