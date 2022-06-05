import saleClass from '../../Data'
type ButtonProps ={
  text: string;
  name:  string
  buttonData: saleClass
  eventClick: React.Dispatch<React.SetStateAction<string>>
}

function Button(props: ButtonProps) {
  function handleClick(){ 
    //abre o radio. setFlowState showRadio = true
    // props.buttonData.frete = props.buttonData.cep
    props.eventClick('10.0')
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