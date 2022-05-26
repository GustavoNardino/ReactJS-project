type InputProps = {
  content: string | number;
  fieldName: string;
}
function Input(props: InputProps) {
  return <input type="text" placeholder={props.fieldName} />
}

export default Input