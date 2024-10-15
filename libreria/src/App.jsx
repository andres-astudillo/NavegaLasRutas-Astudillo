import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './Components/Header';
import { ProductList } from './Components/ProductList';
import Inicio from './Components/Inicio';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Routes>

      <Route path='header' element={<Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />} />

      <Route path='/' element={<Inicio />} />

      <Route path='product-list' element={<ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />} />

    </Routes>
  );
}

export default App;
