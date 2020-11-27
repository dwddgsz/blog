import React, { Children } from 'react'
import styled from 'styled-components';
import PostCard from './PostCard';

const PostsListWrapper = styled.ul`
max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const PostsList = ({convertedData,postButton},props) => {
    
    const renderPosts = () => {
        console.log(props);
    if (Object.keys(convertedData).length === 0 && convertedData.constructor === Object){
        return;
    }
      else {  
        return convertedData.map((element)=>{
        return <PostCard key={element.id} element={element} postButton={postButton}/>
        })}}

    return (
        <PostsListWrapper>
            {renderPosts()}
        </PostsListWrapper>
    )
}

export default PostsList
