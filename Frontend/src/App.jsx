import React from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element=<UserLayout/> >
        {/* {userLayout} */}
      </Route>
      <Route>
        {/* {admin Layout} */}
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
