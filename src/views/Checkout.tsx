import Footer from '../components/Footer';
import Header from '../components/Header';
import ContentPanel from '../components/ContentPanel';

import React from 'react'

function Checkout() {
  return (
    <div className='container'>
      <h2>Checkout</h2>
        <Header />
        <ContentPanel />
        <Footer />
    </div>
  )
}

export default Checkout