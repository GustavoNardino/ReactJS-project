import saleClass from '../Data'
type ButtonProps ={
  text: string;
  event: React.Dispatch<React.SetStateAction<saleClass>>
  
}
function Button(props: ButtonProps) {
  return (
    <form>
      <button onClick={() => props.event} className='btn' type='button'>{props.text}</button>
    </form>
  )
}

export default Button