import {useState} from 'react'
import { ProductClass, CostumerClass } from '../../Data'

type DeliveryData = {
    costumerData: CostumerClass
    costumerEvent: (e: CostumerClass) => void
    productData: ProductClass
}

let isChecked:string = 'correios'
function DeliveryRadio(props:DeliveryData) {
  isChecked==='correios'?props.costumerData.shipping = 10.0:props.costumerData.shipping = 0
  props.costumerEvent(props.costumerData);
  const [radioCheck, setRadioCheck] = useState(isChecked)
    function handleChange(dataRadio:string){
        if(dataRadio === 'correios'){
            props.costumerData.shipping = 10.0
            props.costumerEvent(props.costumerData);
        }else{
          props.costumerData.shipping = 0.0
          props.costumerEvent(props.costumerData);
        }
        isChecked=dataRadio
        setRadioCheck(dataRadio)
        
    }
    return (
      <>
        <p>Frete: R$ {isChecked==='correios'? '10.0':'0.0'}</p>
        <legend>Opções de entrega:</legend>
        <input id='correios'
          name='correios'
          type='radio'
          value='correios'
          onChange={(e) => handleChange(e.target.value)}
          checked={radioCheck === 'correios'}
          // defaultChecked={true}
          />
        <label htmlFor='correios'>Correios</label>
        <br />
        <input id='retirar'
          name='retirar'
          type='radio'
          value='retirar'
          onChange={(e) => handleChange(e.target.value)}
          checked={radioCheck === 'retirar'}
          />
        <label htmlFor='retirar'>Retirar na loja</label>
        </>      
      
  )
}

export default DeliveryRadio