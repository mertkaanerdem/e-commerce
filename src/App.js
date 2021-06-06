import React from "react";
import { Switch, Route } from "react-router-dom";

import Catalog from "./components/Catalog/Catalog";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import Basket from "./components/Basket/Basket";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/:id" component={Detail} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/basket" component={Basket} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
