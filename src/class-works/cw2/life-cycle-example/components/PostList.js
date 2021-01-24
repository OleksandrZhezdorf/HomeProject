import React from 'react';
import PostItem from "./PostItem";
import LoadingOverlay from "./LoadingOverlay";
import usePosts from '../hooks/use-posts';


function PostList({ onPostClick }) {
  const [ posts, loading ] = usePosts();

  return (
    <div className='post-list-wrapper'>
      <LoadingOverlay active={loading} />
      { posts.map(post => <PostItem onClick={() => onPostClick(post)} post={post} key={post.id} /> )}
    </div>
  )
}

export default PostList;