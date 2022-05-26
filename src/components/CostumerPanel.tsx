import saleClass from '../Data'
import Input from './Input';

type costumerPanelData = {
  checkoutData: saleClass
}

function CostumerPanel(props:costumerPanelData) {
  return (
    <div className='contentPanel'>
      <form action="">
        <Input fieldName='Nome' content={props.checkoutData.costumerName} />
        <Input fieldName='CPF' content={props.checkoutData.cpf} />
        <Input fieldName='Telefone' content={props.checkoutData.phone} />
        <Input fieldName='E-mail' content={props.checkoutData.email} />
        <Input fieldName='Endereço' content={props.checkoutData.address} />
        <Input fieldName='Cartão de Crédito' content={props.checkoutData.cardnNumber} />
        <Input fieldName='Validade' content={props.checkoutData.validity} />
        <Input fieldName='CVV' content={props.checkoutData.cvv} />
        <Input fieldName='Nome do portador' content={props.checkoutData.cardName} />
        <Input fieldName='CPF do portador' content={props.checkoutData.cardCpf} />
      </form>
    </div>
  )
}
export default CostumerPanel