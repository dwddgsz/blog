import React from 'react';
import Dashboard from '../templates/Dashbord';
import styled from 'styled-components';
import Button from '../templates/Button';
import {db} from '../../firebase';

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
    },
    message:'',
    }

    componentDidMount() {
        this.setState((prevState)=>{
            return {
                formData: {
                    ...prevState,
                    nickname:this.props.userData.nickname,
                    email:this.props.userData.email,
                    password: this.props.userData.password,
                }
            }
        })
    }

    handleOnChange = (e) =>{
        this.setState((prevState)=>{
            return {formData: {
                ...prevState.formData,
                [e.target.name]: e.target.value,
            },
            message:'',}
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.formData.nickname==='' || this.state.formData.email==='' || this.state.formData.password==='') {
            this.setState({message:'Field cannot be empty'});
            return;
        }
        db
        .collection('users')
        .doc(this.props.userData.id)
        .update({
            email: this.state.formData.email,
            password: this.state.formData.password,
            nickname: this.state.formData.nickname,
        
        })
        .then(()=>{
            this.setState({message:'Succes!'})
        })

    }

    render() {
        return (
    <Dashboard  userData={this.props.userData}>
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
        <p className="message">{this.state.message}</p>
        <Button size="large">Submit</Button>



        </ProfileWrapper>
    </Dashboard>
    )
        }
}

export default Profile
