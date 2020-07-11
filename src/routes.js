import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

//Pages
import MainPage from './pages/mainPage'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <MainPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}