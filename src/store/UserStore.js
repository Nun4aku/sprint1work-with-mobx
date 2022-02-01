import React, {useState, useMemo, useEffect} from 'react';
import { makeAutoObservable, makeObservable} from "mobx";
import { observable, computed, configure, action, decorate, runInAction} from 'mobx';
import { observer } from 'mobx-react';
import axios from "axios";


class UserStore {

    constructor() {
        makeObservable(this, {
            isAuth: observable,
            user: observable,
            login: action,
            setUser: action,
            logout: action,
        }) 
    }

    isAuth = false

    user = {
        email: 'nun2@gmail.com',
        password: '12345678'
    }

    setUser = ( {name, value } ) => {

        runInAction(() => {
            this.user = { ...this.user, [name]:value}
        })

    }

    login = () => {
        
        console.log(this.user)
        console.log(this.isAuth);

        axios.post('http://localhost:3000/api/Users/login', this.user)
        .then( (response) => {

                console.log(response);
                console.log(response.data.id);
                localStorage.setItem('auth', 'true')
                localStorage.setItem('access_token', response.data.id)
                runInAction(() => {
                    this.isAuth = true;
                })
                console.log(`this.isAuth = ${this.isAuth}`);
            
        })
        .catch(function (error) {
            alert('Не правильный логин или пароль')
        });
    }

    logout = () => {   
        axios.post(`http://localhost:3000/api/Users/logout?access_token=${localStorage.getItem('access_token')}`)
        localStorage.removeItem('auth')
        localStorage.removeItem('access_token')
        runInAction(() => {
            this.isAuth = false;
        })
        console.log(`this.isAuth = ${this.isAuth}`);
    }

}

export default new UserStore();