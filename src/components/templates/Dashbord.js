import React from 'react';
import Title from '../templates/Title';
import HeroSmall from '../templates/HeroSmall';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const DashboardWrapper = styled.div`
max-width:1200px;
min-height:600px;
margin:0 auto;
.dashboard {
    &__items {
        display:flex;
        justify-content:center;
        margin:0 auto 50px;
    }
    &__item {
        &:not(:last-child){
            margin-right:20px;
        }
    }
    &__link {
        font-size:1.6rem;
        color: var(--black);
    }
}
`

const Dashbord = (props) => {
    return (
        <>
        <HeroSmall />
        <Title>Dashboard</Title>
        <DashboardWrapper>
        <ul className="dashboard__items">
            <li className="dashboard__item"><Link className="dashboard__link" to="/dashboard-profile">Profile</Link></li>
            <li className="dashboard__item"><Link className="dashboard__link" to="/dashboard-create">Create</Link></li>
            {props.userData.role === 1 ? (<li className="dashboard__item"><Link className="dashboard__link" to="/dashboard-accept">Accept</Link></li>) : null}
        </ul>
        {props.children}
        </DashboardWrapper>
        </>
    )
}

export default Dashbord
