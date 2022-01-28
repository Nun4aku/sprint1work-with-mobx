import React, {useState, useMemo, useEffect} from 'react';
import { makeAutoObservable } from "mobx";
import PostService from '../components/API/PostService';

class PostsStore {

    /*
    posts = [
        { id: 1, title: 'Aзаголовок', body: 'R_это текст из локального стейта' },
        { id: 2, title: '1заголовок2', body: 'T_это текст из локального стейта' },
        { id: 3, title: 'Tзаголовок2', body: 'S_это текст из локального стейта' },
        { id: 4, title: 'Aзаголовок4', body: 'R_это текст из локального стейта' },
        { id: 5, title: '1заголовок5', body: 'T_это текст из локального стейта' },
        { id: 6, title: 'Tзаголовок6', body: 'S_это текст из локального стейта' },
    ]
    */
    posts = []
    
    
    //posts = PostService.getAll();


    constructor() {
        makeAutoObservable(this)
    }
    

    
    
}
export default new PostsStore();