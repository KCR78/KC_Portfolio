import React from 'react';

const Project = () => {

    const projectList = [
        { name: 'Blood Donation Website', desc: 'Created the website using HTML, CSS, JavaScript, Python Flask, and MySQL. The site allows real-time access to blood donor and recipient details from a dynamic database. Users can register as donors or recipients, while admins manage records and view contact page feedback.', img: 'bdlogo.png', link: 'https://github.com/KCR78/Blood-Donation' },
        { name: 'Outcasts Community', desc: 'This dynamic web application features content controlled by an admin panel. The main website includes both static and dynamic elements. It integrates the Razorpay Payment Gateway for booking tickets. Technologies used include React, Next.js, Node.js, and MongoDB.', img: 'oc.png', link: 'https://outcastscommunity.com/' },
        { name: 'Bingo Game', desc: 'Created the multiplayer game using React, Next.js, Bootstrap 5, Socket.IO, Socket.IO-Client, and Node.js within a Next.js setup. The game allows players to participate by either creating a room session or joining using a room ID, with no maximum player limit.', img: 'bingo.png', link: 'https://github.com/KCR78/bingo-by-kc' },
        { name: 'Chat App', desc: 'The app, developed with ReactJS and Firebase, ensures high security. Conversation data is stored in an encrypted format in the Firebase database in real-time and decrypted when rendered. It includes a screen lock system that activates when the user is idle, changes tabs, or deviates from the chat screen, requiring a PIN code to unlock. User management and PIN control are handled by the admin. All logins and sign-ups utilize Google Sign-In.', img: 'chatapp.png', link: 'https://github.com/KCR78/ChatApp-By-KC' }
    ];

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