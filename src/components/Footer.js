import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.footer`
padding:20px 0;
font-size:1.6rem;
text-align:center;
background-color: var(--black);
color:var(--grey);
div {
    margin:10px auto 0;
    width:80px;
    display:flex;
    justify-content:space-between;
    button {
        background-color:transparent;
        border:none;
        color: var(--grey);
        cursor:pointer;
    }
    span {
        font-size:18px;
    }
}
`

const Footer = () => {
    return (
        <FooterWrapper>
            <p>Find us on</p>
            <div>
            <button><span className="fab fa-facebook-square"></span></button>
            <button><span className="fab fa-twitter-square"></span></button>
            <button><span className="fab fa-instagram-square"></span></button>
            </div>
        </FooterWrapper>
    )
}

export default Footer
