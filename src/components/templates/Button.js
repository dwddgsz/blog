import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
display: block;
    margin: 15px auto;
    ${props=>{if(props.size==='large'){return 'width:150px;height:35px'}else{return 'width:110px;height:28px'}}};
    border: none;
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
`

const Button = (props) => {
    return (
        <ButtonWrapper size={props.size} onClick={props.handleOnClick}>
            {props.children}
        </ButtonWrapper>
    )
}

export default Button
