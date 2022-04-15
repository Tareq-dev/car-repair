import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyService } from "../../App";
import Navbar from "../Shared/NavbarB/NavbarB";

const ServiceCarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useContext(MyService);
  const serviceInfo = service.find((s) => s.id == id);
  console.log(serviceInfo);

  const navigateToShipment =()=>{
    navigate('/shipment')
  }

  return (
    <div>
      <Navbar />
      <h2 className="mt-14 text-center text-2xl">
        Welcome to the Service Car Area
      </h2>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 class="sm:text-4xl text-2xl mb-2 font-medium text-blue-600">
              {serviceInfo?.name}
            </h1>
            <p class="mb-1 leading-relaxed text-left">{serviceInfo?.description}</p>
            <h1 class="sm:text-4xl text-2xl font-medium text-primary">
              $ {serviceInfo?.price}
            </h1>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={serviceInfo?.img}
            />
          </div>
        </div>
        <div class="flex justify-center">
          <button onClick={navigateToShipment} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Place Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceCarDetail;
