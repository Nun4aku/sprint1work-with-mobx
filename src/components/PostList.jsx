import { observer } from 'mobx-react';
import '../App.css';
import PostsStore from '../store/PostsStore';
import MyButton from "./UI/button/MyButton";

const PostList =  () => {
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
                    <MyButton 
                        onClick={ () => PostsStore.delPost(t.id) } 
                    >
                        удалить
                    </MyButton>
                </div>
            )
        }
    </>
  )
}

export default observer (PostList);
