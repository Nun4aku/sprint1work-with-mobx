
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import '../App.css';
import PostsStore from '../store/PostsStore';
import MyButton from "./UI/button/MyButton";
import Modal from './Modal/Modal';




const PostList =  () => {


    const [modalActive, setModalActive] = useState(false)

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
                        

                        <MyButton onClick={ () => setModalActive(true) } >
                            Удалить
                        </MyButton>
                        <Modal  active={modalActive} setActive={setModalActive}>
                            <h3>
                                Точно хотите ужалить этот пост?
                            </h3>
                            <div className="btnDelorNo">
                                <MyButton 
                                    onClick={ () => {
                                                        PostsStore.delPost(t.id)
                                                        setModalActive(false)
                                                    } 
                                            } 
                                >
                                    удалить
                                </MyButton>
                                <MyButton 
                                    onClick={ () => setModalActive(false) } 
                                >
                                    нет
                                </MyButton>
                            </div>
                        </Modal>
                    </div>
                )
            }
        </>
  )
}

export default observer (PostList);
