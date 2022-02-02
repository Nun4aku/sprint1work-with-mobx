
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import '../App.css';
import PostsStore from '../store/PostsStore';
import MyButton from "./UI/button/MyButton";
import Modal from './Modal/Modal';




const PostList =  () => {


    const [modalActive, setModalActive] = useState(false)
    const [delID, setDelID] = useState('')


    return (
        <>
            <h1 className="h1Main">Список постов</h1>
            {
                PostsStore.posts.map ( t =>
                    <div className="PostItem" key={t.id}>
                        <div className='posts'>   
                            <div>ID:{t.id}</div>
                            <div className='title_posts'>{t.title}</div>
                            <div className='title_text'>{t.body}</div>
                        </div>
                        

                        <MyButton onClick={ () => {
                                                        setDelID(t.id)
                                                        setModalActive(true) 
                                                        console.log(t.id)
                                                  }
                                          } >
                            Удалить
                        </MyButton>

                        <Modal active={modalActive} setActive={setModalActive} delID={delID}>
                            <h3>
                                Точно хотите удалить пост ID:{delID}? 
                            </h3>
                            <div className="btnDelorNo">
                                <MyButton 
                                    onClick={ () => {
                                                        PostsStore.delPost(delID)
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
