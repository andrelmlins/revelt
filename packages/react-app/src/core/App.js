import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Content from "../components/Content";

import ListScreen from "../screens/List";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <Switch>
          <Route path="/" component={ListScreen} />
        </Switch>
      </Content>
    </BrowserRouter>
  );
};

export default App;
