import saleClass from "../Data";

type InputProps = {
  inputData: saleClass
  content: string;
  fieldName: string;
  name: string
  eventChange: React.Dispatch<React.SetStateAction<saleClass>>
}
function Input(props: InputProps) {
  function handleChange(dataInput:string){
    //iterar trocando por [props.name] assim o componente fica reutilizavel
    if(props.name === 'cep'){
      props.inputData.cep = dataInput;
    }else if (props.name === 'costumerName'){
      props.inputData.costumerName = dataInput;
    }else if (props.name === 'cpf'){
      props.inputData.cpf = dataInput;
    }else if (props.name === 'phone'){
      props.inputData.phone = dataInput;
    }else if (props.name === 'email'){
      props.inputData.email = dataInput;
    }else if (props.name === 'address'){
      props.inputData.address = dataInput;
    }else if (props.name === 'cardnNumber'){
      props.inputData.cardnNumber = dataInput;
    }else if (props.name === 'validity'){
      props.inputData.validity = dataInput;
    }else if (props.name === 'cvv'){
      props.inputData.cvv = dataInput;
    }else if (props.name === 'cardName'){
      props.inputData.cardName = dataInput;
    }else if (props.name === 'cardCpf'){
      props.inputData.cardCpf = dataInput;
    }
    props.eventChange(props.inputData)
  }
  return <input 
    defaultValue={props.content} 
    onChange={(e) => handleChange(e.target.value)} 
    className="inputComp" 
    name={props.name} 
    type="text" 
    placeholder={props.fieldName} />
}

export default Input