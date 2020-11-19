import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
const Login = React.lazy(() => import('./pages/Login'));
const RequestRecoverPassword = React.lazy(
  () => import('./pages/Request-Recover-Password')
);
const Home = React.lazy(() => import('./pages/Home'));
const RecoverPassword = React.lazy(() => import('./pages/Recover-Password'));
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
        <Route path='/login' component={Login}></Route>
        <Route
          path='/request-recover-password'
          component={RequestRecoverPassword}
        ></Route>
        <Route path='/recover-password' component={RecoverPassword}></Route>
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
