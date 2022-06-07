import saleClass from '../../Data'
import Image1 from '../../images/productImgs/productImg1.png';
type salePanelData = {
  saleData:saleClass
}
function SalePanel(props: salePanelData) {
  return (
    <div className='contentPanel'>
      <div className='galery'>
        <img src={Image1} alt="produto" className='productImgSale' />
      </div>
      <div className='infoBoard'>
        <h4>{props.saleData.productName}</h4>
        <p>R$ {parseFloat(props.saleData.price) + parseFloat(props.saleData.frete)}{props.saleData.frete!=='0.00'?<span>(valor com frete)</span>:'' }</p>
      </div>
      <div className='infoBoard'>
        <ul>
          <li>Nome: {props.saleData.costumerName}</li>
          <li>CPF: {props.saleData.cpf}</li>
          <li>Telefone: {props.saleData.phone}</li>
          <li>E-mail: {props.saleData.email}</li>
          <li>Endereço: {props.saleData.street}, {props.saleData.addrNumber}, {props.saleData.district}</li>
          <br />
          <li>Número do cartão: {props.saleData.cardNumber}</li>
          <li>Validade {props.saleData.validity}</li>
          <li>CVV: {props.saleData.cvv}</li>
          <li>Nome do cartão: {props.saleData.cardName}</li>
          <li>CPF do portador: {props.saleData.cardCpf}</li>
        </ul>
        </div>
    </div>
  )
}

export default SalePanel