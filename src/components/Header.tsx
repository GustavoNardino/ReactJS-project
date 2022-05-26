import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import './styles.css';
import Button from './Button'
import saleClass from '../Data';

type headerControlData = {
  headerData:saleClass
  headerEvent: React.Dispatch<React.SetStateAction<saleClass>>
}
function Header(props:headerControlData) {
  
  const currentRoute:string = useLocation().pathname;
  let listPages: string[] = [
    "/productpresentation",
    "/checkout",
    "/checkoutconfirm",
    "/success"
  ]
  function nextPage(){
    if (currentRoute === listPages[0]){
      return listPages[1]
    }else if(currentRoute === listPages[1]){
      //submit costumer form
      //setSaleData
      // props.headerEvent;
      return listPages[2]
    }else if (currentRoute === listPages[2]){
      return listPages[3]
    }else{
      return "#"
    }
  }
  function prevPage(){
    if (currentRoute === listPages[3]){
      return listPages[2]
    }else if(currentRoute === listPages[2]){
      return listPages[1]
    }else if (currentRoute === listPages[1]){
      return listPages[0]
    }else{
      return "#"
    }
  }
  return (
    <div className='header'>
      <Link to={prevPage()}>
        <Button event={props.headerEvent} text='Anteior' />
        </Link>
      <Link to={nextPage()}>
        <Button event={props.headerEvent} text='Próximo' />
        </Link>
    </div>   
  )
}

export default Header