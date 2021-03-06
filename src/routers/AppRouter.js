import React from 'react'
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
  return (

    <Router>
        <div>
            <Switch>
                <Route exact path="/login">
                    <LoginScreen/>
                </Route>

                <Route exact path="/">
                    <CalendarScreen/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    </Router>

  )
}
