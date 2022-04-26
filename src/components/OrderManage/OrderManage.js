import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../API/axiosPrivate";

const OrderManage = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://pure-chamber-87771.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrder(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [navigate, user.email]);
  return (
    <div className="py-24">
      <h2 className="text-3xl text-center">
        {user.displayName} Ordered : {order.length} service
      </h2>
      <div className="mt-5">
        {order.map((o) => (
          <div key={o._id}>
            <li className="font-bold text-center">{o.service}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManage;
