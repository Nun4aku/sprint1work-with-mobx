import { observer } from 'mobx-react-lite';
import '../App.css';
import PostsStore from '../store/PostsStore';


const PostList = observer ( () => {
  return (
    <>
        <h1 className="h1Main">Список постов</h1>
        {

        PostsStore.posts.map ( t =>
            <div className="PostItem" key={t.id}>
                <div className='posts'>    
                    <div className='title_posts'>{t.title}</div>
                    <div className='title_text'>{t.body}</div>
                </div>
            </div>
        )

        }

    </>
  )
})

export default PostList;



/*
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

export default PostList;*/







/*
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
*/