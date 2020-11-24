import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { isLogged } from '../utils/auth';
const Login = React.lazy(() => import('../pages/Login'));
const Signup = React.lazy(() => import('../pages/Signup'));
const RequestRecoverPassword = React.lazy(
  () => import('../pages/Request-Recover-Password')
);
const Home = React.lazy(() => import('../pages/Home'));
const RecoverPassword = React.lazy(() => import('../pages/Recover-Password'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const ChangeProfileInformation = React.lazy(() => import('../pages/Change-Profile-Information'));
 
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
        <Route path='/signup' component={Signup}></Route>
        <Route
          path='/request-recover-password'
          component={RequestRecoverPassword}
        ></Route>
        <Route
          path='/recover-password/:token'
          component={RecoverPassword}
        ></Route>
        <Route path='/change-profile-information' component={ChangeProfileInformation}></Route>
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
