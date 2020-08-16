import React from 'react'
import { Route,Switch } from 'react-router-dom'
import App from './App'

export default function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/:id">srry wrong path</Route>
        </Switch>
    )
}
