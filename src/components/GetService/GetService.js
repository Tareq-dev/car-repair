import React, { useContext, useEffect } from "react";
import ServiceCar from "../ServiceCar/ServiceCar";
import "./GetService.css";
import { MyService } from "../../App";

const GetService = () => {
  const [services, setServices] = useContext(MyService);
  useEffect(() => {
    fetch("https://pure-chamber-87771.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [setServices]);
  return (
    <div>
      <h3 className="mt-24 text-center text-3xl font-bold">
        Get service ({services.length})
      </h3>
      <div className="container services grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
        {services.map((s) => (
          <ServiceCar key={s._id} s={s}></ServiceCar>
        ))}
      </div>
    </div>
  );
};

export default GetService;
