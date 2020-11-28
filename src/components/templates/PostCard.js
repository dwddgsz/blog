import React from 'react'
import styled from 'styled-components';
import history from '../../history'
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
    height:180px;
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


const Card = ({element,postButton}) => {
    const handleOnClick = (e) =>{
        const id = e.target.parentElement.getAttribute('data-id');
        history.push(`/details/${id}`)
    }
    return (
        <PostCardWrapper data-id={element.id}>
                <img src={element.image} className="post__img" alt='post-img'></img>
                <h4 className="post__title">{element.title}</h4>
                <p className="post__author">By <span>{element.by}</span></p>
                <Button handleOnClick={handleOnClick}>Read more</Button>
                {postButton()}
        </PostCardWrapper>
    )
}

export default Card
