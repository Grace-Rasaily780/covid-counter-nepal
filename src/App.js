import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js';
import Total from './component/Total.js';
import Province from './component/Province.js';
import Gender from './component/Gender.js';
import Map from './component/Map.js';
import Error from './component/Error.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        
        <Route exact path="/" component={Total} />
        <Route path="/province" component={Province} />
        <Route path="/gender" component={Gender} />
        <Route path="/map" component={Map} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
