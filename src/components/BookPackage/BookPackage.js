import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BookPackage = () => {
    const { user } = useAuth();
    const history = useHistory();
    const { id } = useParams();
    const [confirm, setConfirm] = useState([]);
    useEffect(() => {
        fetch(`https://afternoon-retreat-33013.herokuapp.com/allconfirmorder/${id}`)
            .then(res => res.json())
            .then(data => {
                setConfirm(data)
            })
    }, [id])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        data.email = user?.email;
        data.confirm = confirm;
        fetch('https://afternoon-retreat-33013.herokuapp.com/placeorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Confirm Order success')
                history.push('/myorders')
            })
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel
                            controlId="floatingname"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control readOnly defaultValue={user?.displayName} {...register("name")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingemail" label="Email" className="mb-3">
                            <Form.Control readOnly defaultValue={user?.email} {...register("email")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingaddress" label="address" className="mb-3">
                            <Form.Control type="text" placeholder="ex:dhaka" {...register("address")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingphone" label="Phone" className="mb-3">
                            <Form.Control type="number" placeholder="Phone" {...register("phone")} />
                        </FloatingLabel>
                        <Button type="submit">Confirm Order</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookPackage;