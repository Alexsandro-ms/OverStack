import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Register from '../pages/Register'

function AllRoutes(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/signin" exact element={<Signin/>}/>
      <Route path="/Register" exact element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes