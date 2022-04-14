import React from 'react';
import Services from '../../services/Services';
import Footer from '../../Shared/Footer/Footer';
import NavbarB from '../../Shared/NavbarB/NavbarB';
import Feature from '../Features/Feature';
import Header from '../Header/Header';
import Mechaniques from '../Mechaniques/Mechaniques';

const Main = () => {
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
};

export default Main;