import React from 'react'
import Error from '../templates/Error';
import history from '../../history'

const RecordNotFound = () => {
    return <Error title="Record Not Found" buttonText="Home" handleOnClick={()=>{history.push('/')}}/>

}

export default RecordNotFound
