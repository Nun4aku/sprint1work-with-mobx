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
            } 
            //console.log(response);
            //console.log(response.data.id);
        })
        .catch(function (error) {
            console.log(error);
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