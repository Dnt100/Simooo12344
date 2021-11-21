import React from "react";

import { Route, Switch } from 'react-router-dom'


const Routers = () =>{
    return (
        <Switch>
            <Route path='/' component={Dashboard}/>
            <Route path='/admins' component={Admins}/>

        </Switch>
    )
}

export default Routes