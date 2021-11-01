import React from 'react';
import './About.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const About = () => {
    const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />

    return (
        <div>
            {/* about section starts  */}

            <section className="about" id="about">

                <h1 className="heading"> <span>about</span> us </h1>

                <div className="row">

                    <div className="image">
                        <img src="https://iconicsantorini.com/wp-content/uploads/2016/07/Travelling-Abroad.jpg" alt="" />
                    </div>

                    <div className="content">
                        <h3>BEST TRAVEL AGENCY COMPANY SINCE 2021.</h3>
                        <p>Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task..</p>
                        <p>This was capitalized on by people like Thomas Cook selling tourism packages where trains and hotels were booked together.</p>
                        <Link className="btn" to="/services">Our Packages {ChevronRight}</Link>
                    </div>

                </div>

            </section>

            {/* about section ends  */}
        </div>
    );
};

export default About;