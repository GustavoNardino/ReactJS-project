import ProgBar from '../components/PageParts/ProgBar';
import Header from '../components/PageParts/Header';
import ProductPanel from '../components/Panels/ProductPanel';
import Footer from '../components/PageParts/Footer';
import saleClass from '../Data';

type productPresType ={
  saleState: saleClass
  prodPresEvent: React.Dispatch<React.SetStateAction<saleClass>>
}

function ProductPresentationView(props:productPresType) {
  
  return (
    <div className='container'>
      <h2>Conheça nosso produto</h2>
      <ProgBar />
      <Header headerData={props.saleState} />
      <ProductPanel productPanelData={props.saleState}  prodPanelEvent={props.prodPresEvent} />
      <Footer footerData={props.saleState} />
    </div>
  )
}

export default ProductPresentationView