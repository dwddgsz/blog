import React from 'react';
import styled from 'styled-components';
import {db} from '../../firebase';
import Dashboard from '../templates/Dashbord';
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
    },
    message:'',
    }

    componentDidMount() {
        this.setState((prevState)=>{
            return {
                formData: {
                    ...prevState,
                    nickname:this.props.userData.nickname,
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
        if (this.state.formData.nickname==='') {
            this.setState({message:'Field cannot be empty'});
            return;
        }
        db
        .collection('users')
        .doc(this.props.userData.id)
        .update({
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
        </div>
        <p className="message">{this.state.message}</p>
        <Button size="large">Submit</Button>



        </ProfileWrapper>
    </Dashboard>
    )
        }
}

export default Profile
