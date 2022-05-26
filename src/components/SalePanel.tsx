import saleClass from '../Data'
import CostumerPanel from '../components/CostumerPanel';
import ProductPanel from '../components/ProductPanel';

type salePanelData = {
  saleProductData:saleClass
  saleCostumerData:saleClass
}
function SalePanel(props: salePanelData) {
  return (
    <div className='contentPanel'>
        <ProductPanel productPresData={props.saleProductData} />
        <CostumerPanel checkoutData={props.saleCostumerData} />
    </div>
  )
}

export default SalePanel