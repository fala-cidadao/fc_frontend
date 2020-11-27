import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SingleProblem from '../pages/Dashboard/Problem/SingleProblem';
const Problems = React.lazy(
  () => import('../pages/Dashboard/Problem/Problems')
);

const Map = React.lazy(() => import('../pages/Dashboard/Map'));
const ChangeProfileInformation = React.lazy(
  () => import('../pages/Change-Profile-Information')
);

const ProblemAddImage = React.lazy(
  () => import('../pages/Dashboard/Problem/ProblemAddImage')
);

export default function DashboardRoutes() {
  return (
    <Switch>
      <Route path='/dashboard/problems' component={Problems} />
      <Route
        path='/dashboard/problem/addImage/:id'
        component={ProblemAddImage}
      />
      <Route path='/dashboard/problem/:id' component={SingleProblem} />
      <Route path='/dashboard/map' component={Map} />
      <Route
        path='/dashboard/user-config/:id'
        component={ChangeProfileInformation}
      />
    </Switch>
  );
}
