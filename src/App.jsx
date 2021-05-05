import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Work from './Pages/Work/Work'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Nav from './Nav'
import './Styles/App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Work} /> 
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  )}

export default App;