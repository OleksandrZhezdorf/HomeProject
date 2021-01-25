
import React from 'react';
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';
import PostItem from '../../../class-works/cw2/life-cycle-example/components/PostItem';
import useData from '../hooks/useData';


export default function Posts({ userId }) {
    const postsPath = userId ? `/users/${userId}/posts` : '/posts';
    const [posts, isFetching] = useData(postsPath, []);
    console.log(posts);

    return (
        <div className='post-list-wrapper'>
            <LoadingOverlay active={isFetching} />
            {posts.map(post=> <PostItem key={post.id} post={post} />)}
        </div>
    )
}



