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
  value?:string
}

function Input(props: InputProps) {
  const [inputValidate, setInputValidate] = useState('inputComp')
  let allowInput:boolean;
  let stringValidated:RegExpMatchArray | null = [''];

  function regexTest(f: string){   
    console.log(f)
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
            stringValidated = f.match(/^[a-zA-Z\u00C0-\u00FF]+(([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/g); // tira números e caracteres especiais 
            stringValidated? props.costumerData[key] = stringValidated.join('') : props.costumerData[key] = ''
            console.log('nome com acento: '+stringValidated?.join(''))
          }else if (key === 'email'){
            stringValidated = f.match(/[a-zA-Z0-9@.\-_]*/); // formata email
            stringValidated? props.costumerData.email = stringValidated.join('') : props.costumerData[key] = '' 
          }else{
            stringValidated = f.match(/\d+/g); // tirar tudo o que não for number
            stringValidated? props.costumerData[key] = Number(stringValidated.join('')) : props.costumerData[key] = 0 
          }
          props.costumerEvent(props.costumerData)
        }
      }
    }
  }
  return <input   
    maxLength={props.maxLength}
    disabled={props.disabled}
    defaultValue={props.content} 
    onBlur={(f) => handleReturn(f.target.value)}
    onChange={(f) => regexTest(f.target.value)}
    onFocus={(f) => regexTest(f.target.value)}
    className={inputValidate}
    name={props.name} 
    placeholder={props.fieldName} />
}

export default Input