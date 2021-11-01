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
                        <h3> WORLD BEST TRAVEL AGENCY SINCE 1999.</h3>
                        <p>Travelers welcome to my site. You’ve just stumbled across the best place on the internet to find information on travel-related websites and resources. Although the concept is pretty self-explanatory, I thought I would offer a little introduction page to let you know precisely what it is you will be looking at. The platform is a review and ranking area for traveler resources.</p>
                        <Link className="btn" to="/services">Our Packages {ChevronRight}</Link>
                    </div>

                </div>

            </section>

            {/* about section ends  */}
        </div>
    );
};

export default About;