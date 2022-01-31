import React, {useState, useMemo, useEffect} from 'react';
import { makeAutoObservable, makeObservable} from "mobx";
import PostService from '../components/API/PostService';
import { network } from '../components/API/PostService';


import { Component } from 'react-dom';
import { observable, computed, configure, action, decorate } from 'mobx';
import { observer } from 'mobx-react';

class PostsStore {

    constructor() {
        makeObservable(this, {
            posts: observable, 
            isPostLoading: observable, 
            getPosts: action
        })
    }

    posts = [];
    isPostLoading = true

    async getPosts() {
        
        try {
            this.posts = await PostService.getAll()
        }
        finally {
            this.isPostLoading = false
        }
    }
    

}



export default new PostsStore();