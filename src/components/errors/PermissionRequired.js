import React from 'react'
import history from '../../history'
import Error from '../templates/Error';

const PermissionRequired = () => {
    return <Error title="You Need To Be Signed In" buttonText="Sign In" handleOnClick={()=>{history.push('/sign')}}/>

}
export default PermissionRequired;
