import saleClass from '../../Data';
import Input from '../Interactive/Input';

type costumerPanelData = {
  checkoutData: saleClass
  costumerPanelEvent: React.Dispatch<React.SetStateAction<saleClass>>
}

function CostumerPanel(props:costumerPanelData) {

  return (
    <div className='contentPanel'>
      <div className='infoBoard'>
        <h3>Dados pessoais</h3>
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="costumerName" fieldName='Nome completo' content={props.checkoutData.costumerName} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="cpf" fieldName='CPF' content={props.checkoutData.cpf} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="phone" fieldName='Telefone' content={props.checkoutData.phone} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="email" fieldName='E-mail' content={props.checkoutData.email} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="address" fieldName='Endereço' content={props.checkoutData.address} />
      </div>
       <div className='infoBoard'>
         <h3>Dados do pagamento</h3>
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="cardNumber" fieldName='Cartão de Crédito' content={props.checkoutData.cardNumber} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="validity" fieldName='Validade' content={props.checkoutData.validity} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="cvv" fieldName='CVV' content={props.checkoutData.cvv} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="cardName" fieldName='Nome do portador' content={props.checkoutData.cardName} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="cardCpf" fieldName='CPF do portador' content={props.checkoutData.cardCpf} />
      </div>
    </div>
  )
}
export default CostumerPanel