import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';

const MyOrders = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [user?.email]);
    const handleOrderDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `http://localhost:5000/orderdelete/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete success')

                    }
                    history.push('/manageallorders');
                });
        }
    }
    return (
        <div>
            {/* services section starts  */}

            <section className="services" id="services">

                <h1 className="heading"> OUR <span>ORDERS</span> </h1>

                <div className="box-container">
                    {myOrders.map(services => {
                        return (
                            <div key={services._id}>
                                <div className="box">
                                    <img src={services?.confirm?.img} alt="" />
                                    <h3>{services?.confirm?.title}</h3>
                                    <p>{services?.confirm?.des.slice(0, 100)}</p>
                                    <h3>(In {services?.confirm?.country})</h3>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>{services?.confirm?.day}{" "} Days / Night</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>${services?.confirm?.price}{" "} / {services?.confirm?.person} Person</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button onClick={() => handleOrderDelete(services._id)} className="btn">Delete Package</Button>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </section>

        </div>
    );
};
export default MyOrders;