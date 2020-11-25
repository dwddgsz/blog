import React from 'react'
import styled from 'styled-components';


const TitleWrapper = styled.h2`
    text-align: center;
    font-size: 3.5rem;
    margin: 60px 0;
    position: relative;

&::after {
    display: block;
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 7px);
    width: 26px;
    height: 3.5px;
    background-color: black;
}
`

const Title = (props) => {
    return (
        <TitleWrapper>
            {props.children}
        </TitleWrapper>
    )
}

export default Title
