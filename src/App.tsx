import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Checkout from './views/Checkout';
import CheckoutConfirm from './views/CheckoutConfirm';
import ProductPresentation from './views/ProductPresentation';
import Success from './views/Success';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductPresentation />} />
        <Route path='/productpresentation' element={<ProductPresentation />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkoutconfirm' element={<CheckoutConfirm />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<ProductPresentation />} />
      </Routes>
    </Router>
  );
}

export default App;