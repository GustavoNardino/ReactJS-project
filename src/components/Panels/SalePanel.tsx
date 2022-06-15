import {CostumerClass, ProductClass} from '../../Data'
import Image1 from '../../images/productImgs/productImg1.png';
import Button from '../Interactive/Button';
import Galery from '../PageParts/Galery';

type salePanelData = {
  costumerData: CostumerClass
  productData: ProductClass
}
function SalePanel(props: salePanelData) {
  return (
    <div className='contentPanel'>
      <Galery carousel={false} />
      <div className='infoBoard'>
        <h4>{props.productData.productName}</h4>
        <p>R$ {props.productData.price + props.costumerData.shipping}{props.costumerData.shipping!==0?<span>(valor com frete)</span>:'' }</p>
        <ul>
          <li>Nome: {props.costumerData.name}</li>
          <li>CPF: {props.costumerData.cpf}</li>
          <li>Telefone: {props.costumerData.phone}</li>
          <li>E-mail: {props.costumerData.email}</li>
          <li>Endereço: {props.costumerData.street}, {props.costumerData.addrNumber}, {props.costumerData.district} - {props.costumerData.city}</li>
          <br />
          <li>Número do cartão: xxxx.xxxx.xxxx.{props.costumerData.cardNumber.toString().substring(props.costumerData.cardNumber.toString().length - 4)}</li>
          <li>Validade {props.costumerData.validity}</li>
          <li>CVV: {props.costumerData.cvv}</li>
          <li>Nome do cartão: {props.costumerData.cardName} </li>
          <li>CPF do portador: {props.costumerData.cardCpf}</li>
        </ul>
        <Button text='Finalizar' name='finalizar' disabled={false} />
      </div>
    </div>
  )
}

export default SalePanel