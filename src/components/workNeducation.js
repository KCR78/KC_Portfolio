import moment from 'moment';
import React from 'react';

const WorkNEducation = (props) => {

    const workList = [
        { designation: 'Software Engineer', orgName: 'VIS Networks Pvt. Ltd.', workPlace: 'Bhubaneswar, Odisha', desc: 'I am working in this organization as a MERN Stack developer.', durtStart: '2021-03', durtEnd: '', orgLogo: 'vis.png', orgLink: 'https://www.visnet.in/' },
        { designation: 'Front-End Developer', type: 'Internship', orgName: 'Plexoware Technology Pvt. Ltd.', workPlace: 'Puducherry, India', desc: 'In this internship I worked on a Real Estate Web Application and a dashboard project in React JS.', durtStart: '2020-01', durtEnd: '2020-06', orgLogo: 'plex.png', orgLink: 'http://www.plexoware.com/' }
    ];

    const eduList = [
        { name: 'Master in Computer Application (M.C.A)', institution: 'Pondicherry University', instPlace: 'Pondicherry', type: 'Post Graduation', durtStart: '2017', durtEnd: '2020', instLink: 'https://www.pondiuni.edu.in/', instImg: 'pu.png' },
        { name: 'B.Sc Computer Science Honours (+3)', institution: 'B.J.B Autonomous College', instPlace: 'Bhubaneswar, Odisha', type: 'Under Graduation', durtStart: '2014', durtEnd: '2017', instLink: 'http://www.bjbcollege.in/', instImg: 'bjb.png' },
        { name: 'Intermediate (+2)', institution: 'Rajdhani College', instPlace: 'Bhubaneswar, Odisha', type: 'CHSE', durtStart: '2011', durtEnd: '2013', instLink: 'https://www.rajdhanicollege.ac.in/', instImg: 'rajdhani.png' },
        { name: 'Matriculation (10TH)', institution: 'Sri Aurobindo Integral Education Centre, Jharapada', instPlace: 'Bhubaneswar, Odisha', type: 'BSE', durtStart: '', durtEnd: '2011', instLink: 'https://www.facebook.com/saiecjharpada/', instImg: 'aurobindo.png' },
    ]

    const timeDuration = (start,
        end) => {
        let months;
        months = (end.getFullYear() - start.getFullYear()) * 12;
        months -= start.getMonth();
        months += end.getMonth() + 1;

        const yrs = Math.floor(months / 12);
        const mnts = Math.floor(months % 12);
        const duration = months > 0 ? (yrs > 0 ? `${yrs} year${yrs > 1 ? 's' : ''}` : '') + ` ${mnts > 0 ? `${mnts} month${mnts > 1 ? 's' : ''}` : ``}` : '';
        return duration;
    };

    return (
        <>
            <section className="section bg-gray" id="service" data-aos="fade-up">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <span className="text-color mb-0 text-uppercase letter-spacing text-sm"><i className="bi bi-dash-lg mr-2"></i>What i do</span>
                                <h2 className="title">Work Experience</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters">
                        {workList.map((item, index) =>
                            <section className="col-lg-6 col-xl-4 d-flex mb-4" data-aos="fade-in" data-aos-delay={index * 100} key={index}>
                                <div className="card p-5 rounded-0 align-self-stretch">
                                    <div className='row d-flex'>
                                        <div className='col-3 col-md-2 col-lg-3'>
                                            <div className='org-logo'>
                                                <a href={item.orgLink} target='_blank' rel="noopener noreferrer"><img src={`/img/${item.orgLogo}`} alt={item.orgName} /></a>
                                            </div>
                                        </div>
                                        <div className='col-9 ps-3 ps-sm-0 d-flex align-items-center'>{item.orgName}</div>
                                        <h3 className="col-12 my-2 text-capitalize">{item.designation}</h3>
                                        <h4 className="col-12 m-0 text-capitalize">{item.type}</h4>
                                        <p className='col-12'>{item.desc}</p>
                                        <p className='col-12'>
                                            <span className='text-white'>
                                                {moment(item.durtStart).format("MMMM YYYY")} - {item.durtEnd === '' ? 'Present' : moment(item.durtEnd).format("MMMM YYYY")}
                                            </span>
                                            <br />
                                            Duration : {timeDuration(new Date(item.durtStart), new Date(item.durtEnd === '' ? new Date() : item.durtEnd))}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="row align-items-center my-5" data-aos="fade-up">
                        <div className="col-lg-6">
                            <h2 className="mb-5 text-lg-2 text-white-50">Let's <span className="text-white">work together</span> on your next project </h2>
                        </div>
                        <div className="col-lg-4 ml-auto text-right">
                            <a href="#contact" className="btn btn-main text-white smoth-scroll hire-btn">Contact Me</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-gray" id="service" data-aos="fade-up">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                {/* <span className="text-color mb-0 text-uppercase letter-spacing text-sm"><i className="bi bi-dash-lg mr-2"></i>What i do</span> */}
                                <h2 className="title">Education</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters">
                        {eduList.map((item, index) =>
                            <section className="col-lg-6 col-xl-4 d-flex mb-4" data-aos="fade-in" data-aos-delay={index * 100} key={index}>
                                <div className="card p-5 rounded-0 align-self-stretch">
                                    <div className='row d-flex'>
                                        <div className='col-3 col-md-2 col-lg-3'>
                                            <div className='org-logo'>
                                                <a href={item.instLink} target='_blank' rel="noopener noreferrer"><img src={`/img/${item.instImg}`} alt={item.institution} /></a>
                                            </div>
                                        </div>
                                        <div className='col-9 ps-3 ps-sm-0 d-flex align-items-center'>{item.institution}<br />{item.instPlace}</div>
                                        <h3 className="col-12 my-2 text-capitalize">{item.name}</h3>
                                        <p className='col-12'>{item.type}</p>
                                        <p className='col-12'>
                                            <span className='text-white'>
                                                {item.durtStart === '' ? 'Pass Out' : item.durtStart} - {item.durtEnd}
                                            </span>
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>

                </div>
            </section>
        </>
    );
}

export default WorkNEducation;