import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleServices.css'

const SingleServices = () => {

    const [singleService, setSingleService] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/talhabinislamfarhad/imgs/main/Services.json')
            .then(res => res.json())
            .then(data => setSingleService(data))

    }, [])
    const { id } = useParams();
    console.log(id);
    const allSingle = singleService.filter(single => single.id === id);
    console.log(allSingle);
    return (
        <div>
            {/* Service section starts  */}
            <section className="service" id="service">

                <div className="row">
                    <div className="col-4">
                        <div className="image">
                            <img src={allSingle[0]?.img} alt="" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="content">
                            <h3>{allSingle[0]?.title}</h3>
                            <p>{allSingle[0]?.longDecription}</p>
                            <Link className="btn" to="/services">Our Services</Link>
                        </div>
                    </div>
                </div>

            </section>
            {/* Details section ends  */}
        </div>
    );
};

export default SingleServices;