import React from 'react'
import saleClass from '../Data'

type DeliveryData = {
    deliveryData:saleClass
    deliveryEvent:React.Dispatch<React.SetStateAction<saleClass>>
}
let fakestate:string;

export default function DeliveryRadio(props:DeliveryData) {
    
    function handleChange(dataRadio:string){
        // alert(dataRadio)
        fakestate = dataRadio
        if(dataRadio === 'correios'){
            props.deliveryData.frete = props.deliveryData.cep
        }else{
            props.deliveryData.frete = '0.00'
        }
        props.deliveryEvent(props.deliveryData);
    }
    return (
    <>
        <legend>Opções de entrega:</legend>
        <input id='correios'
          name='correios'
          type='radio'
          value='correios'
          onChange={(e) => handleChange(e.target.value)}
          checked={fakestate === 'correios'}
          />
        <label htmlFor='correios'>Correios</label>
        <br />
        <input id='retirar'
          name='retirar'
          type='radio'
          value='retirar'
          onChange={(e) => handleChange(e.target.value)}
          checked={fakestate === 'retirar'}
          />
        <label htmlFor='retirar'>Retirar na loja</label>
        </>
  )
}
