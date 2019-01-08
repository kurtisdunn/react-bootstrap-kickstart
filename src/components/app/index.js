import '../../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { HashRouter as Router, Route, Switch, IndexRoute, hashHistory } from 'react-router-dom';

import About from '../../views/about';
import Home from '../../views/home';
import Mainlayout from '../../layouts/main';

ReactDOM.render(
  <Router>
    <Mainlayout>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
      </Switch>
    </Mainlayout>
  </Router>,
  document.getElementById('root')
);
