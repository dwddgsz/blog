import React from 'react';
import Dashboard from '../templates/Dashbord';
import styled from 'styled-components';
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
        imageLink:'',
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
                    <textarea id="imageLink" name="imageLink" value={this.state.formData.imageLink} onChange={this.handleOnChange}></textarea>
    <p></p>
                </div>
        <Button size="large">Submit</Button>



        </CreateWrapper>
    </Dashboard>
    )
        }
}

export default Create
