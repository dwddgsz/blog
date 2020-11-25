import React from 'react';
import Dashboard from '../templates/Dashbord';
import styled from 'styled-components';
import Button from '../templates/Button';


const ProfileWrapper = styled.form`
display:flex;
flex-direction:column;
align-items:center;
.dashboard__field {
    display:flex;
    flex-direction:column;
    &:not(:last-child) {
        margin-bottom:30px;
    }
    input {
        width:300px;
        padding:10px;
    }
    label {
        font-size:1.6rem;
    }
}

`

class Profile extends React.Component {
    state = {
        formData: {
        nickname:'',
        email:'',
        password:'',
    }
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

    render() {
        return (
    <Dashboard>
        <ProfileWrapper onSubmit={this.handleOnSubmit}>
        <div className="dashboard__field">
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" id="nickname" name="nickname" value={this.state.formData.nickname} onChange={this.handleOnChange}></input>
                        <p></p>
        </div>
        <div className="dashboard__field">
                    <label htmlFor="signInEmail">Email</label>
                    <input type="email" id="signInEmail" name="email" value={this.state.formData.email} onChange={this.handleOnChange}></input>
                        <p></p>
                </div> 
                <div className="dashboard__field">
                    <label htmlFor="signInPassword">Password</label>
                    <input type="password" id="signInPassword" name="password" value={this.state.formData.password} onChange={this.handleOnChange}></input>
    <p></p>
                </div>
        <Button size="large">Submit</Button>



        </ProfileWrapper>
    </Dashboard>
    )
        }
}

export default Profile
