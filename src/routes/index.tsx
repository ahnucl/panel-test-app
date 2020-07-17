import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Panel from '../pages/Panel';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/panel/:panel" component={Panel} exact />
  </Switch>
);

export default Routes;
