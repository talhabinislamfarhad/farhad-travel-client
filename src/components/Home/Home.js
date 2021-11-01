import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
// All Components
import Services from '../Services/Services';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
//Images
import Banner from '../../images/banner1.jpg';
import Contact from '../Contact/Contact';
import { Button } from 'react-bootstrap';

const Home = () => {
    const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />

    return (
        <div>
            {/* home section starts */}
            <section className="home" id="home" style={{
                background: `url(${Banner})`
            }}>
                <div className="content">
                    <h3>Let's Start Your Journey Safe</h3>
                    <h3> & Secure with us!</h3>
                    <Link className="btn" to="/about">About Us {ChevronRight}</Link>
                </div>
            </section>
            {/* home section ends  */}
            {/* Booking */}
            <section className="booking-container mb-5" data-aos="fade-up">
                <div className="text-center container">
                    <div className="sec-title text-center">
                        <h2 className="text-uppercase abril-font mb-5">Check Availability.</h2>
                        <p className="text-uppercase abril-font">TRAVEL SPECIALS</p>
                    </div>
                    <form className="shadow-lg p-5 rounded-3">
                        <div className="g-0 g-3 row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                    <i className="fas fa-calendar-alt mt-1 me-2"></i>
                                    <p>CHECK-IN</p>
                                </div>
                                <input type="date" className="form-control px-md-5 shadow-none  mb-5 mb-md-0" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                    <i className="fas fa-calendar-alt mt-1 me-2"></i>
                                    <p>CHECK-OUT</p>
                                </div>
                                <input type="date" className="form-control px-md-5 shadow-none mb-5 mb-md-0" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                                        <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                            <i className="fas fa-user-friends mt-1 me-2"></i>
                                            <p>PERSON</p>
                                        </div>
                                        <select className="form-control shadow-none form-select">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                                        <div className="text-container d-flex justify-content-center fw-bold text-muted">
                                            <i className="fas fa-map-marker-alt mt-1 me-2"></i>
                                            <p>CITY</p>
                                        </div>
                                        <select className="shadow-none form-control form-select">
                                            <option value="new york">New York, America</option>
                                            <option value="Chicago, America">Chicago, America</option>
                                            <option value="Barcelona, Spain">Barcelona, Spain</option>
                                            <option value="Moscow, Russia">Moscow, Russia</option>
                                            <option value="Los Angels, America">Los Angels,America</option>
                                            <option value="Sorrent, Germany">Sorrent, Germany</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center pt-5">
                                <Button className="py-3 px-3 mt-4 btn-light-green fw-bold border-0 btn btn-primary">Check Availability</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* Booking */}
            {/* icons section starts  */}

            <section className="icons-container">

                <div className="icons">
                    <img src="https://i.ibb.co/dtpwfY3/feature-1.jpg" alt="" />
                    <h3>2000+ </h3>
                    <p>Our Worldwide Guide</p>
                </div>

                <div className="icons">
                    <img src="https://i.ibb.co/xgV0c3d/feature-2.jpg" alt="" />
                    <h3>100% </h3>
                    <p>Trusted Tour Agency</p>
                </div>

                <div className="icons">
                    <img src="https://i.ibb.co/zrnhP9P/feature-3.jpg" alt="" />
                    <h3>12+ Years of </h3>
                    <p>Travel Experience</p>
                </div>

                <div className="icons">
                    <img src="https://i.ibb.co/7YnzQVq/feature-4.jpg" alt="" />
                    <h3>100% of </h3>
                    <p>Our Travelers are Happy</p>
                </div>

            </section>

            {/* icons section ends  */}
            {/* Details section starts  */}
            <section className="details" id="details">

                <h1 className="heading"> <span>About Our</span> Company </h1>

                <div className="row">

                    <div className="image">
                        <img src="https://previews.123rf.com/images/zeinousstudio/zeinousstudio2005/zeinousstudio200500008/146862981-time-to-travel-vector-concept-design-time-to-travel-text-in-globe-with-travelling-and-world-country-.jpg" alt="" />
                    </div>

                    <div className="content">
                        <h3>FARHAD TRAVELS</h3>
                        <p>Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task..</p>
                        <p>This was capitalized on by people like Thomas Cook selling tourism packages where trains and hotels were booked together.</p>
                        <Link className="btn" to="/services">Our Packages {ChevronRight}</Link>
                    </div>

                </div>

            </section>
            {/* Details section ends  */}
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;