import { useState, ChangeEvent } from 'react';
import {CostumerClass, ProductClass} from '../../Data'
import Galery from '../PageParts/Galery'
import Button from '../Interactive/Button';
import Input from '../Interactive/Input';
import DeliveryRadio from '../Interactive/DeliveryRadio';

type productPanelData = {
  costumerEvent: React.Dispatch<React.SetStateAction<CostumerClass>>
  costumerData: CostumerClass
  productData: ProductClass
}
let btnText:string = 'Calcular'
function ProductPanel(props: productPanelData) {
  const [shippingCalc, setShippingCalc] = useState(false)
  function handleCep (e: CostumerClass) {
    props.costumerData.cep = e.cep
    props.costumerEvent(props.costumerData)
    //trocar pela chamada da API
    props.costumerData.street='Antonio Ader'
    props.costumerData.district='Fanny'
    props.costumerData.city='Curitiba/PR'
    btnText = 'Comprar'
    setShippingCalc(true)
  };
  const handleShipping = (e: CostumerClass) => {
    props.costumerData.shipping = e.shipping
    props.costumerEvent(props.costumerData)
    
  };
  
  return (
    <div className='contentPanel'>
      <Galery />
    <div className='infoBoard'>
      <h4>{props.productData.productName}</h4>
      <p>{props.productData.description}</p>
      <p>R$ {props.productData.price}</p>
      {shippingCalc?
        <>
          <DeliveryRadio costumerData={props.costumerData} productData={props.productData} costumerEvent={handleShipping} />
          <p>{props.costumerData.street}, {props.costumerData.district} - {props.costumerData.city}</p>
        </>
      :''}
      <div>
        <Input 
          fieldName='CEP (só os números)'
          content={props.costumerData.cep}
          name='cep'
          costumerData={props.costumerData} 
          costumerEvent={handleCep} />
      </div>
        <Button text={btnText} name='comprar' disabled={!shippingCalc} />
    </div>
    </div>
  )
}

export default ProductPanel