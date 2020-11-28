import React from 'react'
import styled from 'styled-components';
import PostCard from './PostCard';

const PostsListWrapper = styled.ul`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:stretch;
`

const PostsList = ({convertedData,postButton},props) => {
    
    const renderPosts = () => {
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
