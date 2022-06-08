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
  const [allowBtn, setAllowBtn] = useState(true)
  function handleFields (e: CostumerClass) {
    // faz o for e  libera btn
    let key: keyof CostumerClass;
    for (key in e){
      if (key){
        // alert('Preencha todos os campos')
      }else{
        setAllowBtn(false)
      }
    }
    props.costumerEvent(e)

    
  };

  return (
    <div className='contentPanel'>
      <div className='galery'>
        <img src={Image1} alt="produto" className='productImgSale' />
      </div>
      <div className='infoBoard'>
        <h4>{props.productData.productName}</h4>
        <p>R$ {props.productData.price + parseFloat(props.costumerData.shipping)}</p>      
      </div>
      <div className='infoBoard'>
        <h3>Dados pessoais</h3>
        <Input fieldName='Nome Completo' content={props.costumerData.name} name='name' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Telefone' content={props.costumerData.phone} name='phone'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='E-mail' content={props.costumerData.email} name='email'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='CPF' content={props.costumerData.cpf} name='cpf' costumerData={props.costumerData}  costumerEvent={handleFields} />    
        <h3>Endereço</h3>
        <Input fieldName='CEP' disabled={true} content={props.costumerData.cep} name='cep'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Nome da rua' disabled={true} content={props.costumerData.street} name='street'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Número' content={props.costumerData.addrNumber} name='addrNumber'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Bairro' disabled={true} content={props.costumerData.district} name='district'  costumerData={props.costumerData}  costumerEvent={handleFields} />
        <Input fieldName='Cidade' disabled={true} content={props.costumerData.city} name='city'  costumerData={props.costumerData}  costumerEvent={handleFields} />
      </div>
      <div className='infoBoard'>
        <h3>Dados do pagamento</h3>
        <Input fieldName='Número do cartão' content={props.costumerData.cardNumber} name='cardNumber' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Validade' content={props.costumerData.validity} name='validity' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='CVV' content={props.costumerData.cvv} name='cvv' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='Nome impresso no cartão' content={props.costumerData.cardName} name='cardName' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Input fieldName='CPF do portador' content={props.costumerData.cardCpf} name='cardCpf' costumerData={props.costumerData} costumerEvent={handleFields} />
        <Button text='Continuar' name='continuar' disabled={false} />
      </div>
      </div>
      
    
    
    )
  }
export default CostumerPanel