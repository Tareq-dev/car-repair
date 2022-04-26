import { useEffect, useState } from "react";

const useService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://pure-chamber-87771.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [service, setService];
};
export default useService;
