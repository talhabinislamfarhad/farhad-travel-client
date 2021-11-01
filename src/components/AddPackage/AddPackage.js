import React from 'react';
import './AddPackage.css'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Package insert success')
                reset()
            })
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto mt-5">
                    <h3>Add package!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FloatingLabel
                            controlId="floatingtitle"
                            label="Package Title"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="title" {...register("title")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingperson" label="Person" className="mb-3">
                            <Form.Control type="text" placeholder="Person" {...register("person")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingday" label="Duration" className="mb-3">
                            <Form.Control type="text" placeholder="day" {...register("day")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingprice" label="Price" className="mb-3">
                            <Form.Control type="number" placeholder="price" {...register("price")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingcountry" label="Location" className="mb-3">
                            <Form.Control type="text" placeholder="country" {...register("country")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingdes" label="Decription" className="mb-3">
                            <Form.Control type="text" placeholder="des" {...register("des")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingimg" label="Image URL" className="mb-3">
                            <Form.Control type="text" placeholder="img url" {...register("img")} />
                        </FloatingLabel>
                        <Button type="submit">Add</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;