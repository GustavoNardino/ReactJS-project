import saleClass from "../../Data";

type InputProps = {
  //name tem que ser igual ao props.name em questão para as functions validarem corretamente
  // eventChange: React.Dispatch<React.SetStateAction<string>>
  eventChange: React.Dispatch<React.SetStateAction<saleClass>>
  inputData: saleClass
  content: string | number;
  fieldName: string;
  name: string
  //validações:
    //maxlength
    //minlength
    //size
    //required
}

function Input(props: InputProps) {
  function handleChange(dataInput:string){
    let key: keyof saleClass;
    for (key in props.inputData){
      if (key === props.name){
        props.inputData[key] = dataInput;
        props.eventChange(props.inputData)
        // props.eventChange(dataInput)
      }
    }  
  }
  return <input   
    defaultValue={props.content} 
    onBlur={(e) => handleChange(e.target.value)}
    className='inputComp'
    name={props.name} 
    placeholder={props.fieldName} />
}

export default Input