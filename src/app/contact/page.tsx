'use client'
import Booking from '@/components/Booking/Booking'
import React, { useState } from 'react'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FormLoader from '@/components/FormLoader/FormLoader';

export default function page() {
    const [feedback, setFeedback] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: ""
        })
    const [loading, setLoading] = useState(false)
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFeedback(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true)
        toast.promise(
            axios
                .post("/api/feedback", feedback, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setFeedback({
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                        });
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    console.log("Error sending message", error.message);
                    throw error;
                }), {
            loading: "Sending your enquiry...",
            success: "Enquiry sent, we will reply within 24-48 hours",
            error: "Error sending enquery. Please try again.",
        },
            {
                style: {
                    minWidth: '250px',
                },
                success: {
                    duration: 3000,
                },
            }

        );
    }
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">Contact Us</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact section-padding bg-lightbrown">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="row mb-30">
                                <div className="col-lg-6 col-md-12 mb-25">
                                    <div className="item" style={{ backgroundColor: "#ffffff" }}>
                                        <div className="contents"> <span className="fa-thin fa-location-dot"></span>
                                            <h2 className="title">Hotel Pradeep, Varanasi</h2>
                                            <p className="text">Jagatganj, Varanasi-221002 (U.P.) India</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mb-25">
                                    <div className="item" style={{ backgroundColor: "#ffffff" }}>
                                        <div className="contents"> <span className="fa-thin fa-phone"></span>
                                            <h2 className="title">Let's talk with us</h2>
                                            <p className="text">Phone: (+91) 0542-2204963, 2207231</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.37303530738!2d82.9996762!3d25.325260499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e0c18ec0b31%3A0xe4e06b76bb8651fc!2sHotel%20Pradeep!5e0!3m2!1sen!2sin!4v1740131130582!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0, borderRadius: "15px" }} loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 col-md-12">
                            <div className="form2-sidebar">
                                <form action="#" className="form2">
                                    <div className="head">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h5>Get in touch!</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cont">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 form-group">
                                                <input type="text" placeholder="Name" name='name' onChange={handleChange}
                                                    value={feedback.name} required />
                                            </div>
                                            <div className="col-lg-12 col-md-12 form-group">
                                                <input type="email" placeholder="Email" name='email' onChange={handleChange}
                                                    value={feedback.email} required />
                                            </div>
                                            <div className="col-lg-12 col-md-12 form-group">
                                                <input type="text" placeholder="Phone" name='phone' onChange={handleChange}
                                                    value={feedback.phone} required />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea name="message" id="message" onChange={handleChange}
                                                    value={feedback.message} cols={30} rows={4} placeholder="Message"></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <button onClick={handleSubmit} className="button-3"><i className="fa-light fa-paper-plane"></i> {loading ? <FormLoader /> : "Submit"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="faqs section-padding">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-12 mb-30">
                            <div className="section-subtitle">Popular Questions</div>
                            <div className="section-title">Frequently Asked Questions</div>
                            <p className="mb-25">The experience elementum sesue in the aucantion alesun in sapien fermen miss caleustion in the sapien.</p> <a href="#" className="button-3">All Questions</a>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-md-12">
                            <ul className="accordion-box clearfix">
                                <li className="accordion block">
                                    <div className="acc-btn">Do you have any discount code?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry sapien fermen drana inthe miss molestie non tempor fermen the varius vestibulum drana.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">How can I get in touch with my hotel?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry sapien fermen drana inthe miss molestie non tempor fermen the varius vestibulum drana.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">Can I cancel my reservation?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry sapien fermen drana inthe miss molestie non tempor fermen the varius vestibulum drana.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">Do you have hotels with a spa?</div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry sapien fermen drana inthe miss molestie non tempor fermen the varius vestibulum drana.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}
            <Toaster position="top-right" />
            <Booking />
        </>
    )
}
