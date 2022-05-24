import Footer from '../components/Footer';
import Header from '../components/Header';
import SalePanel from '../components/SalePanel';

import React from 'react'

function CheckoutConfirm() {
  return (
    <div className='container'>
      <h2>CheckoutConfirm</h2>
        <Header />
        <SalePanel />
        <Footer />
    </div>
  )
}

export default CheckoutConfirm