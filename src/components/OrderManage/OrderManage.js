import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderManage = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/order?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user.email]);
  return (
    <div>
      <h2 className="text-3xl text-center">Order : {order.length}</h2>
    </div>
  );
};

export default OrderManage;
