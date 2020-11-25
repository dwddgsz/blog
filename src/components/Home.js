import React from 'react';
import styled,{keyframes} from 'styled-components';
import Title from './templates/Title';
import PostsList from './templates/PostsList';



const clickButton = keyframes`
  0% {
        transform: translateY(0)
    }

    20% {
        transform: translateY(-50%)
    }

    40% {
        transform: translateY(0)
    }

    100% {
        transform: translateY(0)
    }
`;

const HomeWrapper = styled.div`
.hero {
    height: 100vh;
    max-height: 1200px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .3) 6%, rgba(0, 0, 0, .75) 80%, rgba(0, 0, 0, .95) 100%), url(./images/hero-sm.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media screen and (min-width:676px) {
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .4) 6%, rgba(0, 0, 0, .75) 80%, rgba(0, 0, 0, .95) 100%), url(./images/hero-lg.jpg);
}
&__title {
    padding-bottom: 80px;
    color: var(--grey);
    font-size: 2.5rem;
    text-shadow: 1px 1px 1px black;
}

&__button {
    display: block;
    width: 35px;
    height: 35px;
    border: 2px solid var(--grey);
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    animation: ${clickButton} 5s 2s infinite;
    cursor: pointer;
}

&__arrow {
    width: 10px;
    height: 10px;
    border-right: 2px solid var(--grey);
    border-bottom: 2px solid var(--grey);
    transform: rotate(45deg);
    margin-top: 8px;
}

}
`

const Home = () => {
    const scrollToPosts = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <HomeWrapper>
        <header className="hero">
        <h2 className="hero__title">Fear is your best friend</h2>
        <button className="hero__button" onClick={scrollToPosts}>
        <div className="hero__arrow"></div>
        </button>
    </header>
        <Title>Posts</Title>
        <PostsList />
        </HomeWrapper>
    )
}

export default Home
