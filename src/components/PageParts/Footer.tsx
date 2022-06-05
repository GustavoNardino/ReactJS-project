import saleClass from "../../Data"

type footerRuleData = {
  footerData:saleClass
}
function Footer(props:footerRuleData) {
  
  return (
    <div className='footer'>
      <p>{props.footerData.costumerName} selecionou {props.footerData.productName} no valor de {props.footerData.price} + {props.footerData.frete}(frete)</p>
    </div>
  )
}

export default Footer