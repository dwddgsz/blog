import React from 'react'
import Error from '../templates/Error';
import history from '../../history'

const PermissionRequired = () => {
    return <Error title="You Need To Be Signed In" buttonText="Sign In" handleOnClick={()=>{history.push('/sign')}}/>

}
export default PermissionRequired;
