import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {auth} from '../firebase'
import history from '../history'

const NavbarWrapper = styled.div`
    .nav {
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: transparent;
    color: var(--white);
    transition: background-color .3s;
    &__logo {
    font-size: 17px;
    text-shadow: 1px 1px 1px black;
    }
    &__items {
    display:flex;
    }  
    &__item:not(:last-child) {
        margin-right:10px;
    }
    &__link {
    font-size: 1.5rem;
    color: var(--white);
    text-shadow: 1px 1px 1px black;
    &--button {
        border:none;
        outline:none;
        background-color:transparent;
        cursor:pointer;
    }
    }   
    &.scrolled{
    background-color: var(--black);
    box-shadow: 1px 1px 15px rgba(0, 0, 0, .5);
}
}



`

class Navbar extends React.Component {
    state = {
        isScrolled: false,
    }

    componentDidMount(){
    window.onscroll = () => {
        if (window.scrollY <= 10) {
            this.setState({isScrolled:false});
        } else {
            this.setState({isScrolled:true});
        }
    };
}

    handleSignOut = () => {
        auth.signOut()
        .then(()=>{
            history.push('/sign')
        })
    }

    render(){
        return (
        <NavbarWrapper>
            <nav className={this.state.isScrolled? 'nav scrolled' : 'nav'}>
                <h1 className="nav__logo"><Link to="/">Home</Link></h1>
                <ul className="nav__items">
                    {this.props.isSignedIn ? 
                    (
                    <>
                    <li className="nav__item"><Link to="/dashboard" className="nav__link">Dashboard</Link></li>
                    <li className="nav__item" onClick={this.handleSignOut}><button to="/sign" className="nav__link nav__link--button">Sign Out</button></li>
                    </>
                    )
                    :
                    (
                    <li className="nav__item"><Link to="/sign" className="nav__link">Sign In</Link></li>
                    )
                    }
                </ul>
            </nav>
        </NavbarWrapper>
        )
    }
}

export default Navbar
