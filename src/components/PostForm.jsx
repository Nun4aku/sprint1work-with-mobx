import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import '../App.css'



const PostForm = ( {create} ) => {

    const [post, setPost] = useState( {title: '', body: ''} )

    const addNewPost = (e) => {
        e.preventDefault();
        
        console.log(post)
        
        /*
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost( {title: '', body: ''} )
        */
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