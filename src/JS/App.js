import React from 'react'
import '../CSS/App.css';
import Header from './Header';
import Carousel from './Carousel';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import GstFiling from './GstFiling';
import Menu from './Menu';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/gst-filing">
            <Header />
            <Menu />
            <GstFiling />
            <Header />
          </Route>

          <Route path="/">
            <Header />
            <Menu />
            <Carousel />
            <Home />
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
