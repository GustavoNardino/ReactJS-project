import Footer from '../components/Footer';
import Header from '../components/Header';
import ContentPanel from '../components/ContentPanel';
import '../components/styles.css'
import React from 'react'

function Success() {
  return (
    <div className='container'>
      <h2>success</h2>
        <Header />
        <ContentPanel />
        <Footer />
    </div>
  )
}

export default Success