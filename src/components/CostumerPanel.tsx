import saleClass from '../Data';
import Input from './Input';

type costumerPanelData = {
  checkoutData: saleClass
  costumerPanelEvent: React.Dispatch<React.SetStateAction<saleClass>>
}

function CostumerPanel(props:costumerPanelData) {

  return (
    <div className='contentPanel'>
      <form>
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="costumerName" fieldName='Nome' content={props.checkoutData.costumerName} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="cpf" fieldName='CPF' content={props.checkoutData.cpf} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="phone" fieldName='Telefone' content={props.checkoutData.phone} />
        <br />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="email" fieldName='E-mail' content={props.checkoutData.email} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="address" fieldName='Endereço' content={props.checkoutData.address} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="cardnNumber" fieldName='Cartão de Crédito' content={props.checkoutData.cardnNumber} />
        <br />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="validity" fieldName='Validade' content={props.checkoutData.validity} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="cvv" fieldName='CVV' content={props.checkoutData.cvv} />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="cardName" fieldName='Nome do portador' content={props.checkoutData.cardName} />
        <br />
        <Input  inputData={props.checkoutData} eventChange={props.costumerPanelEvent} name="cardCpf" fieldName='CPF do portador' content={props.checkoutData.cardCpf} />
        {/* <Button name="enviar" text='Enviar' /> */}
      </form>
    </div>
  )
}
export default CostumerPanel