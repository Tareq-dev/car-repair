import { useState } from "react";
import { useEffect } from "react";

const useServiceDetails = (id) => {
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://pure-chamber-87771.herokuapp.com/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return [service, setService];
};
export default useServiceDetails;
