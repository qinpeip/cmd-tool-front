import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './login/login';
const BaseRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} >
        <Redirect from="/" to="/login"></Redirect>
      </Route>
      <Route exact path="/login" component={Login}></Route>
    </Switch>
  </HashRouter>
);
export default BaseRoute;