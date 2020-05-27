import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderRoutes from "./router/renderRoutes";
import router from "./router/router";
import PageLayout from "./layouts/PageLayout"

export interface Props {
}

interface State {
}

class App extends React.PureComponent<Props, State> {

  state = {}

  render() {
    return (
      <PageLayout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router>
            {renderRoutes(router)}
          </Router>
        </React.Suspense>
      </PageLayout>
    );
  }
}

export default App;
