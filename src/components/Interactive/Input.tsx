import {useState} from 'react'
import {CostumerClass} from '../../Data'

type InputProps = {
  costumerEvent: (e:CostumerClass) => void
  costumerData: CostumerClass
  content: string|number;
  fieldName: string;
  name: string
  disabled?: boolean
  maxLength?:number
  value?:string
}

function Input(props: InputProps) {
  const [inputValidate, setInputValidate] = useState('inputComp')
  // const [autoFormat, setAutoFormat] = useState<string>()
  let allowInput:boolean;
  let stringValidated:RegExpMatchArray | null = [''];

  function regexTest(f: string){   
    f.length > 0? allowInput = true : allowInput = false
  }
  function handleReturn(f: string = ''){
    if(!allowInput){ 
      setInputValidate('inputError')
    }else{
      setInputValidate('inputComp')
      let key: keyof CostumerClass;
      for (key in props.costumerData){
        if (key === props.name){
          if(key === 'name' || key === 'street' || key === 'district' 
          || key === 'city' || key === 'cardName'){
            // tira números e caracteres especiais 
            stringValidated = f.match(/^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/g); 
            stringValidated? props.costumerData[key] = stringValidated.join('') : props.costumerData[key] = ''
            console.log(props.costumerData[key])
          }else if (key === 'email'){
            // formata email com @ - _ .
            stringValidated = f.match(/[a-zA-Z0-9@.\-_]*/); 
            stringValidated? props.costumerData.email = stringValidated.join('') : props.costumerData[key] = '' 
            console.log(props.costumerData[key])
          }else{
            // tirar tudo o que não for number
            stringValidated = f.match(/\d+/g); 
            stringValidated? props.costumerData[key] = Number(stringValidated.join('')) : props.costumerData[key] = 0 
            console.log(props.costumerData[key])
          }
          // setAutoFormat(stringValidated?.join(''))
          props.costumerEvent(props.costumerData)
        }
      }
    }
  }
  return <input  
    // value={autoFormat} 
    maxLength={props.maxLength}
    disabled={props.disabled}
    defaultValue={props.content} 
    onBlur={(f) => handleReturn(f.target.value)}
    onChange={(f) => regexTest(f.target.value)}
    className={inputValidate}
    name={props.name} 
    placeholder={props.fieldName} />
}

export default Input