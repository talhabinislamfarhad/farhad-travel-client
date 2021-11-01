import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import { Button } from 'react-bootstrap'

const ManageAllOrders = () => {
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-retreat-33013.herokuapp.com/manageorders')
            .then((res) => res.json())
            .then((data) => setManageOrder(data));
    });
    const handleDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `https://afternoon-retreat-33013.herokuapp.com/allorderdelete/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete success')
                    }
                })
        }
    }

    const handleUpdate = (id) => {
        const url = `https://afternoon-retreat-33013.herokuapp.com/placeorders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(manageOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update success')
                }
            })
    }
    return (
        <div>
            {/* services section starts  */}

            <section className="services" id="services">

                <h1 className="heading"> ALL ORDERS <span> LIST</span> </h1>

                <div className="box-container">
                    {manageOrder.map(services => {
                        return (
                            <div key={services._id}>
                                <div className="box">
                                    <img src={services?.confirm?.img} alt="" />
                                    <h3>{services?.confirm?.title}</h3>
                                    <p>{services?.confirm?.des}</p>
                                    <h3>(In {services?.confirm?.country})</h3>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>{services?.confirm?.day}{" "} Days / Night</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>${services?.confirm?.price}{" "} / Per Person</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Person :{""}{services?.confirm?.person}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <Button onClick={() => handleDelete(services._id)} className="btn">Delete Package</Button>
                                        <Button onClick={() => handleUpdate(services._id)} className="btn">Update Package</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </section>

        </div>
    );
};

export default ManageAllOrders;