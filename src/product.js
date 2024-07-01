import React from 'react';
import data from './Database/Data'; // Adjust path as per your project structure
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductList = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                {data.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.img} className="card-img-top"/>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.company}</Card.Text>
                                <Card.Text>₹{product.newPrice} &nbsp;<del>{product.prevPrice}</del></Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                                <Card.Text>
                                    {product.star}{product.reviews}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;