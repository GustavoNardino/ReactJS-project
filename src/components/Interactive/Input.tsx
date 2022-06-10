import {CostumerClass} from '../../Data'
import {useState} from 'react'

type InputProps = {
  costumerEvent: (e:CostumerClass) => void
  costumerData: CostumerClass
  content: string|number;
  fieldName: string;
  name: string
  disabled?: boolean
  maxLength?:number
}

function Input(props: InputProps) {
  const [inputValidate, setInputValidate] = useState('inputComp')
  const [limitInput, setLimitInput] = useState('')
  let allowInput:boolean;
  let stringValidated:any;
  function regexTest(f: string){        
    //verificar o props.name e executar o teste correto
    stringValidated = f.match(/\d+/g); // tirar tudo o que não for number
    setLimitInput(stringValidated)
    let key: keyof CostumerClass;
    for (key in props.costumerData){
      if (key === props.name){
        if(key === 'cardName' || key === 'email' || key === 'name' || key === 'city' || key === 'district' || key === 'street'){
          
        }else{
      }
        props.costumerEvent(props.costumerData)
      }
    }  
    f.length > 0? allowInput = true : allowInput = false
  }
  function handleReturn(){
    let finalString = stringValidated.join('')
    console.log('finalstring: '+stringValidated.join(''))
    if(!allowInput){ 
      setInputValidate('inputError')
    }else{
      setInputValidate('inputComp')
      let key: keyof CostumerClass;
      for (key in props.costumerData){
        if (key === props.name){
          if(key === 'cardName' || key === 'email' || key === 'name' || key === 'city' || key === 'district' || key === 'street'){
            console.log('string')
            props.costumerData[key] = finalString;
            // console.log(finalString)
          }else{
            console.log('number')
            // console.log(finalString)
            props.costumerData[key] = Number(finalString);
        }
          props.costumerEvent(props.costumerData)
        }
      }  
    }
  }
  return <input   
    value={limitInput}
    maxLength={props.maxLength}
    disabled={props.disabled}
    defaultValue={props.content} 
    onBlur={handleReturn}
    onChange={(f) => regexTest(f.target.value)}
    className={inputValidate}
    name={props.name} 
    placeholder={props.fieldName} />
}

export default Input