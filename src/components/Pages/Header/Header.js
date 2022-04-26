import React from "react";
import { Carousel } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 h-100"
            src="https://i.ibb.co/4NkQqjP/caro-1.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-4xl font-bold">Looking for the best car repair service near you?</h3>
            <p className='text-xl'>We has trusted & skilled car mechanics in Bangladesh. Satisfaction guaranteed. Book now.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 h-100"
            src="https://i.ibb.co/sgW1yZ9/caro-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="text-4xl font-bold">Online automobile repair shops</h3>
            <p className='text-xl'>providing doorstep repair services and home delivery of new and used auto parts of different late model</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.ibb.co/bsJbCMC/caro-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3 className="text-4xl font-bold">Hands of car mechanic in auto repair service.</h3>
          <p className='text-xl'>Car repairing,Hand of car technician auto mechanic with a wrench working in garage. Auto mechanic working on ...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
