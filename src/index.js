import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
:root {
    --white:#fff;
    --black:#1a1a1a;
    --grey: #aaa;
} 
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,body {
    height:100%;
}
html {
    font-size:62.5%;
    font-family: 'Montserrat', sans-serif;
    color: var(--black);
}
body {
    background-color: var(--white);
}
button {
    font-family: 'Montserrat', sans-serif;
}
ul {
    list-style:none;
}
a {
    text-decoration:none;
    color: var(--white);
}
img {
    display:block;
}
button,a {
    transition: opacity .3s;
}
button:focus,a:focus,a:active {
    outline:none;
}
button:hover,button:focus,a:focus,a:active,a:hover {
    opacity:.6;
}

.container {
    max-width:1200px;
    margin:0 auto;
}
`


ReactDOM.render(
    <>
    <GlobalStyle/>
    <App/>
    </>,
    document.getElementById('root')
)