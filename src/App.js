import React, {useState, useMemo, useEffect} from 'react';
import '../src/App.css'
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

import UserStore from './store/UserStore';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';



function App() {

  useEffect ( () => {
    if(localStorage.getItem('auth')){
      
      runInAction( () => {
        UserStore.isAuth = true
      })
      //console.log(`UserStore.isAuth = ${UserStore.isAuth}`)
    } else {
      //console.log(`UserStore.isAuth = ${UserStore.isAuth}`)
    }
  },[])
 

  


  return (
    
    <BrowserRouter>
        <Navbar />
        <AppRouter />
    </BrowserRouter>

    
  )
}

export default observer(App);