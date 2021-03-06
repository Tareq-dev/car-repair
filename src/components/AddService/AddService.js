import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    //post to backend

    const url = `https://pure-chamber-87771.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <div className="w-50 mx-auto py-14">
        <h3 className="text-center text-3xl mt-3 mb-2">Add Service</h3>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Service name"
            className="border-3 px-3 py-1 mt-2"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <textArea
            placeholder="Service Description"
            className="border-3 px-3 py-1 mt-2"
            {...register("description")}
          />
          <input
            placeholder="Service Price"
            className="border-3 px-3 py-1 mt-2"
            type="number"
            {...register("pice")}
          />
          <input
            placeholder="Photo URL"
            className="border-3 px-3 py-1 mt-2"
            type="text"
            {...register("img")}
          />
          <input
            className="border-3 px-3 py-1 mt-2 bg-green-200"
            value="Add service"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
