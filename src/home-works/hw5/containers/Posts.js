
import React from 'react';
import LoadingOverlay from '../../../class-works/cw2/life-cycle-example/components/LoadingOverlay';
import PostItem from '../../../class-works/cw2/life-cycle-example/components/PostItem';
import useData from '../hooks/useData';


export default function PostsPage() {

    const [posts, isLoading] = useData('/posts', []);

    return (
        <div className='post-list-wrapper'>
            <LoadingOverlay active={isLoading} />
            {posts.map(post => <PostItem key={post.id} post={post} />)}
        </div>
    )
}



