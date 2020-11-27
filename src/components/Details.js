import React from 'react'
import styled from 'styled-components';
import Title from './templates/Title';
import HeroSmall from './templates/HeroSmall';
import {db} from '../firebase/'

const DetailsWrapper = styled.article`
.details{
&__text-container {
    margin:0 auto;
    max-width:1200px;
    min-height:600px;
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


class Details extends React.Component {
    state = {
        item:{},
    }
    componentDidMount() {
        db
        .collection('posts')
        .doc(this.props.match.params.id)
        .get()
        .then((response)=>{
            this.setState({item:response.data()})
        })
        .then(()=>{
            console.log(this.state.item)
        })

    }

    render() {
        const {item} = this.state;
    return (
        <DetailsWrapper>
            <HeroSmall image={item.image}/>
            <Title>{item.title}</Title>
            <div class="details__text-container">
                <p className="details__author">By <span>{item.by}</span></p>
                <p className="details__description">{item.content}</p>
            </div>
        </DetailsWrapper>
    )
    }
}

export default Details
