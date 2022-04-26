import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./components/About/About";
import AddService from "./components/AddService/AddService";
import GetService from "./components/GetService/GetService";
import Login from "./components/Login/LoginCustom/Login";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Pages/Main/Main";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ServiceCarDetail from "./components/ServiceCarDetail/ServiceCarDetail";
import SignUp from "./components/SignUp/SignUp";
import Checkout from "./components/Checkout/Checkout";
import ManageServices from './components/ManageServices/ManageServices';
import OrderManage from './components/OrderManage/OrderManage';
import NavbarB from './components/Shared/NavbarB/NavbarB';
import Footer from "./components/Shared/Footer/Footer";

export const MyService = createContext();

function App() {
  const [service, setService] = useState([]);

  return (
    <div>
      <MyService.Provider value={[service, setService]}>
      <NavbarB />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/getting-services" element={<GetService />} />
          <Route path="/getting-services/:id" element={<ServiceCarDetail />} />
          <Route
            path="/checkout/:id"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/addservice"
            element={
              <RequireAuth>
                <AddService />
              </RequireAuth>
            }
          />
          <Route
            path="/manage"
            element={
              <RequireAuth>
                <ManageServices />
              </RequireAuth>
            }
          />
          <Route
            path="/order"
            element={
              <RequireAuth>
                <OrderManage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="flex justify-center text-green-500 font-serif font-bold mt-14 ">
      <ToastContainer />
      </div>
        <Footer />
      </MyService.Provider>
      
    </div>
  );
}

export default App;
