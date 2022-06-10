import {useState} from 'react'
import {CostumerClass, ProductClass} from '../../Data'
import Button from '../Interactive/Button';
import Input from '../Interactive/Input';
import Image1 from '../../images/productImgs/productImg1.png'


type costumerPanelData = {
  costumerEvent: React.Dispatch<React.SetStateAction<CostumerClass>>
  costumerData: CostumerClass
  productData: ProductClass
}

function CostumerPanel(props:costumerPanelData) {
  const [allowBtn, setAllowBtn] = useState(false)
  let tempUserData = new CostumerClass();
  
  function handleFields (e: CostumerClass) {
    tempUserData = e
    // let key: keyof CostumerClass;
    // for (key in e){
       if (e.cardCpf !== undefined){
        setAllowBtn(true)
    // }  
  };
}
  function handleSubmit(){
    props.costumerEvent(tempUserData)
  }
  return (
    <div className='contentPanel'>
      <div className='galery'>
        <img src={Image1} alt="produto" className='productImgSale' />
      </div>
      <div className='infoBoard'>
        <h4>{props.productData.productName}</h4>
        <p>R$ {props.productData.price + props.costumerData.shipping}</p>      
      </div>
      <div className='infoBoard'>
        <h3>Dados pessoais</h3>
        <Input fieldName='Nome Completo' content={props.costumerData.name} name='name' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Telefone' maxLength={11} content={props.costumerData.phone} name='phone'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='E-mail' content={props.costumerData.email} name='email'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='CPF' maxLength={11} content={props.costumerData.cpf} name='cpf' costumerData={props.costumerData}  costumerEvent={handleFields} />    
        <h3>Endereço</h3>
        <Input fieldName='CEP' disabled={true} content={props.costumerData.cep} name='cep'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Nome da rua' disabled={true} content={props.costumerData.street} name='street'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Número' maxLength={5} content={props.costumerData.addrNumber} name='addrNumber'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Bairro' disabled={true} content={props.costumerData.district} name='district'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Cidade' disabled={true} content={props.costumerData.city} name='city'  costumerData={props.costumerData}  costumerEvent={handleFields} />
      </div>
      <div className='infoBoard'>
        <h3>Dados do pagamento</h3>
        <Input fieldName='Número do cartão' maxLength={16} content={props.costumerData.cardNumber} name='cardNumber' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Validade' maxLength={4} content={props.costumerData.validity} name='validity' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='CVV' maxLength={3} content={props.costumerData.cvv} name='cvv' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Nome impresso no cartão' content={props.costumerData.cardName} name='cardName' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='CPF do portador' maxLength={11} content={props.costumerData.cardCpf} name='cardCpf' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Button text='Continuar' validateEvent={handleSubmit} name='continuar' disabled={!allowBtn} />
      </div>
    </div>
  )
}
export default CostumerPanel