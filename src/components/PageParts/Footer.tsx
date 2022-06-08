import { ProductClass } from "../../Data"

type footerRuleData = {
  productData: ProductClass
}
function Footer(props:footerRuleData) {
  
  return (
    <div className='footer'>
      <p>{props.productData.productName}</p>
    </div>
  )
}

export default Footer