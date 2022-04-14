import React, { useEffect, useState } from "react";
import NavbarB from "../Shared/NavbarB/NavbarB";
import ServiceCar from "./ServiceCar/ServiceCar";

const GetService = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <NavbarB />
      <h3 className="mt-24 text-center text-3xl font-bold">
        Get service ({service.length})
      </h3>
      <div className="container grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
        {service.map((s) => (
          <ServiceCar key={s.id} s={s}></ServiceCar>
        ))}
      </div>
    </div>
  );
};

export default GetService;
