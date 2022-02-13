import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Signin from '../pages/Signin'
import SignUp from '../pages/Signup'

function AllRoutes(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/signin" exact element={<Signin/>}/>
      <Route path="/signUp" exact element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes