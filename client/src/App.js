import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { useEffect,  useState } from 'react';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';


function App() {

  
  return (
    <main className="App">
      <BrowserRouter>   
      <CartProvider>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>  
      </BrowserRouter>
    </main>
  );
}

export default App;
