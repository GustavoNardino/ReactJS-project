import { useState, useEffect } from 'react';
import Galery from '../PageParts/Galery'
import DeliveryRadio from '../Interactive/DeliveryRadio';
import Button from '../Interactive/Button';
import Input from '../Interactive/Input';
import {CostumerClass, CostumerContext, ProductClass} from '../../Data'
// import ViaCep from 'react-via-cep';

type productPanelData = {
  costumerEvent: React.Dispatch<React.SetStateAction<CostumerClass>>
  costumerData: CostumerClass
  productData: ProductClass
}

let btnText:string = 'Calcular'

function ProductPanel(props: productPanelData) {
  const [shippingCalc, setShippingCalc] = useState(props.costumerData.cep?true:false)
  const [cepData, setCepData] = useState('')
  //criar um state para o endereço mudar quando o cep
  //for trocado, de preferência no onChange ao invés do onBlur
  //pra não precisar esperar o usuário tirar o foco do input
  //já que cada um tem uma experiência diferente em formulários online
  const getCepData = async (cep:CostumerClass) =>{
    const api = await fetch(`https://viacep.com.br/ws/${cep.cep}/json/`);
    const data = await api.json();
    props.costumerData.street= data.logradouro
    props.costumerData.district=data.bairro
    props.costumerData.city=data.localidade
    props.costumerData.cep = cep.cep
    props.costumerEvent(props.costumerData)
    btnText = 'Comprar'
    setCepData(data.logradouro+', '+data.bairro+', '+data.localidade)
    setShippingCalc(true)
  }
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
            {/* <p>{props.costumerData.street}, {props.costumerData.district} - {props.costumerData.city}</p> */}
            <p>{cepData? cepData: 'Endereço não encontrado'}</p>
          </>:''}
        <div>
          <Input 
            name='cep'
            maxLength={8}
            fieldName='CEP (só os números)'
            content={props.costumerData.cep}
            costumerData={props.costumerData}
            costumerEvent={getCepData} />
        </div>
          <Button text={btnText} name='comprar' disabled={!shippingCalc} />
      </div>
    </div>
  )
}

export default ProductPanel