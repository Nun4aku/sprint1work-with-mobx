import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import '../App.css'
import MyTextArea from './UI/MyTextArea/MyTextArea';

import PostsStore from "../store/PostsStore";
import { observer } from 'mobx-react';

const PostForm = ( {create} ) => {

    return (
        <form className="add_form">
            <MyInput
                name="title"
                value={PostsStore.addPost.title}
                onChange={ (e) => PostsStore.setAddPost( e.target ) }
                type="text" 
                placeholder='название поста' 
            />
            
            <MyTextArea 
                rows="20"
                name="body"
                value={PostsStore.addPost.body}
                onChange={ e => PostsStore.setAddPost( e.target ) }
                type="text" 
                placeholder='текст поста' 
            />
            <MyButton onClick={ (e) =>  { 
                                            e.preventDefault();
                                            PostsStore.addPostFunction()
                                        } 
                              }>
                Создать пост
            </MyButton>
        </form>
    )
}

export default observer(PostForm);




/*

import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import '../App.css'

const PostForm = ( {create} ) => {

    const [post, setPost] = useState( {title: '', body: ''} )

    const addNewPost = (e) => {
        e.preventDefault();
        
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost( {title: '', body: ''} )
      }

    return (
        <form className="add_form">
            <MyInput
                value={post.title}
                onChange={e => setPost( {...post, title: e.target.value} )}
                type="text" 
                placeholder='название поста' 
            />
            <MyInput 
                value={post.body}
                onChange={e => setPost( {...post, body: e.target.value} )}
                type="text" 
                placeholder='текст поста' 
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm;

*/