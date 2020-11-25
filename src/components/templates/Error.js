import React from 'react'
import Button from '../templates/Button';
import Title from '../templates/Title';
import HeroSmall from '../templates/HeroSmall';
import styled from 'styled-components';


const ErrorWrapper = styled.section`
max-width:1200px;
margin:0 auto;
min-height:60vh;
max-height:900px;
`


const Error = (props) => {

    return (
        <>
        <HeroSmall />
        <ErrorWrapper>
        <Title>{props.title}</Title>
        <Button size="large" handleOnClick={props.handleOnClick}>{props.buttonText}</Button>
        </ErrorWrapper>
    </>
    )
}

export default Error;