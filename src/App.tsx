import { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/shoppingCartContext';

function App() {


  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
