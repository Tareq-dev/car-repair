import { useState } from "react";
import { useEffect } from "react";

const useServiceDetails = (id) => {
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return [service, setService];
};
export default useServiceDetails;
