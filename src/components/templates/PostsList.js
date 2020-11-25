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

const PostsList = () => {
    return (
        <PostsListWrapper>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </PostsListWrapper>
    )
}

export default PostsList
