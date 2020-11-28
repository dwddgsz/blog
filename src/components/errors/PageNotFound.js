import React from 'react'
import history from '../../history'
import Error from '../templates/Error';

const PageNotFound = () => {

    return <Error title="Page Not Found" buttonText="Home" handleOnClick={()=>{history.push('/')}}/>

}

export default PageNotFound
