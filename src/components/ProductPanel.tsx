import saleClass from '../Data'
import Button from './Button';
import Input from './Input';
import Galery from './Galery'
import DeliveryRadio from './DeliveryRadio';

type productPanelData = {
  productPanelData: saleClass
  prodPanelEvent: React.Dispatch<React.SetStateAction<saleClass>>
}
function ProductPanel(props: productPanelData) {

  return (
    <div className='contentPanel'>
      <Galery />
      <div className='infoBoard'>
        <h4>{props.productPanelData.productName}</h4>
        <p>{props.productPanelData.description}</p>
        <p>R$ {props.productPanelData.price}</p>
        <p>Frete: R$ {props.productPanelData.frete}</p>
        <DeliveryRadio deliveryData={props.productPanelData} deliveryEvent={props.prodPanelEvent} />
        <div>
          <Input 
            inputData={props.productPanelData} 
            eventChange={props.prodPanelEvent} 
            content={props.productPanelData.cep} 
            name='cep' 
            fieldName='CEP' />
            
          <Button buttonData={props.productPanelData} 
            eventClick={props.prodPanelEvent} 
            text='Calcular' 
            name='cepCalcBtn' />
        </div>
      </div>
    </div>
  )
}

export default ProductPanel