import { ProductClass } from "../../Data"

type footerRuleData = {
  productData: ProductClass
  saleId:number
}

function Footer(props:footerRuleData) {
  
  return (
    <div className='footer'>
      <p>Pedido #{props.saleId} - {props.productData.productName}</p>
    </div>
  )
}

export default Footer