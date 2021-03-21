import React, { useEffect } from "react";
import { routers } from './router'
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import store from './redux/store'
import { Provider, useDispatch } from 'react-redux'
import { user } from './redux/state/User'
import { getUserFormLocalStorage } from "./Ultis/localStorage";

// import { getUserFormLocalStorage } from '/'

const App = () => {

  const dispath = useDispatch()

  useEffect(() => {
    const user = getUserFormLocalStorage

    dispath(
      setUser(user)
    )
  })
  return (
    <Provider store={store}>

      <BrowserRouter>

        <Link to="/"> go to home</Link>
        <Link to="/login"> go to login</Link>

        <Switch>
          {routers.map((CurrentRouter, index) => {
            return (
              <Route
                path ={CurrentRouter.path}
                exact={CurrentRouter.exact}
                key={index}
              >
                {CurrentRouter.Component}
              </Route>

            )
          })}
        </Switch>

      </BrowserRouter>
    </Provider>
  )
}

export default App
