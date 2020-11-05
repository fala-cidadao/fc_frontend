import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
const Login = React.lazy(() => import('./pages/Login'));
const ChangeProfileInformation = React.lazy(() => import('./pages/Change-Profile-Information'));

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
        <Route path='/change-profile-information' component={ChangeProfileInformation}></Route>
      </Switch>
    </BrowserRouter>
  );
}