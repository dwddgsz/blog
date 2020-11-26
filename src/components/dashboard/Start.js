import React from 'react';
import Dashboard from '../templates/Dashbord';
import styled from 'styled-components';


const StartWrapper = styled.header`
h3 {
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    font-weight:400;
    letter-spacing:2px;
    span {
        padding-left:7px;
    }
}
`

const Start = () => {
    return (
        <Dashboard>
        <StartWrapper>
        <h3>Welcome <span> User</span></h3>
        </StartWrapper> 
        </Dashboard>
    )
}

export default Start
