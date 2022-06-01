import saleClass from '../Data'
import Image1 from '../images/productImgs/productImg1.png';
type salePanelData = {
  saleData:saleClass
}
function SalePanel(props: salePanelData) {
  return (
    <div className='contentPanel'>
      <div className='galery'>
      <img src={Image1} alt="produto" className='productImg' />
      </div>
      <div className='infoBoard'>
        <h4>{props.saleData.productName}</h4>
        
        <p>{props.saleData.price+props.saleData.frete}(valor com frete)</p>
      </div>
      <div className='infoBoard'>
        <ul>
          <li>Nome: {props.saleData.costumerName}</li>
          <li>CPF: {props.saleData.cpf}</li>
          <li>Telefone: {props.saleData.phone}</li>
          <li>E-mail: {props.saleData.email}</li>
          <li>Endereço: {props.saleData.address}</li>
          <br />
          <li>Número do cartão: {props.saleData.cardnNumber}</li>
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