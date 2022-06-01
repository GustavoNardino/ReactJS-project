import saleClass from '../Data'
type ButtonProps ={
  text: string;
  name:  string
}

function Button(props: ButtonProps) {
  return (
    <form>
      <button 
        type="button" 
        name={props.name} 
        //</form>onClick={console.log} 
        className='buttonComp'>
        {props.text}
      </button>
    </form>
  )
}

export default Button