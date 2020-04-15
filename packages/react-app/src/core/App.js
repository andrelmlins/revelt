import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ListScreen from "../screens/List";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ListScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
