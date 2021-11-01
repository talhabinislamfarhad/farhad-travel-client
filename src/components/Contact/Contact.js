import React from 'react';
import './Contact.css';
import { useHistory, useLocation } from 'react-router-dom';

const Contact = () => {
    const History = useHistory();
    const Location = useLocation();
    const Redirect = Location?.state?.from || "/";

    const handleContact = (e) => {
        History.push(Redirect);
    }

    return (
        <div>
            {/* Contact section starts  */}

            <section className="contact mt-5" id="contact">

                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <form onSubmit={handleContact}>
                            <h3>Get In Touch With Us!</h3>
                            <input type="text" placeholder="your name" className="box" />
                            <input type="email" placeholder="your email" className="box" required />
                            <textarea type="textarea" placeholder="your message" className="box" required></textarea>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>


                </div>

            </section>

            {/* Contact section ends  */}
        </div>
    );
};

export default Contact;