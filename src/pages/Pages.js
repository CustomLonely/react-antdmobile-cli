import React from 'react';
import {Switch, Route} from 'react-router-dom';
//患友
import Home from './home/Home'; //患友首页

const Pages = () => (
  <div>
    <Switch>
      {/* 患友 */}
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
      
    </Switch>
  </div>
);

export default Pages;
