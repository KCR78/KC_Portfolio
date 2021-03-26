import React, { Component } from 'react';
import './work_education.css'
import pu from '../../assets/images/pu.png';
import bjb from '../../assets/images/bjb.png';
import rajdhani from '../../assets/images/rajdhani.png';
import aurobindo from '../../assets/images/aurobindo.png';
import ScrollAnimation from 'react-animate-on-scroll';

class Education extends Component {

  render() {
    return (
      <div>
        <h4 className='hrline mb-5'>EDUCATION </h4>

        <div className='container mb-5'>
          <div className="timeline">

            <ScrollAnimation animateIn='slideInUp' duration={1} animateOnce={true}>
              <div className="timeline-box">
                <div className="content">
                  <h3 className='year'>2020</h3>
                  <div className="edu-data">
                    <h5>MASTER IN COMPUTER APPLICATION (M.C.A)</h5>
                    <a href='http://www.pondiuni.edu.in/' target='_blank' rel="noopener noreferrer"> <img src={pu} className='logos' alt='PU' /> </a>
                    <p className='mt-3'>
                      Pondicherry University, Pondicherry (PG) <br />
                                    CGPA : 7.82
                                </p>
                    <p>DURATION : 2017 - 2020</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='slideInUp' duration={1} animateOnce={true}>
              <div className="timeline-box">
                <div className="content">
                  <h3 className='year'>2017</h3>
                  <div className="edu-data">
                    <h5>B.Sc COMPUTER SCIENCE HONOURS (+3)</h5>
                    <a href='http://www.bjbcollege.in/' target='_blank' rel="noopener noreferrer"> <img src={bjb} className='logos' alt='BJB' /> </a>
                    <p className='mt-3'>
                      B.J.B Autonomous College, Bhubaneswar, Odisha (UG) <br />
                                    Honours : 70.37% <br />
                                    Aggregate : 55.43%
                                </p>
                    <p>DURATION : 2014 - 2017</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='slideInUp' duration={1} animateOnce={true}>
              <div className="timeline-box">
                <div className="content">
                  <h3 className='year'>2013</h3>
                  <div className="edu-data">
                    <h5>INTERMEDIATE (+2)</h5>
                    <a href='https://www.rajdhanicollege.ac.in/' target='_blank' rel="noopener noreferrer" > <img src={rajdhani} className='logos' alt='RC' /> </a>
                    <p className='mt-3'>
                      Rajdhani College, Bhubaneswar, Odisha (CHSE) <br />
                                    Percentage : 73%
                                </p>
                    <p>DURATION : 2011 - 2013</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='slideInUp' duration={1} animateOnce={true}>
              <div className="timeline-box">
                <div className="content">
                  <h3 className='year'>2011</h3>
                  <div className="edu-data">
                    <h5>MATRICULATION (10TH)</h5>
                    <a href='https://www.facebook.com/saiecjharpada/' target='_blank' rel="noopener noreferrer"> <img src={aurobindo} className='logos' alt='SAIEC' /> </a>
                    <p className='mt-3'>
                      Sri Aurobindo Integral Education Centre, Jharapada, Bhubaneswar, Odisha (BSE) <br />
                                    Percentage : 82.2%
                                </p>
                    <p>PASS OUT : 2011</p>
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

export default Education;

