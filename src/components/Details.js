import React from 'react'
import styled from 'styled-components';
import Title from './templates/Title';
import HeroSmall from './templates/HeroSmall';

const DetailsWrapper = styled.article`
.details{

&__text-container {
    margin:0 auto;
    max-width:1200px;
}
&__author {
padding: 0 10px 30px;
font-size:2rem;
font-weight:bold;
}
&__description {
    padding: 0 10px 80px;
    font-size:1.6rem;
    line-height:1.5;
}
}
`


const Details = () => {
    return (
        <DetailsWrapper>
            <HeroSmall />
            <Title>Post name</Title>
            <div class="details__text-container">
                <p className="details__author">By <span>hello</span></p>
                <p className="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, totam aliquid assumenda facere similique accusamus nesciunt amet optio nihil, sit ut veniam culpa eligendi reiciendis in, rerum laboriosam et quo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos. Inventore tenetur odit odio amet, voluptatibus illum voluptate voluptas est veritatis nemo voluptatem modi sequi. Minus, deleniti! Sunt esse expedita ab quos architecto quo officiis, in dicta magni eligendi neque nesciunt vitae facilis, distinctio necessitatibus. Illum temporibus iste cupiditate repellat porro ullam sint quia sunt vero nulla, rerum dicta minus harum, necessitatibus similique blanditiis reprehenderit repellendus doloremque perferendis quasi minima iure odio eaque. Assumenda debitis iste consequatur. Aliquam, consequatur, voluptatem cum eligendi quam nostrum soluta doloribus quae eum, repudiandae aliquid error consequuntur tempora ducimus? Explicabo ab mollitia soluta amet numquam. </p>
            </div>
        </DetailsWrapper>
    )
}

export default Details
