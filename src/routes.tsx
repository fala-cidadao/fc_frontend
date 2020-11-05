import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
const Login = React.lazy(() => import('./pages/Login'));
const RequestRecoverPassword = React.lazy(() => import('./pages/Request-Recover-Password'));

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
        <Route path='/login' component={Login}></Route>
        <Route path='/request-recover-password' component={RequestRecoverPassword}></Route>
      </Switch>
    </BrowserRouter>
  );
}