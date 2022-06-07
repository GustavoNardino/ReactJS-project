import saleClass from '../../Data'
import Button from '../Interactive/Button';
import Input from '../Interactive/Input';
import Galery from '../PageParts/Galery'
import DeliveryRadio from '../Interactive/DeliveryRadio';
import {useState } from 'react';

type productPanelData = {
  productPanelData: saleClass
  prodPanelEvent: React.Dispatch<React.SetStateAction<saleClass>>
}
function ProductPanel(props: productPanelData) {
  const [freteCalc, setFreteCalc] = useState(props.productPanelData.cep)
  
  return (
    <div className='contentPanel'>
      <Galery />
      <div className='infoBoard'>
        <h4>{props.productPanelData.productName}</h4>
        <p>{props.productPanelData.description}</p>
        <p>R$ {props.productPanelData.price}</p>
        {freteCalc!==''?
          <DeliveryRadio deliveryData={props.productPanelData} deliveryEvent={props.prodPanelEvent} />
        :''}
        <div>
          <Input 
            inputData={props.productPanelData} 
            eventChange={props.prodPanelEvent} 
            content={props.productPanelData.cep} 
            name='cep' 
            fieldName='CEP' />
          <Button buttonData={props.productPanelData} 
            eventClick={setFreteCalc} 
            text='Calcular' 
            name='cepCalcBtn' />
        </div>
      </div>
    </div>
  )
}

export default ProductPanel