import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SingleProblem from '../pages/Dashboard/SingleProblem';
const Problems = React.lazy(() => import('../pages/Dashboard/Problems'));
const Map = React.lazy(() => import('../pages/Dashboard/Map'));

export default function DashboardRoutes() {
  return (
    <Switch>
      <Route path='/dashboard/problems' component={Problems} />
      <Route path='/dashboard/problem/:id' component={SingleProblem} />
      <Route path='/dashboard/map' component={Map} />
    </Switch>
  );
}
