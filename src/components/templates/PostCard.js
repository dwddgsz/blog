import React from 'react'
import styled from 'styled-components';
import Button from '../templates/Button';
import history from '../../history'


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
    filter:brightness(65%);
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


const Card = ({element}) => {
    const handleOnClick = (e) =>{
        const id = e.target.parentElement.getAttribute('data-id');
        history.push(`/details/${id}`)
    }
    return (
        <PostCardWrapper data-id={element.id}>
                <img src={element.image} className="post__img"></img>
                <h4 className="post__title">{element.title}</h4>
                <p className="post__author">By <span>{element.by}</span></p>
                <span className="post__date">{element.title}</span>
                <Button handleOnClick={handleOnClick}>Read more</Button>
        </PostCardWrapper>
    )
}

export default Card
