import React from 'react'
import styled from 'styled-components';
import Button from '../templates/Button';


const PostCardWrapper =  styled.li`
width: 300px;
    margin: 0 35px;
    margin-bottom: 70px;
    position: relative;
    text-align: center;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, .5);
   .post {
    &__img {
    width: 100%;
    }

&::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, .2) 6%, rgba(0, 0, 0, .6) 80%, rgba(0, 0, 0, .8) 100%);
    z-index: 2;
}

&__title {
    font-size:1.6rem;
    padding-top: 10px;
}
&__author {
    font-size: 1.4rem;
    padding-top: 6px;
}

&__date {
    display: block;
    padding-top: 10px;
    font-size: 1.2rem;
    color: var(--grey-dark);
}

}
`


const Card = () => {
    return (
        <PostCardWrapper>
                <img src="https://images.pexels.com/photos/992731/pexels-photo-992731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="post__img"></img>
                <h4 className="post__title">hello</h4>
                <p className="post__author">By <span>hello</span></p>
                <span className="post__date">25-02-2012</span>
                <Button>Read more</Button>
        </PostCardWrapper>
    )
}

export default Card
