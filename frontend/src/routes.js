import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />

        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/History" exact component={History} />
      </Switch>
    </BrowserRouter>
  );
}