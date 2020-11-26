import React from 'react';
import Dashboard from '../templates/Dashbord';
import styled from 'styled-components';
import PostsList from '../templates/PostsList';
import {db} from '../../firebase';
import {firebaseLooper} from '../../firebase/firebaseLooper'


class Accept extends React.Component {
    state = {
        convertedData:{}
    }

    componentDidMount() {
        db
        .collection('posts')
        .where('accepted','==',false)
        .get()
        .then((snapshot)=>{
            const convertedData = firebaseLooper(snapshot);
            this.setState({convertedData});
        })
        .then(()=>{
            console.log(this.state);
        })
    }

    render() {
    return (
        <Dashboard>
            <PostsList convertedData={this.state.convertedData}>
            </PostsList>
        </Dashboard>
    )
    }
}

export default Accept
