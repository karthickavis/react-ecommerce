import  { Suspense, lazy } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";

  const Navbar=lazy(()=>import('./components/Navbar'));
  const Home=lazy(()=>import('./pages/Home'));
  const About=lazy(()=>import('./pages/About'));
  const Contact=lazy(()=>import('./pages/Contact'));
  const Product=lazy(()=>import('./pages/Product'));
  const Cart=lazy(()=>import('./pages/Cart'));


function App() {
  

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
      <Navbar />
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          
          
        </Routes>
      </div>
    </Suspense>
    </>
  )
}

export default App
