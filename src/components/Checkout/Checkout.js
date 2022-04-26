import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useServiceDetails from "../../Hooks/useServiceDetails";
// import { axios } from "axios";

const Checkout = () => {
  const { id } = useParams();

  const [service] = useServiceDetails(id);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: id,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      response.json();
      
      if (response) {
        toast("You have successfully booked");
        event.target.reset();
      }
    });
  };

  return (
    <div className='mb-5'>
      <div className="w-50 mx-auto">
        <h2 className="mt-14 mb-10 text-center font-sans font-bold">
          Please Order : {service.name}
        </h2>
        <form onSubmit={handlePlaceOrder}>
          <input
            value={user?.displayName}
            className="w-100 mb-2 border px-2 py-1"
            type="text"
            name="name"
            placeholder="Name"
            required
            readOnly
            disabled
          />
          <br />
          <input
            value={user?.email}
            className="w-100 mb-2 border px-2 py-1"
            type="email"
            name="email"
            placeholder="Email"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-100 mb-2 border px-2 py-1"
            value={service.name}
            type="text"
            name="service"
            placeholder="service"
            required
            readOnly
          />
          <br />
          <input
            className="w-100 mb-2 border px-2 py-1"
            type="text"
            name="address"
            placeholder="Address"
            required
            autoComplete="off"
          />
          <br />
          <input
            className="w-100 mb-2 border px-2 py-1"
            type="text"
            name="phone"
            placeholder="Phone no"
            required
          />
          <br />
          <input
            className="w-100 mb-2 border px-2 py-1 bg-sky-300"
            type="submit"
            value="Place Order"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
