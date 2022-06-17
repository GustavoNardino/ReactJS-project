import { useState } from 'react';
import Galery from '../PageParts/Galery'
import DeliveryRadio from '../Interactive/DeliveryRadio';
import Button from '../Interactive/Button';
import Input from '../Interactive/Input';
import {CostumerClass, ProductClass} from '../../Data'

type productPanelData = {
  costumerEvent: React.Dispatch<React.SetStateAction<CostumerClass>>
  costumerData: CostumerClass
  productData: ProductClass
}

let btnText:string = 'Calcular'

function ProductPanel(props: productPanelData) {
  const [shippingCalc, setShippingCalc] = useState(props.costumerData.cep?true:false)

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
      <div className='infoBoard'>
        <Galery carousel={true} />
      </div>
      <div className='infoBoard'>
        <h3>{props.productData.productName}</h3>
        <p>{props.productData.description}</p>
        <h3>R$ {props.productData.price}</h3>
        {shippingCalc?<>
            <DeliveryRadio costumerData={props.costumerData} productData={props.productData} costumerEvent={handleShipping} />
            <p>{props.costumerData.street}, {props.costumerData.district} - {props.costumerData.city}</p>
          </>:''}
        <div>
          <Input 
            name='cep'
            fieldName='CEP (só os números)'
            content={props.costumerData.cep}
            costumerData={props.costumerData}
            costumerEvent={handleCep} />
        </div>
          <Button text={btnText} name='comprar' disabled={!shippingCalc} />
      </div>
    </div>
  )
}

export default ProductPanel