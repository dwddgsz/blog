import React from 'react';
import {Router,Switch,Route} from 'react-router';
import history from './history/index'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Footer from './components/Footer';
import Sign from './components/Sign';
import styled from 'styled-components';
import Start from './components/dashboard/Start';
import Profile from './components/dashboard/Profile'
import Create from './components/dashboard/Create'
import Accept from './components/dashboard/Accept'
import AlreadySignedIn from './components/errors/AlreadySignedIn';
import PermissionRequired from './components/errors/PermissionRequired';
import PageNotFound from './components/errors/PageNotFound';
import RecordNotFound from './components/errors/RecordNotFound';



const App = () => {
    return (
        <Router history={history}>
                <Navbar/>
                <Switch>
                    <Route path="/details/:id" component={Details} />
                    <Route path="/dashboard-profile" component={Profile} />
                    <Route path="/dashboard-create" component={Create} />
                    <Route path="/dashboard-accept" component={Accept} />
                    <Route path="/dashboard" component={Start} />
                    <Route path="/sign" exact component={Sign}/>
                    <Route path="/" exact component={Home}/>
                    <Route component={PageNotFound}/>
                </Switch>
                <Footer/>
        </Router>
    )
}

export default App
