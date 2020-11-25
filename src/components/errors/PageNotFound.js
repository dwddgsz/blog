import React from 'react'
import Error from '../templates/Error';
import history from '../../history'

const PageNotFound = () => {

    return <Error title="Page Not Found" buttonText="Home" handleOnClick={()=>{history.push('/')}}/>

}

export default PageNotFound
