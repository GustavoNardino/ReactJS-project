import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

import nextImg from '../../images/navImgs/rightImg.png'
import prevtImg from '../../images/navImgs/leftImg.png'
import {useState} from 'react'

// type headerControlData = {
//   headerData:saleClass
// }



let showBar:number = 0;

function Header () {
    const currentRoute:string = useLocation().pathname;
    
    switch (currentRoute) {
      case "/product":
        showBar = 1
        break
      case "/checkout":
        showBar = 2
        break
      case "/confirm":
        showBar = 3
        break
      case "/success":
        showBar = 4
        break
    }
    return (
      <div className='progBar'>
        {showBar===1 || showBar===2 || showBar===3 || showBar===4? <div className='stageBar'></div>:''}
        {showBar===2 || showBar===3 || showBar===4?<div className='stageBar'></div>: ''}
        {showBar===3 || showBar===4? <div className='stageBar'></div>: ''}
        {showBar===4? <div className='stageBar'></div>:''}
      </div>
    )
    
}

export default Header



/*
function Header(props:headerControlData) {
  const currentRoute:string = useLocation().pathname;  
  
  let listPages: string[] = [
    "/product",
    "/checkout",
    "/confirm",
    "/success"
  ]
  
  function nextPage(){    
    switch (currentRoute) {
      case listPages[0]:
        return listPages[1]
      case listPages[1]:
        return listPages[2]
      case listPages[2]:
        return listPages[3]
      default:
          return '#'
    }
  }
  function prevPage(){
    switch (currentRoute) {
      case listPages[3]:
        return listPages[2]
      case listPages[2]:
        return listPages[1]   
      case listPages[1]:
        return listPages[0]
      default:
          return '#'
    }
  }
  return (
    <div className='header'>
      <Link className='navBtn' to={prevPage()}><img src={prevtImg}/></Link>
      <Link className='navBtn' to={nextPage()}><img src={nextImg}/></Link>
    </div>   
  )
}
*/