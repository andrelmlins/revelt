import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";

import ListScreen from "../screens/List";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={ListScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
