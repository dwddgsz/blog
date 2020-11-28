import React from 'react';
import {db} from '../../firebase';
import {firebaseLooper} from '../../firebase/firebaseLooper';
import Dashboard from '../templates/Dashbord';
import Button from '../templates/Button'
import PostsList from '../templates/PostsList';


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
    }

    postButton = () => {
        if (this.props.isSignedIn && this.props.userData.role===1) {
        return <Button handleOnClick={(e)=>{
            const id = e.target.parentElement.getAttribute('data-id');
            db
            .collection('posts')
            .doc(id)
            .update({
                accepted:true,
            })
            .then(()=>{
                window.location.reload(false);
            })
        }}>Accept</Button>}
        else {
            return null;
        }
    }

    render() {
    return (
        <Dashboard userData={this.props.userData}>
            <PostsList convertedData={this.state.convertedData} postButton={this.postButton}>
            </PostsList>
        </Dashboard>
    )
    }
}

export default Accept
