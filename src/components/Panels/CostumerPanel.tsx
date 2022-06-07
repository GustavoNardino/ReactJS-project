import saleClass from '../../Data';
import Input from '../Interactive/Input';

type costumerPanelData = {
  checkoutData: saleClass
  costumerPanelEvent: React.Dispatch<React.SetStateAction<saleClass>>
}

function CostumerPanel(props:costumerPanelData) {
  //alimentar o costumerPanelEvent com uma lista/objeto contendo 
  //as strings que a checkoutView vai enviar pra header por uma function
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
        <h3>Endereço</h3>
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="cep" fieldName='CEP' content={props.checkoutData.cep} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="street" fieldName='Rua' content={props.checkoutData.street} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="addrNumber" fieldName='Número' content={props.checkoutData.addrNumber} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} 
        name="district" fieldName='Bairro' content={props.checkoutData.district} />
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