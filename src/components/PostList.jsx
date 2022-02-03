
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import '../App.css';
import PostsStore from '../store/PostsStore';
import MyButton from "./UI/button/MyButton";
import Modal from './Modal/Modal';
import MyInput from './UI/input/MyInput';
import MyTextArea from './UI/MyTextArea/MyTextArea';




const PostList =  ( {postArr} ) => {


    const [modalActive, setModalActive] = useState(false)
    const [modalActiveEdit, setModalActiveEdit] = useState(false)
    const [delID, setDelID] = useState('')
    const [editID, setEditID] = useState('')


    return (
        <>
            <h1 className="h1Main">Список постов</h1>
            {
                postArr.map ( t =>
                    <div className="PostItem" key={t.id}>
                        <div className='posts'>   
                            <div>ID:{t.id}</div>
                            <div className='title_posts'>{t.title}</div>
                            <div className='title_text'>{t.body}</div>
                        </div>
                        <div className="postButtons">
                            {/*кнопка ред. поста*/}
                            <MyButton 
                                onClick={ 
                                    () => {
                                        setEditID(t.id)
                                        setModalActiveEdit(true)
                                        PostsStore.getOnePost(t.id)
                                    }
                                }
                            >
                                Редактировать
                            </MyButton>
                        
                            {/*кнопка удаления поста*/}
                            <MyButton 
                                onClick={
                                    () => {
                                        setDelID(t.id)
                                        setModalActive(true)
                                    }
                                } 
                            >
                                Удалить
                            </MyButton>
                        </div>                         

                        {/*окно удаления поста*/}
                        <Modal active={modalActive} setActive={setModalActive} >
                            <h3>
                                Точно хотите удалить пост ID:{delID}? 
                            </h3>
                            <div className="btnDelorNo">
                                <MyButton 
                                    onClick={
                                        () => {
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

                        {/*окно редакт. поста*/}
                        <Modal  active={modalActiveEdit} setActive={setModalActiveEdit}>
                            <h3>
                               Ред пост ID: {editID}
                            </h3>
                            <form>
                                <div>
                                    <MyInput
                                        style={{width: '96%'}}
                                        name = 'title'
                                        value={ PostsStore.onePost.title }
                                        onChange={ e => PostsStore.setEditPost( e.target ) }
                                        type="text" 
                                    />
                                </div>
                                <div>
                                    <MyTextArea
                                        rows="20"
                                        cols="60"
                                        name = 'body'
                                        value={ PostsStore.onePost.body }
                                        onChange={ e => PostsStore.setEditPost( e.target ) }
                                        type="text" 
                                    />
                                </div>

                                <MyButton   onClick={
                                                (e) => {
                                                        e.preventDefault()
                                                        PostsStore.editOnePost(editID)
                                                        setModalActiveEdit(false)
                                                }
                                            } 
                                >
                                    Сохранить изменения
                                </MyButton>
                            
                            </form>
                            



                        </Modal>
                        

                    </div>
                )
            }
        </>
  )
}

export default observer (PostList);
