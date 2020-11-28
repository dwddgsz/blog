import React from 'react';
import {Router,Switch,Route} from 'react-router';
import history from './history/index'
import {auth,db} from './firebase'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Footer from './components/Footer';
import Sign from './components/Sign';
import Start from './components/dashboard/Start';
import Profile from './components/dashboard/Profile'
import Create from './components/dashboard/Create'
import Accept from './components/dashboard/Accept'
import AlreadySignedIn from './components/errors/AlreadySignedIn';
import PermissionRequired from './components/errors/PermissionRequired';
import PageNotFound from './components/errors/PageNotFound';



class App extends React.Component {
    state = {
        isSignedIn: false,
        userData: null,
    }
    componentDidMount() {
        auth.onAuthStateChanged((user)=>{
            if(user) {
                db.collection('users').doc(user.uid).get()
                .then((response)=>{
                    this.setState({isSignedIn:true,userData:response.data()});
                })

            }else {
                this.setState({isSignedIn:false,userData:''})
            }
        })
        
    }
    render(){
        let {isSignedIn,userData} = this.state;
        return (

        <Router history={history}>
                <Navbar isSignedIn={isSignedIn} userData={userData}/>
                <Switch>
                    <Route path="/details/:id" component={Details} />
                    <Route path="/dashboard-profile" render={()=>{
                        if (isSignedIn === true) {
                            return <Profile isSignedIn={isSignedIn} userData={userData}/>
                        } else {
                            return <PermissionRequired />
                        }
                    }}/>
                    <Route path="/dashboard-create" render={()=>{
                        if (isSignedIn === true) {
                            return <Create isSignedIn={isSignedIn} userData={userData}/>
                        } else {
                            return <PermissionRequired />
                        }
                    }}/>
                    <Route path="/dashboard-accept" render={()=>{
                        if (isSignedIn === true) {
                            return <Accept isSignedIn={isSignedIn} userData={userData}/>
                        } else {
                            return <PermissionRequired />
                        }
                    }}/>
                    <Route path="/dashboard" render={()=>{
                        if (isSignedIn === true) {
                            return <Start isSignedIn={isSignedIn} userData={userData}/>
                        } else {
                            return <PermissionRequired />
                        }
                    }}/>
                    <Route path="/sign" component={isSignedIn?AlreadySignedIn:Sign}/>
                 <Route path="/" exact render={()=>{
                     return <Home isSignedIn={isSignedIn} userData={userData}/>}}/>
                    <Route component={PageNotFound}/>
                </Switch>
                <Footer/>
        </Router>
    )
    }
}

export default App
