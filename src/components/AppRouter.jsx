import React, { useContext } from "react";
import { Switch, Redirect, Link, Route} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../components/router/index';
import UserStore from "../store/UserStore";
import { observer } from "mobx-react"

const AppRouter = () => {

    console.log(UserStore.isAuth)

    return(
        UserStore.isAuth
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

export default observer(AppRouter);