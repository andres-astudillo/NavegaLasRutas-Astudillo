// import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './Components/Header';
import { ProductList } from './Components/ProductList';
// import Inicio from './Components/Inicio';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </div>

    // <Routes>
      // <Route path="/" element={<Inicio />} />
    // </Routes>

  );
}

export default App;
