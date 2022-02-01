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



  //использовал useMemo для сортировки массива постов
  //колбек вызвается, если изменяются посты posts или выбранный метод сортировки selectedSort
  /*
  const sortedPosts = useMemo( () => {
    //console.log ('отработала сортировка')
    if (selectedSort) {
      return [...posts].sort( (a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts

  }, [selectedSort, posts])
*/
  /*
  //отсортированные и отфильтрованный поиском массив
  const sortedAndSearchPosts = useMemo( () => {

    return sortedPosts.filter( post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  }, [searchQuery, sortedPosts])
*/
  /*
  //создание нового поста
  const createPost = (newPost) => {
    setPosts ( [...posts, newPost] )
  }

  //удаление поста
  const removePost = (post) => {
    setPosts ( posts.filter (p => p.id !== post.id) )
  }
*/
/*
  //функция сортировки
  const sortPost = (sort) => {
    setSelectedSort(sort);
  }
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
          
          {/*
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <MySelect
              value = {selectedSort}
              
              defaultValue = "Сортировать по:"
              options = {[
                {value: 'title', name: 'по названию'},
                {value: 'body', name: 'по описанию'}
              ]}
            />
            <MyInput
              value = {searchQuery}
              onChange = {e => setSearchQuery(e.target.value)}
              placeholder="search"
            />
          </div>
            */}

          {console.log(PostsStore.isPostLoading)}
          {PostsStore.isPostLoading //проверка на загрузку постов
            ? <div className='loadIndicator'>Loading...</div>  //если посты не згружены то Loading...
              
            : <PostList />
          }

        </div>
        
      </div>


    </div>
  );
}

export default observer(Posts) ;