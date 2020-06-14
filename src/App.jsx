import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Docs from "./pages/Docs";
import Tutorial from "./pages/Tutorial";

import { importMDX } from "mdx.macro";

// process.env.NODE_PATH = "src";
const Content = lazy(async () => importMDX("./Content.mdx"));
console.log(process.env);

class App extends React.Component {
  // state: State
  // props: Props

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>Test</div>
        <Router>
          <Switch>
            <Route path="/docs">
              <Docs />
            </Route>
            <Route path="/tutorial">
              <Tutorial />
            </Route>
            <Route path="/">
              <Docs />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default App;
