import React from "react";
import { Switch, Route } from "react-router-dom";

import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/details" component={Details} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
