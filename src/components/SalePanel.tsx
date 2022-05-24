import React, {useState} from 'react'
import saleClass from '../Data'
import CostumerPanel from '../components/CostumerPanel';
import ProductPanel from '../components/ProductPanel';

function SalePanel() {
  return (
    <div className='contentPanel'>
        <ProductPanel />
        <CostumerPanel />
    </div>
  )
}

export default SalePanel