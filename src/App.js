import "./App.css";
import Feature from "./components/Pages/Features/Feature";
import Header from "./components/Pages/Header/Header";
import Mechaniques from "./components/Pages/Mechaniques/Mechaniques";
import Services from "./components/services/Services";
import Footer from "./components/Shared/Footer/Footer";
import NavbarB from "./components/Shared/NavbarB/NavbarB";

function App() {
  return (
    <div>
  <NavbarB />
  <Header />
  <Feature />
  <Services />
  <Mechaniques />
  <Footer />
    </div>
  );
}

export default App;
