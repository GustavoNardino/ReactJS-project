import Header from '../components/PageParts/Header';
import ProductPanel from '../components/Panels/ProductPanel';
import Footer from '../components/PageParts/Footer';
import { CostumerClass, ProductClass } from '../Data';

type productPresType ={
  costumerEvent: React.Dispatch<React.SetStateAction<CostumerClass>>
  costumerData: CostumerClass
  productData: ProductClass
  saleId:number
}

function ProductPresentation(props:productPresType) {
  return (
    <div className='container'>
      <h2>Informações do produto</h2>
      <Header /> 
      <ProductPanel 
        productData={props.productData} 
        costumerData={props.costumerData} 
        costumerEvent={props.costumerEvent}/>
      <Footer 
      saleId={props.saleId}
        productData={props.productData} />
    </div>
  )
}

export default ProductPresentation