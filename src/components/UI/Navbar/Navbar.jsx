import React, { useContext } from "react";
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { AuthContext } from '../../../context/index';
import MyButton from "../button/MyButton";
import axios from "axios";
import UserStore from "../../../store/UserStore";

const Navbar = () => {

    

    const logout = () => {
        //setIsAuth(false)
        axios.post('http://localhost:3000/api/Users/logout')
        localStorage.removeItem('auth')
        localStorage.removeItem('access_token')
    }

    return(
        <div className='navbar'>
            <div className='navbar_block'>
                <div>
                    <Link to='/posts'>Посты</Link>
                    <Link to='/about'>О сайте</Link>
                </div>
                <div>
                    {
                        UserStore.isAuth
                        ?
                            <MyButton onClick={ logout } >Выход</MyButton>
                        :
                            <Link to='/login'>Вход</Link>
                    }   
                </div>
            </div>
        </div>
    )
}

export default Navbar;



/*

import React, { useContext } from "react";
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { AuthContext } from '../../../context/index';
import MyButton from "../button/MyButton";
import axios from "axios";

const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false)
        axios.post('http://localhost:3000/api/Users/logout')
        localStorage.removeItem('auth')
        localStorage.removeItem('access_token')
    }

    return(
        <div className='navbar'>
            <div className='navbar_block'>
                <div>
                    <Link to='/posts'>Посты</Link>
                    <Link to='/about'>О сайте</Link>
                </div>
                <div>
                    {
                        isAuth
                        ?
                            <MyButton onClick={ logout } >Выход</MyButton>
                        :
                            <Link to='/login'>Вход</Link>
                    }   
                </div>
            </div>
        </div>
    )
}

export default Navbar;

*/