import Header from '../components/PageParts/Header';
import CostumerPanel from '../components/Panels/CostumerPanel';
import Footer from '../components/PageParts/Footer';
import {CostumerClass, ProductClass} from '../Data';

type checkoutType = {
  costumerEvent: React.Dispatch<React.SetStateAction<CostumerClass>>
  costumerData: CostumerClass
  productData: ProductClass
  saleId:number
}

function Checkout(props:checkoutType) {
  return (
    <div className='container'>
      <h2>Informe seus dados</h2>
      <Header />
      <CostumerPanel 
        productData={props.productData} 
        costumerData={props.costumerData} 
        costumerEvent={props.costumerEvent} />
      <Footer 
        saleId={props.saleId}
        productData={props.productData} />
    </div>
  )
}

export default Checkout