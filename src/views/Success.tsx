import Header from '../components/PageParts/Header';
import SuccessPanel from '../components/Panels/SuccessPanel';
import Footer from '../components/PageParts/Footer';
import {CostumerClass, ProductClass} from '../Data';

type successViewData = {
  costumerData: CostumerClass
  productData: ProductClass
  saleId:number
  saleEvent?: () => void
}

function Success(props: successViewData) {
  return (
    <div className='container'>
      <h2>Compra finalizada</h2>
      <Header />
      <SuccessPanel 
        saleEvent={props.saleEvent}
        saleId={props.saleId}
        productData={props.productData} 
        costumerData={props.costumerData} />
      <Footer 
        productData={props.productData} />
    </div>
  )
}

export default Success