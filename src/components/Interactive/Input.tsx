import {CostumerClass, ProductClass} from '../../Data'
type InputProps = {
  // costumerEvent: (e: string) => void
  costumerEvent: (e:CostumerClass) => void
  costumerData: CostumerClass
  content: string|number;
  fieldName: string;
  name: string
  disabled?: boolean
}

function Input(props: InputProps) {  
  function handleValidade(){
    let valPass:boolean = true;
    return valPass
  }
  function handleReturnInputData(f:string){
    let key: keyof CostumerClass;
    for (key in props.costumerData){
      if (key === props.name){
        props.costumerData[key] = f;
        props.costumerEvent(props.costumerData)
        // handleValidade()? props.costumerEvent() : alert('digite corretamente')
      }
    }  
  }
  return <input   
    disabled={props.disabled}
    defaultValue={props.content} 
    onBlur={(f) => handleReturnInputData(f.target.value)}
    onChange={handleValidade}
    className='inputComp'
    name={props.name} 
    placeholder={props.fieldName} />
}

export default Input