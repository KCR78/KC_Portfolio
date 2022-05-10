import React from 'react';

const Project = () => {

    const projectList = [
        { name: 'Blood Donation Website', desc: 'Its a Full-Stack responsive Website by Using HTML 5, CSS 3, Java Script, Bootstrap 4, Python Flask Framework, My SQL, XAMPP Server.', img: 'bdlogo.png', link: 'https://github.com/KCR78/Blood-Donation' },
        { name: 'Outcasts Community', desc: 'It is a dynamic web application and its contents are controlled by the admin panel. The main website contains both static and dynamic contents. Technology: React, NextJS, NodeJS, MongoDB.', img: 'oc.png', link: 'https://outcastscommunity.com/' }
    ]

    return (
        <section className="section" id="portfolio" data-aos="fade-up">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <span className="text-color mb-0 text-uppercase letter-spacing text-sm"><i className="bi bi-dash-lg me-2"></i>works</span>
                            <h2 className="title">Project</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    {projectList.map((item, index) =>
                        <div className="proj-item col-md-6 col-lg-4" key={index}>
                            <div className="portfolio-item position-relative">
                                <div className='proj-img'>
                                    <img src={`/img/${item.img}`} alt="" className="img-fluid" />
                                </div>

                                <div className="portoflio-item-overlay">
                                    <a href={item.link} target='_blank' rel="noopener noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h4 className="mb-1 text-capitalize">{item.name}</h4>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Project;