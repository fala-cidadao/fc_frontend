import React from 'react';
import { Switch, Route } from 'react-router-dom';
const Problems = React.lazy(() => import('../pages/Dashboard/Problems'));

export default function DashboardRoutes() {
  return (
    <Switch>
      <Route path='/dashboard/problems' component={Problems} />
    </Switch>
  );
}
