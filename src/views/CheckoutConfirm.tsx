import Header from '../components/PageParts/Header';
import SalePanel from '../components/Panels/SalePanel';
import Footer from '../components/PageParts/Footer';
import {CostumerClass, ProductClass} from '../Data'

type confirmType = {
  costumerData: CostumerClass
  productData: ProductClass
  saleId:number
}

function CheckoutConfirm(props:confirmType) {
  return (
    <div className='container'>
      <h2>Confirme as informações</h2>
      <Header />
      <SalePanel 
        productData={props.productData} 
        costumerData={props.costumerData} />
      <Footer 
        saleId={props.saleId}
        productData={props.productData} />
    </div>
  )
}

export default CheckoutConfirm