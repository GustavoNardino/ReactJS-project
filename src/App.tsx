import {useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import saleClass from './Data';
import Checkout from './views/Checkout';
import CheckoutConfirm from './views/CheckoutConfirm';
import ProductPresentation from './views/ProductPresentation';
import Success from './views/Success';
import './components/styles.css';

const initialData = new saleClass();
function App() {
  
  const [saleData, setSaleData] = useState(initialData)
  saleData.productName = 'Aquecedor Elétrico Mondial A-08 Portátil'
  saleData.description = 'O Aquecedor Elétrico Mondial A-08 Portátil é 3 em 1: ele aquece, circula e desumidifica o ar. O aparelho tem 2 níveis de aquecimento, é leve e portátil, e você pode transportá-lo entre os cômodos com facilidade. Além de ser mais silencioso e proporcionar um ambiente tranquilo e confortável. '
  saleData.price = '179.90';
  
  return (
    <Router>
      <Routes>
        <Route path='/productpresentation'
                element={<ProductPresentation 
                appData={saleData} 
                prodPresEvent={setSaleData} 
                />} /> 
        <Route path='/checkout' 
                element={<Checkout 
                appData={saleData} 
                checkoutEvent={setSaleData} 
                />} />
        <Route path='/checkoutconfirm' 
                element={<CheckoutConfirm 
                appData={saleData} 
                />} />
        <Route path='/success' 
                element={<Success 
                appData={saleData} 
                />} />
      </Routes>
    </Router>
  );
}

export default App;