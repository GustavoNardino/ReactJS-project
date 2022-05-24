import React, {useState} from 'react'
import saleClass from '../Data'

function ProductPanel() {
  //STATE PARA OS PRODUCTS E INPUTS FIELDS
  //COLETA DE DADOS
  const produto = new saleClass;
  const [prodData, setProdData] = useState(produto)
  return (
    <div className='contentPanel'>ContentPanel
          <div className='galery'>
            <img src="../images/productImg.png" alt="produto" className='productImg' />
          </div>
          <div className='infoBoard'>
            <p>{prodData.productName}</p>
            <p>{prodData.description}</p>
            <p>{prodData.price}</p>
          </div>

    </div>
  )
}

export default ProductPanel