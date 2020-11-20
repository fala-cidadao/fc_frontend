import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { isLogged } from '../utils/auth';
const Login = React.lazy(() => import('../pages/Login'));
const RequestRecoverPassword = React.lazy(
  () => import('../pages/Request-Recover-Password')
);
const Home = React.lazy(() => import('../pages/Home'));
const RecoverPassword = React.lazy(() => import('../pages/Recover-Password'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      isLogged() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login}></Route>
        <Route
          path='/request-recover-password'
          component={RequestRecoverPassword}
        ></Route>
        <Route
          path='/recover-password/:token'
          component={RecoverPassword}
        ></Route>
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
