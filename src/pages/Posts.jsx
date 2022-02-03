import React, {useState, useMemo, useEffect} from 'react';
import PostList from '../components/PostList';
import '../App.css'
import PostForm from '../components/PostForm';
import MySelect from '../components/UI/select/MySelect';
import noPosts from '../img/noPosts.png';
import MyInput from '../components/UI/input/MyInput';
import PostService from '../components/API/PostService';
import { observer } from 'mobx-react';

import PostsStore from '../store/PostsStore';
import MyButton from '../components/UI/button/MyButton';



function Posts() {

  //стейт с постами
  //исспользовать пустой массив зависимости, что бы useEffect отработал при отрисовки 1 раз
  useEffect( () => {
      setTimeout ( async() => {
        PostsStore.getPosts()
      }, 1000)
  },[])
  


  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')


  /*
  //отсортированные и отфильтрованный поиском массив
  const sortedAndSearchPosts = useMemo( () => {

    return sortedPosts.filter( post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  }, [searchQuery, sortedPosts])
*/


  return (
    <div className="app">
      
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div className='panelPostNav'>
          <div>
            <PostForm />
          </div>
        </div>

        <div className='left_box'>
          
          
          <div className='sortbox'>
            
            <label>Сортировать по: </label>
            <MyButton onClick = { ()=> PostsStore.sortPostId('id')} >
              по ID ↓
            </MyButton>
            <MyButton onClick = { ()=> PostsStore.sortPostIdRevers('id')} >
              по ID ↑
            </MyButton>
            <MyButton onClick = { ()=> PostsStore.sortPost('title')} >
              по заголовку ↓
            </MyButton>

            <MyButton onClick = { ()=> PostsStore.sortPostRevers('title')} >
              по заголовку ↑
            </MyButton>

            <MyButton onClick = { ()=> PostsStore.sortPost('body')} >
              по тексту ↓
            </MyButton>

            <MyButton onClick = { ()=> PostsStore.sortPostRevers('body')} >
              по тексту ↑
            </MyButton>
            
          </div>
          <div>
            <MyInput style={{ textalign: 'right'}}
              value = {PostsStore.searchQuery}
              onChange = { (e) => PostsStore.search(e.target.value) } 
              placeholder="search"
            /> 
          </div>

          
          {PostsStore.isPostLoading //проверка на загрузку постов
            ? <div className='loadIndicator'>Loading...</div>  //если посты не згружены то Loading...
              
            : 
            PostsStore.searchQuery
              ? <PostList postArr = {PostsStore.searchArr}/>
              : <PostList postArr = {PostsStore.posts}/>
          }

        </div>
        
      </div>


    </div>
  );
}

export default observer(Posts) ;