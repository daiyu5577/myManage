import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import tool from "@utils/index"

const renderRoutes = (routes: any, extraProps = {}, switchProps = {}) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i: number) => (
        route.redirect ?
          <Redirect key={route.key || i} exact={route.exact} path={route.path} push to={{ pathname: route.redirect }} /> :
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              const auth = tool.getData('token');
              if (route.requiresAuth && !auth) {
                return <Redirect to={{ pathname: `/login`, state: { from: props.location } }} />
              }
              return <route.component {...props} {...extraProps} route={route} />
            }}
          />
      ))}
    </Switch>
  ) : null;

export default renderRoutes