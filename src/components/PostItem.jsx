import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className="PostItem">
            <div className='posts'>    
                <div className='title_posts'>{props.post.title}</div>
                <div className='title_text'>{props.post.body}</div>
            </div>
            <MyButton onClick={  () => props.remove(props.post) } >удалить</MyButton>
        </div>
    )
}

export default PostItem;