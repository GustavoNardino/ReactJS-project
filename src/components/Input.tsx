import saleClass from "../Data";

type InputProps = {
  //name tem que ser igual ao props.name em questão para as functions validarem corretamente
  eventChange: React.Dispatch<React.SetStateAction<saleClass>>
  inputData: saleClass
  content: string | number;
  fieldName: string;
  name: string
  //validações
  //maxlength
  //minlength
  //size
  //required
}



const cepTest = new RegExp("[0-9]{5}-[\d]{3}");
let isValid:boolean = true

function Input(props: InputProps) {
  function validate(stringTest:string){
    
  }
  function handleChange(dataInput:string){
    let key: keyof saleClass;
    for (key in props.inputData){
      if (key === props.name){
        props.inputData[key] = dataInput;
        if (cepTest.test(dataInput)){
          isValid = true;
        }else{
          isValid = false;
        }
          
      }
    }
      props.eventChange(props.inputData)
  }
  return <input   
    defaultValue={props.content} 
    onChange={(e) => handleChange(e.target.value)}
    className='inputComp'
    name={props.name} 
    placeholder={props.fieldName} />
}

export default Input