import './App.css';
import { Route, Routes } from 'react-router-dom';
// ! Step 11
import Navbar from './component/Navbar';
// ! Step 21
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
        {/* Step 11 */}
        <Navbar />
      <Routes>
        {/* Step 21 */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
