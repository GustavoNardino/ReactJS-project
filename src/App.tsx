import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import saleClass from './Data';
import CheckoutView from './views/CheckoutView';
import CheckoutConfirmView from './views/CheckoutConfirmView';
import ProductPresentationView from './views/ProductPresentationView';
import SuccessView from './views/SuccessView';
import './components/styles.css';

const initialData = new saleClass();

function App() {  
  const [saleData, setSaleData] = useState(initialData)
  function refreshState (majorData: saleClass){
    setSaleData(majorData)
  }
  return (
    <Router>
      <Routes>
        <Route path='/product'
                element={<ProductPresentationView 
                saleState={saleData} 
                prodPresEvent={() => refreshState}
                />} /> 
        <Route path='/checkout' 
                element={<CheckoutView 
                saleState={saleData} 
                checkoutEvent={() => refreshState} 
                
                />} />
        <Route path='/confirm' 
                element={<CheckoutConfirmView 
                saleState={saleData} 
                />} />
        <Route path='/success' 
                element={<SuccessView 
                saleState={saleData} 
                />} />
      </Routes>
    </Router>
  );
}

export default App;