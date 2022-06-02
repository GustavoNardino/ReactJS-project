import saleClass from "../Data"

type successPanelData = {
    successPanelData: saleClass
  }
function SuccessPanel(props: successPanelData) {
    return (
        <div className='contentPanel'>
          <div className='successBoard'>
            <h1>PRONTO!</h1>
            <p>{props.successPanelData.costumerName}, sua compra de um 
            {props.successPanelData.productName} no valor de 
            {props.successPanelData.price}, foi realizada com sucesso</p>
          </div>
        </div>
    )
  }
  
  export default SuccessPanel