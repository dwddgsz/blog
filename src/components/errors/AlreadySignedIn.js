import React from 'react'
import history from '../../history'
import Error from '../templates/Error';



const AlreadySignedIn = () => {

    return <Error title="You Are Already Signed In" buttonText="Home" handleOnClick={()=>{history.push('/')}}/>

}

export default AlreadySignedIn
