import React, {useState, useMemo, useEffect} from 'react';
import { makeAutoObservable, makeObservable} from "mobx";
import PostService from '../components/API/PostService';

import { observable, action, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import axios from "axios";


class PostsStore {

    constructor() {
        makeObservable(this, {
            posts: observable, 
            isPostLoading: observable,
            addPost: observable,
            getPosts: action,
            setAddPost: action,
            addPostFunction: action,

        })
    }

    posts = [];
    isPostLoading = true
    
    async getPosts() {

        try {
            runInAction( async () => {
                this.posts = await PostService.getAll()
            })
        }
        finally {
            runInAction( () => {
                this.isPostLoading = false
            })
        }
    }
    

    addPost = {
        title: '',
        body: '',
        done: false
    }

    setAddPost = ( {name, value } ) => {

        runInAction(() => {
            this.addPost = { ...this.addPost, [name]:value}
        })

    }

    //функция добавления постов
    addPostFunction = () => {
        console.log(this.addPost)

/*
        PostService.addPost(this.addPost)

        runInAction( async () => {
            this.addPost = { title: '', body: '', done: false }
        })
        this.getPosts()
*/

        //рабочий аксиос без PostService
        axios.post(`http://localhost:3000/api/tasks?access_token=${localStorage.getItem('access_token')}`, this.addPost)
        .then( (response) => {
                
                console.log(response);
                console.log(response.data.id);

                runInAction( async () => {
                    this.addPost = { title: '', body: '', done: false }
                })
                this.getPosts()
        
        })
        .catch(function (error) {
            alert('Что-то пошло не так')
        }); 

    }

    //функция удаления постов
    delPost = (id) => {
        console.log(id);

        
        axios.delete(`http://localhost:3000/api/tasks/${id}?access_token=${localStorage.getItem('access_token')}`)
        .then( (response) => {

                console.log(response);
                console.log(response.status);
                this.getPosts()    

        })
        .catch(function (error) {
            alert('Что-то пошло не так')
        });
        
    }

}


export default new PostsStore();