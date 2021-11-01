import React from 'react';
import './Services.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
//Json File
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UseServices from '../../hooks/UseServices';


const Services = () => {
    const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />
    const [services] = UseServices();
    return (
        <div>
            {/* services section starts  */}

            <section className="services" id="services">

                <h1 className="heading"> OUR <span>PACKAGES</span> </h1>

                <div className="box-container">
                    {services.map(services => {
                        return (
                            <div key={services._id}>
                                <div className="box">
                                    <img src={services.img} alt="" />
                                    <h3>{services.title}</h3>
                                    <p>{services.des.slice(0, 100)}</p>
                                    <h3>(In {services.country})</h3>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>{services.day}{" "} Days / Night</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>${services.price}{" "} / {services.person} Person</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`/bookpackage/${services._id}`}>
                                        <Button className="btn">Book Package  {ChevronRight}</Button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </section>

            {/* services section ends  */}
        </div>
    );
};

export default Services;