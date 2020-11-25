import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
display: block;
    margin: 15px auto;
    ${props=>{if(props.size==='large'){return 'padding:8px 25px'}else{return 'padding:5px 15px'}}};
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
