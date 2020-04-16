import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Content from "../components/Content";

import ListScreen from "../screens/List";

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <BrowserRouter basename="/react/">
          <Switch>
            <Route exact path="/" component={ListScreen} />
          </Switch>
        </BrowserRouter>
      </Content>
    </>
  );
};

export default App;
