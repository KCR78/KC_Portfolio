import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { dataPattern, error_messages } from '../config/GlobalVars';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import DisplayLoader from './displayLoader';

const Contact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = data => {
        setIsLoading(true);
        emailjs.sendForm(
            "gmail",
            "template_dggzq3b",
            "#contactForm",
            "user_dYzgiJBe671NJHcwxeehu"
        )
            .then(response => {
                // console.log(response);
                if (response.status === 200) {
                    // console.log('SUCCESS!', response.status, response.text);
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent",
                        text: "Thank you  " + data.name.split(' ')[0] + " for your response",
                    });
                    reset();
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: error.message,
                });
            });
    };

    return (
        <>
            {isLoading && <DisplayLoader />}
            <section className="section" id="contact" data-aos="fade-up">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <span className="text-color mb-0 text-uppercase letter-spacing text-sm"> <i className="bi bi-dash-lg mr-2"></i>Contact</span>
                                <h1 className="title">Get in Touch</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form className="form-row contact-form" onSubmit={handleSubmit(onSubmit)} id="contactForm">
                                <div className='row'>

                                    <div className={errors.name ? 'col-sm-12 mb-5 error_block' : 'col-sm-12 mb-5'}>
                                        <div className="form-floating ">
                                            <input
                                                {...register("name", { required: true, pattern: dataPattern.space })}
                                                type="text"
                                                autoComplete="off"
                                                className={errors.name ? "form-control bg-transparent is-invalid" : "form-control bg-transparent   "}
                                                id="name" placeholder="Full Name" />
                                            <label htmlFor="name">Full Name</label>
                                            <div className="invalid-feedback text-end">
                                                {errors.name?.type === 'required' && error_messages.required}
                                                {errors.name?.type === 'pattern' && error_messages.space}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={errors.email ? 'col-sm-6 mb-5 error_block' : 'col-sm-6 mb-5'}>
                                        <div className="form-floating ">
                                            <input
                                                {...register("email", { required: true, pattern: dataPattern.email })}
                                                type="text"
                                                autoComplete="off"
                                                className={errors.email ? "form-control bg-transparent is-invalid" : "form-control bg-transparent   "}
                                                id="email" placeholder="Email" />
                                            <label htmlFor="email">Email</label>
                                            <div className="invalid-feedback text-end">
                                                {errors.email?.type === 'required' && error_messages.required}
                                                {errors.email?.type === 'pattern' && error_messages.email}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={errors.phone ? 'col-sm-6 mb-5 error_block' : 'col-sm-6 mb-5'}>
                                        <div className="form-floating ">
                                            <input
                                                {...register("phone", { required: true, pattern: dataPattern.mobile })}
                                                type="text"
                                                autoComplete="off"
                                                className={errors.phone ? "form-control bg-transparent is-invalid" : "form-control bg-transparent   "}
                                                id="phone" placeholder="Mobile" />
                                            <label htmlFor="phone">Mobile</label>
                                            <div className="invalid-feedback text-end">
                                                {errors.phone?.type === 'required' && error_messages.required}
                                                {errors.phone?.type === 'pattern' && error_messages.mobile}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={errors.message ? 'col-sm-12 mb-5 error_block' : 'col-sm-12 mb-5'}>
                                        <div className="form-floating ">
                                            <textarea
                                                className={errors.message ? "form-control bg-transparent is-invalid" : "form-control bg-transparent"}
                                                placeholder="Your Message"
                                                {...register("message", { required: true })}
                                            ></textarea>
                                            <label htmlFor="message">Message</label>
                                            <div className="invalid-feedback text-end">
                                                {errors.message?.type === 'required' && error_messages.required}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-lg-12 mb-5">
                                        <div className="text-center">
                                            <input
                                                className="btn btn-main text-white mt-5 btn-hero"
                                                id="submit"
                                                type="submit"
                                                value="Send Message" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;