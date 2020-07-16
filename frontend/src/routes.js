import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Base */
import Homepage from './pages/Homepage'
 
/* Session */
import Login from './pages/Login';
import Register from './pages/Register';

/* Team Application */
import TeamDashboard from './pages/TeamDashboard';
import TeamHistory from './pages/TeamHistory';

/* Error 404 */
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />

        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        
        <Route path="/team/dashboard" exact component={TeamDashboard} />
        <Route path="/team/history" exact component={TeamHistory} />

        <Route path="/*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}