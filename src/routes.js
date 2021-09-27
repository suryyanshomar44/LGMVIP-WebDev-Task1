import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Gallery from "./Gallery"
import Resources from './Resources'




export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/features" exact component={Resources} />

                
            </Switch>
        </BrowserRouter>
    )
}

