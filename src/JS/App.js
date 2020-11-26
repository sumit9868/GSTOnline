import React from 'react'
import '../CSS/App.css';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import GstFiling from './GstFiling';
import Menu from './Menu';
import Fssai from './Fssai';
import Msme from './Msme';
import Ewaybill from './Ewaybill';
import BecomeAPartner from './BecomeAPartner';
import Pan from './Pan';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/gst-filing">
            <Header />
            <Menu />
            <GstFiling />
            <Footer />

        </Route>

        <Route path="/fssai">
            <Header />
            <Menu />
            <Fssai />
            <Footer />

        </Route>

        <Route path="/MSME">
            <Header />
            <Menu />
            <Msme />
            <Footer />

        </Route>

        <Route path="/E-way-bill">
            <Header />
            <Menu />
            <Ewaybill />
            <Footer />

        </Route>

        <Route path="/get-franchise">
            <Header />
            <Menu />
            <BecomeAPartner />
            <Footer />

        </Route>

        <Route path="/PAN">
            <Header />
            <Menu />
            <Pan />
            <Footer />

        </Route>

          <Route path="/">
            <Header />
            <Menu />
            <Carousel />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
