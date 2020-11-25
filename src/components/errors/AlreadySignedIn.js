import React from 'react'
import Error from '../templates/Error';
import history from '../../history'



const AlreadySignedIn = () => {

    return <Error title="You Are Already Signed In" buttonText="Home" handleOnClick={()=>{history.push('/')}}/>

}

export default AlreadySignedIn
