import React from 'react';
import styled from 'styled-components';
import HeroSmall from './templates/HeroSmall';
import Button from './templates/Button';
import history from '../history'
import {auth,db} from '../firebase'

const FormWrapper = styled.div`
min-height:700px;
max-height:1000px;
display:flex;
justify-content: center;
align-items:center;
.form__container{
width:300px;
padding-bottom:15px;
margin:0 auto 0;
box-shadow:0px 2px 3px rgba(0,0,0,.4);
@media screen and (min-width:767px) {
    width:360px;
}
.form__title-container {
    background-color: var(--black);
}
.form__title {
    padding: 20px 0;
    font-size:2.6rem;
    font-weight:600;
    text-align:center;
    text-shadow: 1px 1px 2px rgba(0,0,0,.4);
    text-transform:capitalize;
    letter-spacing:1px;
    color: var(--white);
}
.form {
    padding: 0 10px;
}
.form__field {
    display:flex;
    flex-direction:column;
    padding: 20px 0;
    label {
        padding:0 0 10px 5px;
        font-size:1.6rem;
        text-transform:capitalize;
        color: var(--black);
    }
    textarea,input {
        max-width:100%;
        max-height:500px;
        padding:10px;
        border-radius:0;
        border:none;
        letter-spacing:1px;
        background-color: #f7f7f7;
        color: var(--black);
        &:focus {
            background-color: #e3e3e3;
        }
    }
    p {
        padding:5px 0 0 5px;
        color: red;
    }
}
.form__change-text {
font-size:1.2rem;
text-align:center;
color: var(--black);
}
.form__change-link {
border:none;
background-color:transparent;
cursor:pointer;
font-weight:600;
padding-left:3px;
transition:.3s opacity;
color: var(--black);
&:hover,&:focus {
    opacity:.6;
}
}
.form__error {
    font-size:1.1rem;
    text-align:center;
}
.form__error-list {
    text-align:center;
    font-size:1.3rem;
    li {
        &:first-child{
            padding-bottom:7px;
            font-weight:bold;
        }
        padding-bottom:5px;
        font-size:1.1rem;
    }
}
}
` 

class Login extends React.Component {
    state = {
    formData: {
        nickname:'',
        email:'',
        password:'',
        },
    errors: {
        emailError:false,
        nicknameOrPasswordError:false,
        signInEmailError:'',
        signInPasswordError:'',
    },
    signIn:true,
    };

    handleOnChange = (e) =>{
        this.setState((prevState)=>{
            return {formData: {
                ...prevState.formData,
                [e.target.name]: e.target.value,
                    },
                    errors: {
                    emailError:false,
                    nicknameOrPasswordError:false,
                    signInEmailError:'',
                    signInPasswordError:'',
                    }
                }
        })
    }

    handleOnSubmit = (e) => {
    // SIGNING UP
        e.preventDefault();
        if (!this.state.signIn) {
        const regex = /^((?!.*[\s])(?=.*[A-Z])(?=.*\d).{8,15})/
        if (!this.state.formData.password.match(regex) || !this.state.formData.nickname.match(regex)) {
            this.setState(prevState=>{return {errors: {...prevState.errors,nicknameOrPasswordError: true,}}})
            return;
        }
        auth
        .createUserWithEmailAndPassword(this.state.formData.email,this.state.formData.password)
        .then((data)=>{
            db.collection('users').doc(data.user.uid).set({
                ...this.state.formData,
                id:data.user.uid,
                role:2
            })
        })
        .then(()=>{
            this.setState({formData: {
                nickname:'',
                email:'',
                password:'',
            }, errors: {
                emailError:false,
                nicknameOrPasswordError:false,
                }})
        })
        .then(()=>{
            history.push('/dashboard');
        })
        .catch(error=>{
            this.setState(prevState=>{return {errors: {...prevState.errors,emailError: true,}}})
        })
    }
    // SIGNING IN
    else {
        auth
        .signInWithEmailAndPassword(this.state.formData.email,this.state.formData.password)
        .then((data)=>{
            this.setState({formData: {
                email:'',
                password:'',
            }, errors: {
                signInEmailError:'',
                signInPasswordError:'',
                }})
            history.push('/');
        })
        .catch(error=>{
            switch(error.code){
                case 'auth/user-disabled':
                case 'auth/user-not-found':
                    this.setState(prevState=>{return {errors: {...prevState.errors,signInEmailError: error.message,}}})
                break;
                case 'auth/wrong-password':
                    this.setState(prevState=>{return {errors: {...prevState.errors,signInPasswordError: error.message,}}})
                break;
                default:
                return;
            }
        })
    }
    }

    changeType = () => {
        this.setState(prevState=>{return{signIn:!prevState.signIn,}})
        this.setState(
        {formData: {
            nickname:'',
            email:'',
            password:'',
        }, 
        errors: {
            signInEmailError:'',
            signInPasswordError:'',
            emailError:false,
            nicknameOrPasswordError:false,
            }})
    }


    render() {

    return (
        <>
        <HeroSmall/>
        <FormWrapper>
            <div className="form__container">
             <header className="form__title-container">
            <h2 className="form__title">{this.state.signIn? 'Sign In' :'Sign Up'}</h2>
            </header>
            <form className="form" onSubmit={this.handleOnSubmit}>
           {
           !this.state.signIn ?
            <div className="form__field">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" id="nickname" name="nickname" value={this.state.formData.nickname} onChange={this.handleOnChange}></input>
                </div>
                :
                null}
                <div className="form__field">
                    <label htmlFor="signInEmail">Email</label>
                    <input type="email" id="signInEmail" name="email" value={this.state.formData.email} onChange={this.handleOnChange}></input>
                </div> 
                <div className="form__field">
                    <label htmlFor="signInPassword">Password</label>
                    <input type="password" id="signInPassword" name="password" value={this.state.formData.password} onChange={this.handleOnChange}></input>
                </div>
           <p className="form__error">{this.state.errors.emailError? 'Invalid Email':null}</p>
           <p className="form__error">{this.state.errors.signInEmailError}</p>
           <p className="form__error">{this.state.errors.signInPasswordError}</p>
           {this.state.errors.nicknameOrPasswordError?  (<ul className="form__error-list">
                    <li>Password and Nickname:</li>
                    <li>minimun length - 8 characters</li>
                    <li>maximum length - 15 characters</li>
                    <li>must containt at least one capital letter</li>
                    <li>must contain at least one digit</li>
                    <li>shall not contain white spaces</li>
                </ul>):null}
           <Button size="large">{this.state.signIn? 'Sign In' :'Sign Up'}</Button>
            </form>
            <p className="form__change-text">
            {this.state.signIn? 'Already have an account?' :'Need to create an account?'}
            <button onClick={this.changeType} className="form__change-link">{this.state.signIn? 'Sign Up' :'Sign In'}</button>
            </p>
            </div>
        </FormWrapper>
            </>
    )
    }
}

export default Login
