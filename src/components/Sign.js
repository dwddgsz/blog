import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import HeroSmall from './templates/HeroSmall';
import Button from './templates/Button';

const FormWrapper = styled.div`
min-height:100vh;
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
.form__errorMessage {
    font-size:1.4rem;
    text-align:center;
    color: red;
}
.validation-rules {
    text-align:center;
    font-size:1.3rem;
    li {
        &:first-child{
            padding-bottom:5px;
        }
        padding-bottom:3px;
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
    signIn:true,
    }

    handleOnChange = (e) =>{
        this.setState((prevState)=>{
            return {...prevState,formData: {
                ...prevState.formData,
                [e.target.name]: e.target.value,
            }}
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    changeType = () => {
        this.setState(prevState=>{return{...prevState,signIn:!prevState.signIn,}})
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
                        <p></p>
                </div>
                :
                null}
                <div className="form__field">
                    <label htmlFor="signInEmail">Email</label>
                    <input type="email" id="signInEmail" name="email" value={this.state.formData.email} onChange={this.handleOnChange}></input>
                        <p></p>
                </div> 
                <div className="form__field">
                    <label htmlFor="signInPassword">Password</label>
                    <input type="password" id="signInPassword" name="password" value={this.state.formData.password} onChange={this.handleOnChange}></input>
    <p></p>
                </div>
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
