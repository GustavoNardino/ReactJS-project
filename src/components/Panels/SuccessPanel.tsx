import {CostumerClass, ProductClass} from '../../Data'
// import { useNavigate } from "react-router-dom";
import Button from '../Interactive/Button';
import Image from '../../images/productImgs/productImg1.png';

type successPanelData = {
  costumerData: CostumerClass
  productData: ProductClass
  saleId:number
  saleEvent?: ()=> void
  }
function SuccessPanel(props: successPanelData) {
  // let navigate = useNavigate();
  // const nextPage = () => {
  //   navigate("/product");
  // };
    return (
        <div className='contentPanel'>
          <div className='successBoard'>
            <h1>PRONTO!</h1>
            
              <img src={Image} alt="produto" className='successImg'/>
            
            <p>Pedido #{props.saleId}</p>
            <p>{props.costumerData.name}, sua compra de um 
            {props.productData.productName} no valor de 
            {props.productData.price + props.costumerData.shipping}, foi realizada com sucesso</p>
            {/* button fechar faz o link para /product com um new saleClass */}
            <Button text='Fechar' name='comprar' disabled={false} saleEvent={props.saleEvent} />
          </div>
          
        </div>
    )
  }
  
  export default SuccessPanel