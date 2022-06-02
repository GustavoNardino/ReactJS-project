import ProgBar from '../components/ProgBar';
import Header from '../components/Header';
import ProductPanel from '../components/ProductPanel';
import Footer from '../components/Footer';
import saleClass from '../Data';

interface productPresType {
  appData: saleClass
  prodPresEvent: React.Dispatch<React.SetStateAction<saleClass>>
}

function ProductPresentation(props:productPresType) {
  
  return (
    <div className='container'>
      <h2>Conheça nosso produto</h2>
      <ProgBar />
      <Header headerData={props.appData} />
      <ProductPanel productPanelData={props.appData}  prodPanelEvent={props.prodPresEvent} />
      <Footer footerData={props.appData} />
    </div>
  )
}

export default ProductPresentation