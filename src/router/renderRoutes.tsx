import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const renderRoutes = (routes: any, extraProps = {}, switchProps = {}) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i: number) => (
        route.redirect ?
          <Redirect key={route.key || i} exact={true} path={route.path} push to={{ pathname: route.redirect }} /> :
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              if (!route.requiresAuth) {
                return <route.component {...props} {...extraProps} route={route} />
              }
              return <Redirect to={{ pathname: `/login`, state: { from: props.location } }} />
            }}
          />
      ))}
    </Switch>
  ) : null;

export default renderRoutes