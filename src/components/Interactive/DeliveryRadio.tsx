import React, {useState} from 'react'
import saleClass from '../../Data'

type DeliveryData = {
    deliveryData:saleClass
    deliveryEvent:React.Dispatch<React.SetStateAction<saleClass>>
}

let isChecked:string = 'correios'
export default function DeliveryRadio(props:DeliveryData) {
  const [radioCheck, setRadioCheck] = useState(isChecked)
  // const [showRadio, setShowRadio] = useState(false)
    function handleChange(dataRadio:string){
        if(dataRadio === 'correios'){
            props.deliveryData.frete = '10.0'
            props.deliveryEvent(props.deliveryData);
        }else{
            props.deliveryData.frete = '0.00'
            props.deliveryEvent(props.deliveryData);
        }
        isChecked=dataRadio
        setRadioCheck(dataRadio)
        
    }
    return (
      <>
        <p>Frete: R$ {props.deliveryData.frete}</p>
        <legend>Opções de entrega:</legend>
        <input id='correios'
          name='correios'
          type='radio'
          value='correios'
          onChange={(e) => handleChange(e.target.value)}
          checked={radioCheck === 'correios'}
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
