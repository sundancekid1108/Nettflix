import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home/HomeContainer";
import Header from "./Header";
import Tv from "../Routes/Tv/TvContainer";
import Search from "../Routes/Search/SearchContainer";
import Detail from "../Routes/Detail/DetailContainer";


export default () => (
  <Router>
    <>
    <Header />
      <Switch>
        <Route path="/" exact component= {Home} />
        <Route path="/tv" component = {Tv} />
        <Route path="/search" component = {Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect to="/" /> 
      </Switch>
    </> 
  </Router>
);

/**
 * HashRouter =>  URL에 #들어감 , BrowserRouter으로 변경
 * Switch로 1개의 Route만 렌더링
 * <Redirect from="*" to="/" />  => 리다이렉팅
 */