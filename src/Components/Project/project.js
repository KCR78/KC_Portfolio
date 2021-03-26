import React, { Component } from 'react';
import './project.css'
import bdlogo from '../../assets/images/logo7.png'
import ScrollAnimation from 'react-animate-on-scroll';

class Project extends Component {

    state = {
        showing: false
    }

    render() {
        const { showing } = this.state;
        return (
            <div>
                <h4 className='hrline mb-5'>PROJECT</h4>

                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-4' align='center'>
                            <ScrollAnimation animateIn='bounceIn' duration={2} animateOnce={true}>
                                <div className='proj'
                                    onMouseEnter={() => this.setState({ showing: !showing })}
                                    onMouseLeave={() => this.setState({ showing: !showing })}
                                >
                                    <a href='https://github.com/KCR78/Blood-Donation' target='_blank' rel="noopener noreferrer">
                                        <img
                                            src={bdlogo}
                                            className='p-logo'
                                            alt='Blood Donation'
                                        />
                                    </a>

                                    <p className='p-title'>Blood Donation Website</p>
                                    {
                                        showing ? (
                                            <p className='p-desc'>
                                                <hr />
                                                Its a Full-Stack responsive Website by Using HTML 5, CSS 3, Java Script, Bootstrap 4, Python Flask Framework, My SQL, XAMPP Server.
                                            </p>
                                        ) : null
                                    }
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Project;