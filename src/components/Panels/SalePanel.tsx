import Galery from '../PageParts/Galery';
import Button from '../Interactive/Button';
import {CostumerClass, ProductClass} from '../../Data'

type salePanelData = {
  costumerData: CostumerClass
  productData: ProductClass
}

function SalePanel(props: salePanelData) {
  return (
    <div className='contentPanel'>
      <div className='infoBoard'>
        <Galery carousel={false} />
        <h3 className='exception'>{props.productData.productName}</h3>
        <h3 className='exception'>R$ {props.productData.price + props.costumerData.shipping}{props.costumerData.shipping>0?<span>(valor com frete)</span>:'' }</h3>
      </div>
      <div className='infoBoard'>
        <hr />
          <p>Nome: {props.costumerData.name}</p>
          <p>CPF: {props.costumerData.cpf}</p>
          <p>Telefone: {props.costumerData.phone}</p>
          <p>E-mail: {props.costumerData.email}</p>
          <p>Endereço: {props.costumerData.street}, {props.costumerData.addrNumber}, {props.costumerData.district} - {props.costumerData.city}</p>
          <hr />
          <p>Número do cartão: xxxx.xxxx.xxxx.{props.costumerData.cardNumber.toString().substring(props.costumerData.cardNumber.toString().length - 4)}</p>
          <p>Validade {props.costumerData.validity}</p>
          <p>CVV: {props.costumerData.cvv}</p>
          <p>Nome do cartão: {props.costumerData.cardName} </p>
          <p>CPF do portador: {props.costumerData.cardCpf}</p>
          <hr />
          <Button goBack={true} text='Voltar' name='voltar' disabled={false} />  
          <Button text='Finalizar' name='finalizar' disabled={false} />
      </div>
    </div>
  )
}

export default SalePanel