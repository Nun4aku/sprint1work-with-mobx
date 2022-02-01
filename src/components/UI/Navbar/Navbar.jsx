import React, { useContext } from "react";
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { AuthContext } from '../../../context/index';
import MyButton from "../button/MyButton";
import axios from "axios";
import UserStore from "../../../store/UserStore";
import { observer } from 'mobx-react';

const Navbar = () => {

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
                            <MyButton onClick={ UserStore.logout } >Выход </MyButton>
                        :
                            <Link to='/login'>Вход</Link>
                    }   
                </div>
            </div>
        </div>
    )
}

export default observer(Navbar);
