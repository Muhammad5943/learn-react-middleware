import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
// Cara 1
/* import Authenticated from '../middleware/Authenticated'
import Guest from '../middleware/Guest' */

// Cara 2
import * as Middleware from '../middleware/App'

function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="mt-4"></div>
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/dashboard">
                    <Middleware.Authenticated>
                        <Dashboard />
                    </Middleware.Authenticated>
                </Route>

                <Route path="/register">
                    <Middleware.Guest>
                        <Register />
                    </Middleware.Guest>
                </Route>

                <Route path="/login">
                    <Middleware.Guest>
                        <Login />
                    </Middleware.Guest>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router