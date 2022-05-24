import Footer from '../components/Footer';
import Header from '../components/Header';
import CostumerPanel from '../components/CostumerPanel';

import React from 'react'

function Checkout() {
  return (
    <div className='container'>
      <h2>Checkout</h2>
        <Header />
        <CostumerPanel />
        <Footer />
    </div>
  )
}

export default Checkout