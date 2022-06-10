import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CostumerClass, ProductClass} from './Data';
import Checkout from './views/Checkout'
import CheckoutConfirm from './views/CheckoutConfirm';
import ProductPresentation from './views/ProductPresentation';
import Success from './views/Success';
import './components/styles.css';

type salesList = {
  id: number,
  costumerData: CostumerClass,
  productData: ProductClass
}
let initialStore: salesList = {id : 0, costumerData: new CostumerClass, productData: new ProductClass}

let product = new ProductClass();
product.productName = 'Aquecedor Elétrico Mondial A-08 Portátil'
product.description = 'O Aquecedor Elétrico Mondial A-08 Portátil é 3 em 1: ele aquece, circula e desumidifica o ar. O aparelho tem 2 níveis de aquecimento, é leve e portátil, e você pode transportá-lo entre os cômodos com facilidade. Além de ser mais silencioso e proporcionar um ambiente tranquilo e confortável.'
product.price = 179.90


function App() {  
  const [costumerState, setCostumerState] = useState(new CostumerClass())
  const [sales, setSale] = useState(initialStore)
  sales.id = Math.floor(Math.random() * 100);
  function handleSetSale(){
    let newId = Math.floor(Math.random() * 100);
    setSale({...sales, id : sales.id, costumerData: costumerState, productData: product})
  }
  
  return (
    <Router>
      <Routes>
        <Route path='/product'
                element={<ProductPresentation
                costumerData={costumerState}
                productData={product}
                costumerEvent={setCostumerState}
                />} /> 
        <Route path='/checkout' 
                element={<Checkout
                costumerData={costumerState}
                productData={product}
                costumerEvent={setCostumerState}
                />} />
        <Route path='/confirm' 
                element={<CheckoutConfirm
                  costumerData={costumerState}
                  productData={product}
                />} />
        <Route path='/success' 
                element={<Success
                  costumerData={costumerState}
                  productData={product}
                  saleId={sales.id}
                  saleEvent={handleSetSale}
                />} />
      </Routes>
    </Router>
  );
}

export default App;