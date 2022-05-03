import React, { Component } from 'react';
import './contact.css'
import loadingGif from '../../assets/images/loading.gif'
import * as emailjs from 'emailjs-com';
import ScrollAnimation from 'react-animate-on-scroll';
import swal from 'sweetalert';

class Contact extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        message: '',
        nameErrMsg: '',
        phoneErrMsg: '',
        emailErrMsg: '',
        msgErrMsg: '',
        loading: false
    }

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state);
        this.setState({ nameErrMsg: '' })
        this.setState({ phoneErrMsg: '' })
        this.setState({ emailErrMsg: '' })
        this.setState({ msgErrMsg: '' })

        const regxMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regxPhone = /^\d{10}$/;

        if (this.state.name !== ''
            && this.state.name.length > 3
            && this.state.email !== ''
            && regxMail.test(this.state.email)
            && this.state.message !== '') {

            if (this.state.phone && !regxPhone.test(this.state.phone)) {
                this.setState({ phoneErrMsg: 'Please Enter Valid Phone Number !' })
            } else {
                // console.log('success');
                this.setState({ loading: !this.state.loading })
                emailjs.sendForm(
                    "gmail",
                    "template_dggzq3b",
                    "#contactForm",
                    "user_dYzgiJBe671NJHcwxeehu"
                )
                    .then(response => {
                        // console.log(response);
                        this.setState({ loading: !this.state.loading })
                        if (response.status === 200) {
                            // console.log('SUCCESS!', response.status, response.text);
                            const q = /([^\s]+)/;
                            var name = this.state.name.match(q)[1];
                            swal(
                                {
                                    icon: "success",
                                    title: "Message Sent",
                                    text: "Thank you  " + name + " for your response",
                                    button: false,
                                    timer: 2000
                                }
                            )
                            this.setState({
                                name: '',
                                phone: '',
                                email: '',
                                message: '',
                                nameErrMsg: ''
                            });
                        }
                    })
                    .catch((error) => console.error('Error:', error))
            }
        }
        else {
            if (this.state.name === '') {
                this.setState({ nameErrMsg: 'Name cannot be Empty !' })
            } else if (this.state.name.length < 4) {
                this.setState({ nameErrMsg: 'Does not meet minimum length of 4' })
            }

            if (this.state.email === '') {
                this.setState({ emailErrMsg: 'Email cannot be Empty !' })
            } else if (!regxMail.test(this.state.email))
                this.setState({ emailErrMsg: 'Please Enter Valid Email !' })

            if (this.state.message === '') {
                this.setState({ msgErrMsg: 'Message cannot be Empty !' })
            }
        }
    }

    render() {
        const { name, phone, email, message, nameErrMsg, phoneErrMsg, emailErrMsg, msgErrMsg, loading } = this.state;
        return (
            <div className='contactpage pb-5'>
                <h4 className='hrline mb-5'>CONTACT ME</h4>

                <div className='container contactpage mb-5'>
                    <div className='row'>

                        <div className='col-12 col-sm-6 user-details'>
                            <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                <h3 className='mb-3 head-name'>KRUSHNA CHANDRA ROUT</h3>
                            </ScrollAnimation>

                            <ul className='cont-data cursive'>
                                <ScrollAnimation animateIn='slideInDown' duration={1} animateOnce={true}>
                                    <li className="list-unstyled">
                                        <i className="fas fa-briefcase"></i>
                                        &nbsp;&nbsp; VIS Networks Pvt. Ltd.</li>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn='slideInDown' duration={1} delay={100} animateOnce={true}>
                                    <li className="list-unstyled">
                                        <i className="fas fa-map-marker-alt"></i>
                                        &nbsp;&nbsp; Bhubaneswar, Odisha</li>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn='slideInDown' duration={1} delay={200} animateOnce={true}>
                                    <li className="list-unstyled">
                                        <i className="fas fa-birthday-cake"></i>
                                        &nbsp;&nbsp; May 4, 1996</li>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn='slideInDown' duration={1} delay={300} animateOnce={true}>
                                    <li className="list-unstyled">
                                        <a href="tel:+917504880671">
                                            <i className="fas fa-phone"></i>
                                            &nbsp;&nbsp; +91 7504880671
                                        </a>
                                    </li>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn='slideInDown' duration={1} delay={400} animateOnce={true}>
                                    <li className="list-unstyled">
                                        <a href="mailto:krushnachandrarout15@gmail.com">
                                            <i className="fas fa-envelope"></i>
                                            &nbsp;&nbsp; krushnachandrarout15@gmail.com
                                        </a>
                                    </li>
                                </ScrollAnimation>

                            </ul>
                        </div>

                        <div className='col-12 col-sm-6 contact-form pt-5'>
                            <form onSubmit={this.onSubmit} id='contactForm'>

                                <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
                                    <div className="floating-label">
                                        <input
                                            className="floating-input" type="text" id="name" name="name" placeholder=" "
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                        <label className="input-label">Name</label>
                                        <p className='err-msg'>{nameErrMsg}</p>
                                    </div>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn='fadeIn' duration={1} delay={100} animateOnce={true}>
                                    <div className="floating-label">
                                        <input
                                            className="floating-input" type="tel" id="phone" name="phone" placeholder=" "
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                        <label className="input-label">Phone</label>
                                        <p className='err-msg'>{phoneErrMsg}</p>
                                    </div>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn='fadeIn' duration={1} delay={200} animateOnce={true}>
                                    <div className="floating-label">
                                        <input
                                            className="floating-input" type="text" id="email" name="email" placeholder=" "
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                        <label className="input-label">Email</label>
                                        <p className='err-msg'>{emailErrMsg}</p>
                                    </div>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn='fadeIn' duration={1} delay={300} animateOnce={true}>
                                    <div className="floating-label">
                                        <textarea
                                            className="floating-textarea" type="text" id="message" name="message" placeholder=" "
                                            value={message}
                                            onChange={this.onChange}
                                        />
                                        <label className="input-label">Message</label>
                                        <p className='err-msg'>{msgErrMsg}</p>
                                    </div>

                                    <button type="submit" className="btn send-btn">
                                        SEND
                                    </button>
                                </ScrollAnimation>
                            </form>
                        </div>
                    </div>

                    {loading &&
                        <div className='loading'>
                            <img src={loadingGif} alt='loading' />
                        </div>
                    }

                </div>
            </div>
        );
    }
}

export default Contact;