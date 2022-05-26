import saleClass from '../Data'
import Input from './Input';

type productPanelData = {
  productPresData: saleClass
}
function ProductPanel(props: productPanelData) {
  
  return (
    <div className='contentPanel'>
          <div className='galery'>
            <img src='' alt="produto" className='productImg' />
          </div>
          <div className='infoBoard'>
            <p>{props.productPresData.productName}</p>
            <p>{props.productPresData.description}</p>
            <p>{props.productPresData.price}</p>
            <label>Cálculo do frete: </label>
            <Input fieldName='CEP' content={props.productPresData.cep} />
          </div>

    </div>
  )
}

export default ProductPanel