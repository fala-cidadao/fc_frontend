import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
/* const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogged() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
 */

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
