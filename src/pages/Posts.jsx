import React, {useState, useMemo, useEffect} from 'react';
import PostList from '../components/PostList';
import '../App.css'
import PostForm from '../components/PostForm';
import MySelect from '../components/UI/select/MySelect';
import noPosts from '../img/noPosts.png';
import MyInput from '../components/UI/input/MyInput';
import PostService from '../components/API/PostService';

function Posts() {

  //стейт с постами
  
  const [posts, setPosts] = useState ([
    { id: 1, title: 'Aзаголовок', body: 'R_это текст из локального стейта' },
    { id: 2, title: '1заголовок2', body: 'T_это текст из локального стейта' },
    { id: 3, title: 'Tзаголовок2', body: 'S_это текст из локального стейта' },

  ])

  //исспользовать пустой массив зависимости, что бы useEffect отработал при отрисовки 1 раз
  useEffect( () => {
    fetchPosts()
    //console.log('useEfect')
  },[])

  async function fetchPosts() {
    setIstPostLoading(true);

    setTimeout ( async() => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIstPostLoading(false);
    }, 1000) 
  }
  

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isPostLoading, setIstPostLoading] = useState (false)



  //использовал useMemo для сортировки массива постов
  //колбек вызвается, если изменяются посты posts или выбранный метод сортировки selectedSort
  const sortedPosts = useMemo( () => {
    //console.log ('отработала сортировка')
    if (selectedSort) {
      return [...posts].sort( (a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts

  }, [selectedSort, posts])

  
  //отсортированные и отфильтрованный поиском массив
  const sortedAndSearchPosts = useMemo( () => {

    return sortedPosts.filter( post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  }, [searchQuery, sortedPosts])

  
  //создание нового поста
  const createPost = (newPost) => {
    setPosts ( [...posts, newPost] )
  }

  //удаление поста
  const removePost = (post) => {
    setPosts ( posts.filter (p => p.id !== post.id) )
  }

  //функция сортировки
  const sortPost = (sort) => {
    setSelectedSort(sort);
  }
  

  return (
    <div className="app">
      
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div className='panelPostNav'>
          <div>
            <PostForm create={createPost}/>
          </div>
        </div>

        <div className='left_box'>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <MySelect
              value = {selectedSort}
              onChange={sortPost}
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

          {/*Список всех постов*/}
          {isPostLoading //проверка на загрузку постов
            ? <div className='loadIndicator'>Loading...</div>  //если посты не згружены то Loading...
              
            : //проверяем массив отсортерованных постов не пут ли он
              sortedAndSearchPosts.length !== 0
              ? <PostList 
                  remove = {removePost}
                  posts = {sortedAndSearchPosts} 
                  PostListTitle="список постов"
                />
              : <div className='noPosts'><img src={noPosts} alt="noPosts" /></div>
          }

        </div>
        
      </div>


    </div>
  );
}

export default Posts;