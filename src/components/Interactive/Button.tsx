import {useLocation, useNavigate} from 'react-router-dom'
type ButtonProps ={
  text: string;
  name:  string
  disabled:boolean
  saleEvent?: () => void
  validateEvent?: () => void
}

function Button(props: ButtonProps) {
  let currentView:string = useLocation().pathname;
  let listPages: string[] = [
    "/product",
    "/checkout",
    "/confirm",
    "/success"
  ]
  let navigate = useNavigate();
  const nextPage = () => {

    switch (currentView) {
      case listPages[0]:
        navigate(listPages[1])
        break
      case listPages[1]:
        props.validateEvent
        navigate(listPages[2])
        break
      case listPages[2]:
        navigate(listPages[3])
        break
      case listPages[3]:
        navigate(listPages[0])
        
        window.location.reload()
        break
      default:
          return '#'
    }
  };
  
  return (
      <button 
        disabled={props.disabled}
        type="button" 
        name={props.name} 
        onClick={nextPage} 
        className='buttonComp'>
        {props.text}
      </button>
  )
}

export default Button