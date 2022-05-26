import Footer from '../components/Footer';
import Header from '../components/Header';

import ProductPanel from '../components/ProductPanel';
import saleClass from '../Data';

type productPresType = {
  appData: saleClass
  prodPresEvent: React.Dispatch<React.SetStateAction<saleClass>>
}

function ProductPresentation(props:productPresType) {

  return (
    <div className='container'>
      <h2>Conheça nosso produto</h2>
        <Header headerData={props.appData} headerEvent={props.prodPresEvent} />
        <ProductPanel productPresData={props.appData} />
        <Footer footerData={props.appData} />
    </div>
  )
}

export default ProductPresentation