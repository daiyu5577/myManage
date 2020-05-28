import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "@components/Loading";
import PageLayout from "./layouts/PageLayout"
const Login = React.lazy(() => import('@pages/Login'));

interface Props {
}

interface State {
}

class App extends React.PureComponent<Props, State> {

  state = {}

  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <Route path="/login" exact={true} component={Login}></Route>
            <Route path="/" component={PageLayout}></Route>
          </Switch>
        </Router>
      </React.Suspense>
    );
  }
}

export default App;
