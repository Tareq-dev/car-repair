import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceCar = ({ s }) => {
  const { name, price, description, img } = s;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description.slice(0,100)}</Card.Text>
        <h2 className="text-center text-xl bg-blue-400 text-white">
          Price : ${price}
        </h2>
        <button className="mt-3 w-100 text-center text-xl border-2 border-black bg-red-400 text-white">
          Buy Service
        </button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCar;
