import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import renderRoutes from "./router/renderRoutes";
import router from "./router/router";

export interface Props {
}

interface State {
}

class App extends React.PureComponent<Props, State> {

  state = {}

  render() {
    return (
      <div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router>
            {renderRoutes(router)}
          </Router>
        </React.Suspense>
      </div>
    );
  }
}

export default App;
