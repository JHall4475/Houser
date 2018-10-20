import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Wizard from './Component/Wizard/Wizard';
import React from 'react'

export default (
<Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard}></Route>
    
</Switch>)
