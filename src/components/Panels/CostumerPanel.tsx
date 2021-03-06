import {useState} from 'react'
import Galery from '../PageParts/Galery';
import Button from '../Interactive/Button';
import Input from '../Interactive/Input';
import {CostumerClass, ProductClass} from '../../Data'

type costumerPanelData = {
  costumerEvent: React.Dispatch<React.SetStateAction<CostumerClass>>
  costumerData: CostumerClass
  productData: ProductClass
}

function CostumerPanel(props:costumerPanelData) {
  const [allowBtn, setAllowBtn] = useState(props.costumerData.cardCpf?true:false)
  let tempUserData = new CostumerClass();
  function handleFields (e: CostumerClass) {
    tempUserData = e
    let key: keyof CostumerClass;
    for (key in e){
       if (e[key] !== undefined){
        setAllowBtn(true)
      }
    }
  }
  function handleSubmit(){
    props.costumerEvent(tempUserData)
  }
  
  return (
    <div className='contentPanel'>
      <div className='infoBoard'>
        <Galery carousel={false} />
        <h3 className='exception'>{props.productData.productName}</h3>
        <h3 className='exception'>R$ {props.productData.price + props.costumerData.shipping}{props.costumerData.shipping>0?<span>(valor com frete)</span>:'' }</h3>
      </div>
      <div className='infoBoard'>
        <div>
        <h4>Dados pessoais</h4>
        <Input fieldName='Nome Completo' content={props.costumerData.name} name='name' 
          costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Telefone (só os números)' maxLength={11} content={props.costumerData.phone} name='phone'  
          costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='E-mail' content={props.costumerData.email} name='email'  
          costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='CPF (só os números)' maxLength={11} content={props.costumerData.cpf} name='cpf' 
          costumerData={props.costumerData}  costumerEvent={handleFields} />    
        <h4>Endereço</h4>
        <Input fieldName='CEP (só os números)' disabled={true} content={props.costumerData.cep} name='cep'  
          costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Nome da rua' disabled={true} content={props.costumerData.street} name='street'  
          costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Número' maxLength={5} content={props.costumerData.addrNumber} name='addrNumber'  
          costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Bairro' disabled={true} content={props.costumerData.district} name='district'  
          costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Cidade' disabled={true} content={props.costumerData.city} name='city'  
          costumerData={props.costumerData}  costumerEvent={handleFields} />
        </div>
        <div>
        <h4>Dados do pagamento</h4>
        <Input fieldName='Número do cartão (só os números)' maxLength={16} content={props.costumerData.cardNumber} name='cardNumber' 
          costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Validade (só os números)' maxLength={4} content={props.costumerData.validity} name='validity' 
          costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='CVV' maxLength={3} content={props.costumerData.cvv} name='cvv' 
          costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Nome impresso no cartão' content={props.costumerData.cardName} name='cardName' 
          costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='CPF do portador (só os números)' maxLength={11} content={props.costumerData.cardCpf} name='cardCpf' 
          costumerData={props.costumerData} costumerEvent={handleFields} />
        </div>
        <Button text='Continuar' validateEvent={handleSubmit} name='continuar' disabled={!allowBtn} />
      </div>
    </div>
  )
}
export default CostumerPanel