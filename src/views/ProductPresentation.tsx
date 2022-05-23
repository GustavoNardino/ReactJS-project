import Footer from '../components/Footer';
import Header from '../components/Header';
import ContentPanel from '../components/ContentPanel';

import React from 'react'

function ProductPresentation() {
  // const [product, setproduct] = useState<string>("")

  return (
    <div className='container'>
      <h2>productpresentation</h2>
        <Header />
        <ContentPanel />
        <Footer />
    </div>
  )
}

export default ProductPresentation