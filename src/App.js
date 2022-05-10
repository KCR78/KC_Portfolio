// import logo from './logo.svg';
import './App.css';
import kcImg from './assets/img/kc-pic.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import cv from './assets/Krushna Chandra Rout.pdf'
import './assets/css/style.css';
import './assets/css/animate.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';
import About from './components/about';
import Skill from './components/skills';
import WorkNEducation from './components/workNeducation';
import Project from './components/project';
import Contact from './components/contact';
import 'loaders.css'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // AOS.refresh();
  }, []);

  const showNav = () => {
    const navBox = document.getElementById('mobileNav');
    navBox.classList.toggle('active');
  };

  const navHandle = () => { if (window.innerWidth <= 480) showNav(); }


  return (
    <div className="portfolio" id="top">

      {/* <!-- Navigation start --> */}
      <nav className='navigation d-flex'>
        <ul className="mobile-nav" id='mobileNav'>
          <li onClick={navHandle} title="About Me"><a className="smoth-scroll" href="#about"><i className="bi bi-file-person"></i></a></li>
          <li onClick={navHandle} title="Expertise"><a className="smoth-scroll" href="#skillbar"><i className="bi bi-code-slash"></i></a></li>
          <li onClick={navHandle} title="Experience"><a className="smoth-scroll" href="#service"><i className="bi bi-building"></i></a></li>
          <li onClick={navHandle} title="Project"><a className="smoth-scroll" href="#portfolio"><i className="bi bi-briefcase"></i></a></li>
          <li onClick={navHandle} title="Contact Me"><a className="smoth-scroll" href="#contact"><i className="bi bi-envelope"></i></a></li>
        </ul>
        <div className="d-block d-sm-none nav-togle-btn" onClick={showNav}><i className="bi bi-list"></i></div>
      </nav>
      {/* <!-- Navigation End --> */}

      {/* <!-- Banner start --> */}

      {/* <!-- Slider Start --> */}
      <section className="slider d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-sm-12 col-12 col-md-5 p-5">
              <div className="slider-img position-relative">
                <img src={kcImg} alt="" className="img-fluid w-100" />
              </div>
            </div>

            <div className="col-lg-6 col-12 col-md-7">
              <div className="ms-5 position-relative mt-5 mt-lg-0">
                {/* <span className="head-trans">Chandra Rout</span> */}
                <h1 className="font-weight-normal text-color sub-text-lg"><i className="bi bi-dash-lg me-2"></i>Web Developer</h1>
                <h2 className="my-2 my-sm-3 text-lg text-capitalize">Krushna Chandra Rout</h2>
                <p className="animated fadeInUp lead mt-4 mb-5 text-white-50 lh-35">Bhubaneswar, Odisha</p>
                <a href={cv} className="btn btn-solid-border" target='_blank' rel="noopener noreferrer">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}

      {/* <!-- About start --> */}
      <About />
      {/* <!-- About End --> */}

      {/* <!-- Skills start --> */}
      <Skill />
      {/* <!-- Skills End --> */}

      {/* <!-- Service start --> */}
      <WorkNEducation />
      {/* <!-- Service End --> */}

      {/* <!-- Portfolio start --> */}
      <Project />
      {/* <!-- Portfolio End --> */}


      {/* <!-- Contact start --> */}
      <Contact />
      {/* <!-- Contact End --> */}

      {/* <!-- Footer start --> */}
      <footer className="footer border-top-1">
        <div className="container">
          <div className="row align-items-center text-center text-lg-left">
            <div className="col-lg-2">
              <h2 className="logo mb-4 footer-head"><a href="#top">Krushna.</a></h2>
            </div>

            <div className="col-lg-5">
              <ul className="list-inline footer-socials">
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/krushna-chandra-rout-5b119b162/" target='_blank' rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a></li>
                <li className="list-inline-item"><a href="https://github.com/KCR78" target='_blank' rel="noopener noreferrer"><i className="bi bi-github"></i></a></li>
                <li className="list-inline-item"><a href="https://www.facebook.com/krushnachandra.rout.9" target='_blank' rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/krishnarout17" target='_blank' rel="noopener noreferrer"><i className="bi bi-twitter"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-5">
              <p className="lead"><span className="text-color">KC - Portfolio</span> © 2022 All Right Reserved.</p>
              {/* <a href="#top" className="backtop smoth-scroll"><i className="bi bi-chevron-up"></i></a> */}
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </div>
  );
}

export default App;




// import './assets/css/bootstrap.min.css';
// import './assets/css/themify-icons.css';
// import './assets/css/animate.css';
// import './assets/css/aos.css';
// import './assets/css/owl.carousel.min.css';
// import './assets/css/owl.theme.default.min.css"';
// import './assets/css/slick.css';
// import './assets/css/slick-theme.css';


// import './assets/js/bootstrap.min.js';
// import './assets/js/jquery.min.js';
// import './assets/js/popper.js';
// import './assets/js/jquery.easing.1.3.js';
// import './assets/js/slick.min.js';
// import './assets/js/owl.carousel.min.js';
// import './assets/js/apear.js';
// import './assets/js/counTo.js';
// import './assets/js/aos.js';
// import './assets/js/script.js';
// import './assets/js/ajax-contact.js';
