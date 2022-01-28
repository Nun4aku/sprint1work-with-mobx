import React from "react";
import PostItem from './PostItem';
import '../App.css'


const PostList = ( {posts, PostListTitle, remove} ) => {

    return (
        <div>
            <h1 className="h1Main">{PostListTitle}</h1>
            <div>
                {posts.map(post =>
                <PostItem remove = {remove} post={post} key={post.id}/>
                )}
            </div>
        </div>
    )
}

export default PostList;