import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home'
import SignIn from './Authentication/SignIn/SignIn'
import SignUp from './Authentication/SignUp/SignUp'
import Cart from './Cart/Cart'
import Wishlist from './Wishlist/Wishlist'
import ProductDetail from './ProductDetail/ProductDetail'
import './index.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signin' Component={SignIn} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/cart' Component={Cart} />
        <Route path='/wishlist' Component={Wishlist} />
        <Route path="/product/:id" Component={ProductDetail} />
      </Routes>
    </>
  )
}

export default App
