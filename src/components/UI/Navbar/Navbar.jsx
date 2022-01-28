import React, { useContext } from "react";
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { AuthContext } from '../../../context/index';
import MyButton from "../button/MyButton";


const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')

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