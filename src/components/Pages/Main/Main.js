import React from 'react';
import Services from '../../services/Services';

import Feature from '../Features/Feature';
import Header from '../Header/Header';
import Mechaniques from '../Mechaniques/Mechaniques';

const Main = () => {
     return (
          <div>
               <Header />
               <Feature />
               <Services />
               <Mechaniques />
          </div>
     );
};

export default Main;