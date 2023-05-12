import React, { createContext, useState }  from 'react'
import Header from './Components/Header'
import Product from './Components/Product'
import Rajister from './Components/Rejister'
import Login from './Components/Login'
import Cart from './Components/Cart'
import Error from './Components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const ecommercecontext = createContext(null)

function App() {

  const [product, setProducts] = useState([])
  const [cart , setCart] = useState([])

  return (
    <div>
      <ecommercecontext.Provider value={{product, setProducts , cart , setCart}}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Rajister/>} />
            <Route path='/product' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ecommercecontext.Provider>
    </div>
  )
}

export default App