import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home';
import View404 from './views/View404';

function Routes (){
    return(
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <Redirect to="/" />
        </Route>
        <Route path="*">
            <View404 />
        </Route>
      </Switch>
    );
};

export default Routes;