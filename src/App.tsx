import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout"
import Loading from "@components/Loading"

export interface Props {
}

interface State {
}

class App extends React.PureComponent<Props, State> {

  state = {}

  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Router>
          <Route path="/" component={PageLayout}></Route>
        </Router>
      </React.Suspense>
    );
  }
}

export default App;
