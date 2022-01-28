import React, { useContext } from "react";
import { Switch, Redirect, Link, Route} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../components/router/index';
import { AuthContext } from '../context/index';


const AppRouter = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    return(
        isAuth
        ? 
            <Switch>
                {privateRoutes.map ( (route) => 
                    <Route component={route.component} path={route.path} exact={route.exact} key={route.path}/>
                )}
                <Redirect to='/posts'/>
            </Switch>
        : 
            <Switch>
                {publicRoutes.map ( (route) => 
                    <Route component={route.component} path={route.path} exact={route.exact} key={route.path}/>
                )}
                <Redirect to='/login'/>
            </Switch>
    )
}

export default AppRouter;