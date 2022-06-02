import saleClass from '../Data'
import Button from './Button';
import Input from './Input';

import Image1 from '../images/productImgs/productImg1.png';
import Image2 from '../images/productImgs/productImg2.png';
import Image3 from '../images/productImgs/productImg3.png';
import Image4 from '../images/productImgs/productImg4.png';
import Image5 from '../images/productImgs/productImg5.png';
import Image6 from '../images/productImgs/productImg6.png';

type productPanelData = {
  productPanelData: saleClass
  prodPanelEvent: React.Dispatch<React.SetStateAction<saleClass>>
}
function ProductPanel(props: productPanelData) {

  return (
    <div className='contentPanel'>
      <div className='galery'>
        <img src={Image1} alt="produto" className='productImg' />
        <img src={Image2} alt="produto" className='productImg' />
        <img src={Image3} alt="produto" className='productImg' />
        <br />
        <img src={Image4} alt="produto" className='productImg' />
        <img src={Image5} alt="produto" className='productImg' />
        <img src={Image6} alt="produto" className='productImg' />
      </div>
      <div className='infoBoard'>
        <h4>{props.productPanelData.productName}</h4>
        <p>{props.productPanelData.description}</p>
        <p>R$ {props.productPanelData.price}</p>
        <label>Cálculo do frete: {props.productPanelData.frete}</label>
        <Input 
          inputData={props.productPanelData} 
          eventChange={props.prodPanelEvent} 
          content={props.productPanelData.cep} 
          name='cep' 
          fieldName='CEP' />
        <Button text='Calcular' name='cepCalcBtn' />
      </div>
    </div>
  )
}

export default ProductPanel