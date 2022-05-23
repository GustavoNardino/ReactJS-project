import React from 'react'
import Button from './Button';
import Input from './Input';
import ProductItem from './ProductItem';


function ContentPanel() {
  //STATE PARA OS PRODUCTS E INPUTS FIELDS
  //COLETA DE DADOS
  return (
    <div className='contentPanel'>ContentPanel
        <ProductItem />
        <Input />
        <Button text="Selecionar" />
    </div>
  )
}

export default ContentPanel