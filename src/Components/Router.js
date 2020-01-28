import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Tv from "../Routes/Tv";
import Search from "../Routes/Search";
import Header from "./Header";

export default () => (
  <Router>
    <Switch>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={Tv} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" /> 
    </Switch>
  </Router>
);

/**
 * HashRouter =>  URL에 #들어감 , BrowserRouter으로 변경
 * Switch로 1개의 Route만 렌더링
 * <Redirect from="*" to="/" />  => 리다이렉팅
 */