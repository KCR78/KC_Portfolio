import React from 'react';
import './work_education.css'
import plex from '../../assets/images/plex.png';
import vis from '../../assets/images/vis.png';
import ScrollAnimation from 'react-animate-on-scroll';

const Work = () => {

    const timeDuration = (start, end) => {
        let months;
        months = (end.getFullYear() - start.getFullYear()) * 12;
        months -= start.getMonth();
        months += end.getMonth();

        const yrs = Math.floor(months / 12);
        const mnts = Math.floor(months % 12);
        const duration = months > 0 ? (yrs > 0 ? `${yrs} year${yrs > 1 ? 's' : ''}` : '') + ` ${mnts > 0 ? `${mnts} month${mnts > 1 ? 's' : ''}` : ``}` : '';
        return duration;
    };

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
                                    <h4>SOFTWARE ENGINEER</h4>
                                    <a href='https://www.visnet.in/' target='_blank' rel="noopener noreferrer"> <img src={vis} className='logos' alt='VIS Networks Pvt. Ltd.' title='VIS Networks Pvt. Ltd.' /> </a>
                                    <p className='mt-3'>
                                        {/* <span className='work-designation'>SOFTWARE ENGINEER</span> <br/> */}
                                        VIS Networks Pvt. Ltd. <br />
                                        Bhubaneswar, India
                                    </p>
                                    <p className='mt-3 text-justify'>
                                        I have worked mostly in REST API integration, developing dynamic web applications and fixing multimedia plugins too.
                                    </p>
                                    <p>DURATION : MAR 2021 - <span className="live">WORKING</span>
                                        <span className='ml-3 time-duration'>{timeDuration(new Date('2021-03'), new Date())}</span>
                                    </p>
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
                                    <a href='http://www.plexoware.com/' target='_blank' rel="noopener noreferrer"> <img src={plex} className='logos' alt='Plexoware Technology Pvt. Ltd.' title='Plexoware Technology Pvt. Ltd.' /> </a>
                                    <p className='mt-3'>
                                        <span className='work-designation'>FRONT-END WEB DEVELOPER</span> <br />
                                        Plexoware Technology Pvt. Ltd. <br />
                                        Puducherry, India
                                    </p>
                                    <p className='mt-3 text-justify'>
                                        In this internship I worked on a Real Estate Web Application and a dashboard project in React JS.
                                    </p>
                                    <p>DURATION : JAN 2020 - JUN 2020
                                        <span className='ml-3 time-duration'>{timeDuration(new Date('2020-01'), new Date('2020-07'))}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}

export default Work;