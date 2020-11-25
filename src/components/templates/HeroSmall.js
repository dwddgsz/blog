import React from 'react'
import styled from 'styled-components';


const HeroSmallWrapper = styled.header`
height: 300px;
background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .3) 6%, rgba(0, 0, 0, .75) 80%, rgba(0, 0, 0, .95) 100%), url('https://images.pexels.com/photos/5723438/pexels-photo-5723438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
@media screen and (min-width:676px) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .4) 6%, rgba(0, 0, 0, .75) 80%, rgba(0, 0, 0, .95) 100%), url('https://images.pexels.com/photos/5723438/pexels-photo-5723438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
`

const HeroSmall = () => {
    return (
        <HeroSmallWrapper/>
    )
}


export default HeroSmall
