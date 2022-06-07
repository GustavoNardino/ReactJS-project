import saleClass from "../../Data"

type footerRuleData = {
  footerData:saleClass
}
function Footer(props:footerRuleData) {
  
  return (
    <div className='footer'>
      <p>Você selecionou {props.footerData.productName}</p>
    </div>
  )
}

export default Footer