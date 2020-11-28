import React from 'react';
import styled from 'styled-components';
import {db} from '../../firebase';
import firebase from '../../firebase';
import Dashboard from '../templates/Dashbord';
import Button from '../templates/Button';

const CreateWrapper = styled.form`
display:flex;
flex-direction:column;
align-items:center;
.dashboard__field {
    display:flex;
    flex-direction:column;
    &:not(:last-child) {
        margin-bottom:30px;
    }
    input,textarea {
        width:300px;
        padding:10px;
    }
    label {
        font-size:1.6rem;
    }
    textarea {
        min-height:250px;
    }
}

` 

class Create extends React.Component {
    state = {
        formData: {
        title:'',
        content:'',
        image:'',
    },
    message:'',
    }

    handleOnChange = (e) =>{
        this.setState((prevState)=>{
            return {formData: {
                ...prevState.formData,
                [e.target.name]: e.target.value,
            },
        message:'',
    }
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.formData.title==='' || this.state.formData.content==='' || this.state.formData.imageLink==='') {
            this.setState({message:'Field cannot be empty'});
            return;
        }
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        db
        .collection('posts')
        .doc()
        .set({
            ...this.state.formData,
            createdAt: timestamp,
            by: this.props.userData.nickname,
            accepted:false,
        })
        .then(()=>{
            this.setState({
                formData: {
                    title:'',
                    content:'',
                    image:'',
                },
                message:'Succes! Now Your post need to be accepted',
            })
        })
    }

    render() {
        return (
    <Dashboard  userData={this.props.userData}>
        <CreateWrapper onSubmit={this.handleOnSubmit}>
        <div className="dashboard__field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={this.state.formData.title} onChange={this.handleOnChange}></input>
                        <p></p>
        </div>
                <div className="dashboard__field">
                    <label htmlFor="signInPassword">Content</label>
                    <textarea id="signInPassword" name="content" value={this.state.formData.content} onChange={this.handleOnChange}></textarea>
    <p></p>
                </div>
                <div className="dashboard__field">
                    <label htmlFor="imageLink">Image Path</label>
                    <textarea id="imageLink" name="image" value={this.state.formData.image} onChange={this.handleOnChange}></textarea>
    <p></p>
                </div>
        <p className="message">{this.state.message}</p>
        <Button size="large">Submit</Button>



        </CreateWrapper>
    </Dashboard>
    )
        }
}

export default Create
