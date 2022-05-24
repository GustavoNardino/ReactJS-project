import React, {useState} from 'react'
import saleClass from '../Data'
import Header from '../components/Header';


function CostumerPanel() {
  const costumer = new saleClass;
  const [costumerForm, setCostumerForm] = useState(costumer)

  function getFormData(formData:string | number){
    
  }
  return (
    <div className='contentPanel'>
      <form action="">
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='CPF' />
        <input type="text" placeholder='Celular' />
        <input type="text" placeholder='E-mail' />
        <input type="text" placeholder='Endereço' />
        <input type="text" placeholder='Cartão de crédito' />
        <input type="text" placeholder='Validade' />
        <input type="text" placeholder='CVV' />
        <input type="text" placeholder='Nome do portador' />
        <input type="text" placeholder='CPF do portador' />
        <button onClick={() => getFormData(0)} className='btn'>Avançar</button>
      </form>
    </div>
  )
}

export default CostumerPanel