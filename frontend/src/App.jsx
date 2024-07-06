import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Home from './Home/Home'
import SignIn from './Authentication/SignIn/SignIn'
import SignUp from './Authentication/SignUp/SignUp'
import Cart from './Cart/Cart'
import Wishlist from './Wishlist/Wishlist'
import ProductDetail from './ProductDetail/ProductDetail'
import './index.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch('/api/verify-token', {
          method: 'GET',
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setUser({ userId: data.userId });
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      }
    };
    verifyToken();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
