import React, {useState, useMemo, useEffect, useContext} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context/index';

import axios from "axios";
import UserStore from '../store/UserStore';
import { observer } from 'mobx-react';



function Login() {



    

    return(
        <div className='app'>
            <div className='login_form'>
                <h1>Форма входа</h1>
                <form >
                    <MyInput 
                        name = 'email'
                        value={UserStore.user.email}
                        onChange={e => UserStore.setUser( e.target )}
                        text='text' 
                        placeholder='email'
                        
                    />
                    <MyInput
                        name = 'password'
                        value={UserStore.user.password} 
                        onChange={e => UserStore.setUser( e.target )}
                        text='password' 
                        placeholder='Password'
                        
                    />
                    <MyButton onClick={ (e) =>  { e.preventDefault(); UserStore.login()} } >Войти</MyButton>

                    
                </form>    
            </div>
        </div>
    )
}


/*
function Login() {

        

    return(
        <div className='app'>
            <div className='login_form'>
                <h1>Форма входа</h1>
                <form >
                    <MyInput 
                        value={UserStore.user.email}
                        onChange={e => UserStore.user.email = e.target.value}
                        text='text' 
                        placeholder='email'
                    />
                    <MyInput 
                        value={UserStore.user.password} 
                        onChange={e => UserStore.user.password = e.target.value}
                        text='password' 
                        placeholder='Password'
                    />
                    <MyButton onClick={ UserStore.login } >Войти</MyButton>
                </form>    
            </div>
        </div>
    )
}
*/

export default observer(Login);



/*

import React, {useState, useMemo, useEffect, useContext} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context/index';

import axios from "axios";


function Login() {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    const [user, setUser] = useState (
        {
            email: 'nun2@gmail.com',
            password: '12345678'
            //email: '',
            //password: ''
        }
    )

      
    const login = (event) => {
        
        event.preventDefault();
        console.log(user)


        axios.post('http://localhost:3000/api/Users/login', user)
        .then(function (response) {

            if(response.status === 200) {
                setIsAuth(true)
                localStorage.setItem('auth', 'true')
                localStorage.setItem('access_token', response.data.id)
            } 
            //console.log(response);
            //console.log(response.data.id);
        })
        .catch(function (error) {
            alert('Не правильный логин или пароль')
        });
    }
        

    return(
        <div className='app'>
            <div className='login_form'>
                <h1>Форма входа</h1>
                <form >
                    <MyInput 
                        value={user.email}
                        onChange={e => setUser( { ...user, email: e.target.value} )}
                        text='text' 
                        placeholder='email'
                    />
                    <MyInput 
                        value={user.password} 
                        onChange={e => setUser( { ...user, password: e.target.value} )}
                        text='password' 
                        placeholder='Password'
                    />
                    <MyButton onClick={ login } >Войти</MyButton>
                </form>    
            </div>
        </div>
    )
}

export default Login;

*/