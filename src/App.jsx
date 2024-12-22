import React from 'react'
import Pokemon from './components/Pokemon'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Save from './components/Save'
import WishList from './components/WishList'
import PokemonDetails from './components/PokemonDetails'


export const App = () => {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Pokemon />} />
        <Route path='/wishlist' element={<WishList/>} />
        <Route path='/save' element={<Save/>} />
        <Route path='/pokemon/:id' element ={<PokemonDetails/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      
    </div>
  )
}
