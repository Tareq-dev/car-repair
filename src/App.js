import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import GetService from "./components/GetService/GetService";
import Login from "./components/Login/LoginCustom/Login";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Pages/Main/Main";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
  <Routes>
  <Route path="/" element={<Main />} />
  <Route path="/home" element={<Main />} />
  <Route path="/getting-services" element={<GetService />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
    </div>
  );
}

export default App;
