import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15666.955035235198!2d77.02190145!3d10.9830806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702815539484!5m2!1sen!2sin"
    return (
        <>
            <Back title='Contact us' />
            <br /><br /><br /><br />
            <section className='contacts padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <iframe src={map} title="frame"></iframe>
                    </div>
                    <div className='right row'>
                        <h1>Contact us</h1>
                        <p>We're open for any suggestion or just to have a chat</p>

                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS:</h4>
                                <p>198, 21th Street, Singanallur, CBE-19</p>
                            </div>
                            <div className='box'>
                                <h4>EMAIL:</h4>
                                <p> info@yoursite.com</p>
                            </div>
                            <div className='box'>
                                <h4>PHONE:</h4>
                                <p> + 1235 2355 98</p>
                            </div>
                        </div>

                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Subject' />
                            <textarea cols='30' rows='10'>
                                Create a message here...
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>

                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact