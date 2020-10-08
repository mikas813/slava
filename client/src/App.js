import React from 'react'
import './index.scss'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import MainPage from './views/MainPage/MainPage'
import AboutPage from './views/AboutPage/AboutPage'
import ContactPage from './views/ContactPage/ContactPage'
import SignInPage from './views/SignInPage/SignInPage'
import GalleryPage from './views/GalleryPage/GalleryPage'
import ManagePage from './views/ManagePage/ManagePage'

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={MainPage} path={'/'}/>
        <Route component={AboutPage} path={'/about'}/>
        <Route component={ContactPage} path={'/contacts'}/>
        <Route component={SignInPage} path={'/signin'}/>
        <Route component={GalleryPage} path={'/gallery'}/>
        <Route component={ManagePage} path={'/manage'}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App