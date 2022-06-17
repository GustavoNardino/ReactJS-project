import Galery from '../PageParts/Galery';
import Button from '../Interactive/Button';
import {CostumerClass, ProductClass} from '../../Data'

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
            <h2>PRONTO!</h2>
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