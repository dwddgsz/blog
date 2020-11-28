import React from 'react'
import history from '../../history'
import Error from '../templates/Error';

const RecordNotFound = () => {
    return <Error title="Record Not Found" buttonText="Home" handleOnClick={()=>{history.push('/')}}/>

}

export default RecordNotFound
