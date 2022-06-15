import {CostumerClass, ProductClass} from '../../Data'
import Button from '../Interactive/Button';
import Image from '../../images/productImgs/productImg1.png';
import Galery from '../PageParts/Galery';
type successPanelData = {
  costumerData: CostumerClass
  productData: ProductClass
  saleId:number
  saleEvent?: ()=> void
  }
function SuccessPanel(props: successPanelData) {
    return (
        <div className='contentPanel'>
          <div className='successBoard'>
            <h1>PRONTO!</h1>
              <Galery carousel={false} />
            <p>Pedido #{props.saleId}</p>
            <p>{props.costumerData.name}, sua compra de um {props.productData.productName} no valor de 
            {props.productData.price + props.costumerData.shipping}, foi realizada com sucesso</p>
            <Button text='Fechar' name='comprar' disabled={false} saleEvent={props.saleEvent} />
          </div>
          
        </div>
    )
  }
  
  export default SuccessPanel