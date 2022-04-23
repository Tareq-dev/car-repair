import React from "react";
import NavbarB from "../Shared/NavbarB/NavbarB";
import useService from "./../../Hooks/useService";

const ManageServices = () => {
  const [service, setService] = useService();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;

      //Delete from DB

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = service.filter((service) => service._id !== id);
          setService(remaining);
        });
    }
  };
  return (
    <div>
      <NavbarB />
      <div className="w-75 mx-auto">
        <h3 className="text-3xl font-bold mt-5">Manage Services</h3>
        {service.map((s) => (
          <div key={s._id} className="mt-4">
            <div className="flex justify-between align-middle border-2 p-2">
              <img
                style={{ borderRadius: "20%", width: "100px", height: "100px"}}
                src={s.img}
                alt=""
              />
              <div className="mx-2 mt-1">
              <h3 className="text-2xl">{s.name}</h3>
              <p>{s.description}</p>
              </div>
              <button
                className="border-2 px-2 py-1 bg-red-500 text-2xl text-white font-bold rounded-lg"
                onClick={() => handleDelete(s._id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
