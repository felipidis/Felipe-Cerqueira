import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Components/Pages/Home'
import Login from '../Components/Pages/Login'
import ApplicationPage from '../Components/Pages/ApplicationPage'
import CreateTrip from '../Components/Pages/CreateTrip'
import TripList from '../Components/Pages/TripList'
import Header from '../Components/Header/Header'

export default function Router(){
    return (
        <BrowserRouter> 
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <Home/>
                </Route>

                <Route exact path="/login">
                    <Header/>
                    <Login/>
                </Route>

                <Route exact path="/application-page">
                    <Header/>
                    <ApplicationPage/>
                </Route>

                <Route exact path="/create-trip">
                    <Header/>
                    <CreateTrip/>
                </Route>

                <Route exact path="/trip-list">
                    <Header/>
                    <TripList/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}