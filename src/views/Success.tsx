import Footer from '../components/Footer';
import Header from '../components/Header';
import ContentPanel from '../components/ProductPanel';
import '../components/styles.css'
import React from 'react'

function Success() {
  return (
    <div className='container'>
      <h2>success</h2>
        <Header />
        {/* success msg */}
        <Footer />
    </div>
  )
}

export default Success