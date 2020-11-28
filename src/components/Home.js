import React from 'react';
import styled,{keyframes} from 'styled-components';
import {db} from '../firebase'
import {firebaseLooper} from '../firebase/firebaseLooper'
import Button from './templates/Button'
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

.sort {
    display:flex;
    justify-content:center;
    width:300px;
    margin:0 auto;
    padding:15px 0 60px;
    &__input {
        margin-right:15px;
        border:none;
        width:220px;
        border-bottom:2px solid var(--black);
        &:focus {
            outline:none;
            opacity:.5;
        }
    }

    &__button {
        border:none;
        font-size:17px;
        background-color:transparent;
        cursor:pointer;
    }
}
`

class Home extends React.Component {
    state = {
        convertedData:{},
        fullData:{},
        sort:'',
    }

    componentDidMount() {
        db
        .collection('posts')
        .where('accepted','==',true)
        .get()
        .then((snapshot)=>{
            const convertedData = firebaseLooper(snapshot);
            this.setState({convertedData});
            this.setState({fullData:convertedData});
        })
    }

    
    
    scrollToPosts = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    postButton = () => {
        if (this.props.isSignedIn && this.props.userData.role===1) {
        return <Button handleOnClick={(e)=>{
            const id = e.target.parentElement.getAttribute('data-id');
            db
            .collection('posts')
            .doc(id)
            .delete()
            .then(()=>{
                window.location.reload(false);
            })
        }}>Delete</Button>}
        else {
            return null;
        }
    }

    sortData = (e)=>{
        e.preventDefault();
        this.setState({convertedData:this.state.fullData.filter((e)=>{
            if (e.title.toUpperCase().includes(this.state.sort.toUpperCase()) || e.content.toUpperCase().includes(this.state.sort.toUpperCase())) {
                return e
            }
        })});
        
        };

    render() {
        return (
        <HomeWrapper>
        <header className="hero">
        <button className="hero__button" onClick={this.scrollToPosts}>
        <div className="hero__arrow"></div>
        </button>
    </header>
        <Title>Posts</Title>
        <form onSubmit={this.sortData} className="sort">
        <input className="sort__input" type="text" value={this.state.sort} onChange={(e)=>this.setState({sort:e.target.value})}></input>
        <button className="sort__button"><span class="fas fa-search"></span></button>
        </form>
        <PostsList convertedData={this.state.convertedData} postButton={this.postButton}/>
        </HomeWrapper>
    )
        }
}

export default Home;
