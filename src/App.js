import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import GetService from "./components/GetService/GetService";

import Login from "./components/Login/LoginCustom/Login";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Pages/Main/Main";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ServiceCarDetail from "./components/ServiceCarDetail/ServiceCarDetail";
import Shipment from "./components/Shipment/Shipment";
import SignUp from "./components/SignUp/SignUp";

export const MyService = createContext();

function App() {
  const [service, setService] = useState([]);

  return (
    <div>
      <MyService.Provider value={[service, setService]}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/getting-services" element={<GetService />} />
          <Route path="/getting-services/:id" element={<ServiceCarDetail />} />
          <Route
            path="/shipment"
            element={
              <RequireAuth>
                <Shipment />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MyService.Provider>
    </div>
  );
}

export default App;
