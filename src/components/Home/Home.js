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
                background: `url(${Banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className="content">
                    <h3>Book flights, hotels, trains </h3>
                    <h3>anywhere in the world!</h3>
                    <Link className="btn" to="/about">About Us {ChevronRight}</Link>
                </div>
            </section>
            {/* home section ends  */}
            {/* Booking */}
            <section className="booking-container mb-5" data-aos="fade-up">
                <div className="text-center container">
                    <div className="sec-title text-center">
                        <h2 className="text-uppercase abril-font mb-5">Check For Availability.</h2>
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
                                            <option value="Los Angeles">Los Angeles, California</option>
                                            <option value="Melbourne, Australia">Melbourne, Australia</option>
                                            <option value="Teton, Spain">Teton, Spain</option>
                                            <option value="Intia, Russia">Intia, Russia</option>
                                            <option value="Hallowed ,America">Hallowed ,America</option>
                                            <option value="Hinoa, Germany">Hinoa, Germany</option>
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
                    <img src="https://image.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg" alt="" />
                    <h3>20000+ </h3>
                    <p>Our Worldwide Guide</p>
                </div>

                <div className="icons">
                    <img src="https://image.freepik.com/free-vector/flat-travel-background_23-2148043314.jpg" alt="" />
                    <h3>100% </h3>
                    <p>Trusted Tour Agency</p>
                </div>

                <div className="icons">
                    <img src="https://img.freepik.com/free-vector/flat-travel-background_23-2148050086.jpg?size=338&ext=jpg" alt="" />
                    <h3>18+ Years of </h3>
                    <p>Travel Experience</p>
                </div>

                <div className="icons">
                    <img src="https://img.freepik.com/free-photo/flat-lay-yellow-luggage-with-copy-space_23-2148786124.jpg?size=338&ext=jpg" alt="" />
                    <h3>99% of </h3>
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
                        <p>Travelers welcome to my site. You’ve just stumbled across the best place on the internet to find information on travel-related websites and resources. Although the concept is pretty self-explanatory, I thought I would offer a little introduction page to let you know precisely what it is you will be looking at. The platform is a review and ranking area for traveler resources.</p>
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