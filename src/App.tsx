import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import saleClass from './Data';
import Checkout from './views/Checkout';
import CheckoutConfirm from './views/CheckoutConfirm';
import ProductPresentation from './views/ProductPresentation';
import Success from './views/Success';

const App: React.FC = () => {
  const saleDataSrc = new saleClass;
  const [saleData, setSaleData] = useState(saleDataSrc)
  
  return (
    <Router>
      <Routes>
        <Route path='/productpresentation' element={<ProductPresentation appData={saleData} prodPresEvent={setSaleData} />} />
        <Route path='/checkout' element={<Checkout appData={saleData} checkoutEvent={setSaleData} />} />
        <Route path='/checkoutconfirm' element={<CheckoutConfirm appData={saleData} confirmEvent={setSaleData} />} />
        <Route path='/success' element={<Success appData={saleData} successEvent={setSaleData} />} />
      </Routes>
    </Router>
  );
}

export default App;