import saleClass from '../../Data'
import {useState} from 'react'
type ButtonProps ={
  text: string;
  name:  string
  buttonData: saleClass
  eventClick: React.Dispatch<React.SetStateAction<string>>
}

function Button(props: ButtonProps) {
  function handleClick(){ 
    
    props.buttonData.frete = '10.0'
    props.eventClick(props.buttonData.frete)
    // props.eventClick(props.buttonData)
  }
  return (
      <button 
        type="button" 
        name={props.name} 
        onClick={() => handleClick()} 
        className='buttonComp'>
        {props.text}
      </button>
  )
}

export default Button