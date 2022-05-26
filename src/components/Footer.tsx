import saleClass from "../Data"

type footerRuleData = {
  footerData:saleClass
}
function Footer(props:footerRuleData) {
  
  return (
    <div className='footer'>
      <p>Produto selecionado: {props.footerData.productName} - Valor total: {props.footerData.price} - Nome do comprador: {props.footerData.costumerName}</p>
    </div>
  )
}

export default Footer