import React from 'react';
import Header from './header';
import PosList from "./posList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./article";
import UserInfo from "./userInfo";

function App() {
  return (
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route path="/article/" component={Article}/>
              <Route path="/userinfo/:username" component={UserInfo}/>
              <Route path="/" component={PosList}/>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
