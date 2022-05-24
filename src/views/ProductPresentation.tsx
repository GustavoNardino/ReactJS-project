import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductPanel from '../components/ProductPanel';

import React from 'react'

function ProductPresentation() {
  // const [product, setproduct] = useState<string>("")

  return (
    <div className='container'>
      <h2>productpresentation</h2>
        <Header />
        <ProductPanel />
        <Footer />
    </div>
  )
}

export default ProductPresentation