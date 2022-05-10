import React from 'react';

const About = () => {
    return (
        <>
            <section className="section" id="about" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="row">
                                <div className="col-lg-2">
                                    <h2><i className="bi bi-dash-lg me-2"></i>Myself</h2>
                                </div>
                                <div className="col-lg-10 about-contents">
                                    <p className="text-white-50 text-md">Hello! I am a <span className='text-white'>MERN Stack Developer.</span> I'm looking forward to a competitive environment to develop my skills and learn
                                        many more new features about this field to get new opportunities in an organization
                                        to grow my career.</p>
                                    <p className="text-white-50 text-md">Seeking a suitable and rewarding career with an esteemed Organization would
                                        offer good advancement potential, challenges, and opportunities to zoom my career
                                        growth, contributing to the organization's success. I am hardworking and very
                                        enthusiastic in nature. I like to experience new things and always come up with
                                        innovative ideas.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="about-skill" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5 mt-lg-0 mt-md-0 col-md-6">
                            <div className="row">
                                <div className="col-lg-5">
                                    <h2><i className="bi bi-dash-lg me-2"></i>Personalities</h2>
                                </div>
                                <div className="col-lg-7 pl-5">
                                    <ul className="list-unstyled lh-45">
                                        <li> <i className="bi bi-chevron-double-right me-3 text-color"></i><span className="text-white-50">Hard working ability in any conditions and situations</span></li>
                                        <li><i className="bi bi-chevron-double-right me-3 text-color"></i><span className="text-white-50">Positive in thoughts and actions</span></li>
                                        <li><i className="bi bi-chevron-double-right me-3 text-color"></i><span className="text-white-50">Discipline, Responsible, and Competent</span></li>
                                        <li><i className="bi bi-chevron-double-right me-3 text-color"></i><span className="text-white-50">Leadership Skills</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-5 mt-lg-0 mt-md-0 col-md-6">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h2><i className="bi bi-dash-lg me-2"></i>Hobbies</h2>
                                </div>
                                <div className="col-lg-7 pl-8">
                                    <ul className="list-unstyled lh-45">
                                        <li> <i className="bi bi-chevron-double-right me-3 text-color"></i><span className="text-white-50">Gamming</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;