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
  // const [limitInput, setLimitInput] = useState('')
  let allowInput:boolean;
  let stringValidated:RegExpMatchArray | null = [''];

  function regexTest(f: string = ''){   
    // let key: keyof CostumerClass;
    // for (key in props.costumerData){
    //   if (key === props.name){
    //     if(props.name === 'name' || props.name === 'street' || props.name === 'district' 
    //     || props.name === 'city' || props.name === 'cardName'){
    //       stringValidated = f.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g); // tira números e caracteres especiais 
    //     }else if (props.name === 'email'){
    //       stringValidated = f.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    //     }else{
    //       stringValidated = f.match(/\d+/g); // tirar tudo o que não for number
    //     }
    //   }
    // }
    // setLimitInput(f)
    // if(stringValidated){
    //     console.log('finalstring: '+stringValidated.join(''))
    //     setLimitInput(stringValidated.join(''))
    //     allowInput = true
    // }
    // setLimitInput(f)
    f.length > 0? allowInput = true : allowInput = false
  }
//============================================================================================
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
              stringValidated = f.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g); // tira números e caracteres especiais 
              stringValidated? props.costumerData[key] = stringValidated.join('') : props.costumerData[key] = ''
              console.log('') 
            }else if (key === 'email'){
              // (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) formata pra email
              stringValidated = f.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g); 
              stringValidated? props.costumerData.email = stringValidated.join('') : props.costumerData[key] = '' 
            }else{
              stringValidated = f.match(/\d+/g); // tirar tudo o que não for number
              stringValidated? props.costumerData[key] = Number(stringValidated.join('')) : props.costumerData[key] = 0 
            }
            // setLimitInput(props.costumerData[key].toString())
            props.costumerEvent(props.costumerData)
          }
        }
        
        
        
        // let key: keyof CostumerClass;
        // for (key in props.costumerData){
        //   if (key === props.name){
        //     if(key === 'cardName' || key === 'email' || key === 'name' || key === 'city' || key === 'district' || key === 'street'){
        //       console.log('string')
        //       props.costumerData[key] = limitInput;
        //     }else{
        //       console.log('number')
        //       props.costumerData[key] = Number(limitInput);
        //   }
        //     props.costumerEvent(props.costumerData)
        //   } 
        // }  
      }
  }
  return <input   
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