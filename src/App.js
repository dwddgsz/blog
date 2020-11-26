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
import {auth} from './firebase'

class App extends React.Component {
    
    componentDidMount() {
        auth.onAuthStateChanged((user)=>{
            if(user) {
                this.setState({isSignedIn:true,user})
            }else {
                this.setState({isSignedIn:false})
            }
        })
    }
    state = {
        isSignedIn: false,
        userData: null,
    }
    render(){
        let isSignedIn = this.state.isSignedIn;
        return (
        <Router history={history}>
                <Navbar isSignedIn={isSignedIn}/>
                <Switch>
                    <Route path="/details/:id" component={Details} />
                    <Route path="/dashboard-profile" component={isSignedIn?Profile:PermissionRequired} />
                    <Route path="/dashboard-create" component={isSignedIn?Create:PermissionRequired} />
                    <Route path="/dashboard-accept" component={isSignedIn?Accept:PermissionRequired} />
                    <Route path="/dashboard" component={isSignedIn?Start:PermissionRequired} />
                    <Route path="/sign" component={isSignedIn?AlreadySignedIn:Sign}/>
                    <Route path="/" exact component={Home}/>
                    <Route component={PageNotFound}/>
                </Switch>
                <Footer/>
        </Router>
    )
    }
}

export default App
