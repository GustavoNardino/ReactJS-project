import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import saleClass from '../Data';
import nextImg from '../images/navImgs/rightImg.png'
import prevtImg from '../images/navImgs/leftImg.png'

type headerControlData = {
  headerData:saleClass
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
      <Link className='navBtn' to={prevPage()}><img src={prevtImg}/>
        </Link>
      <Link className='navBtn' to={nextPage()}><img src={nextImg}/>
        </Link>
    </div>   
  )
}

export default Header