import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './styles.css';
import {useLocation} from 'react-router-dom'
import CostumerPanel from '../components/CostumerPanel';


function Header() {
  let listPages: string[] = [
    "/productpresentation",
    "/checkout",
    "/checkoutconfirm",
    "/success"
  ]
  const currentRoute:string = useLocation().pathname;

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
    <div className='header'>Header
      <Link to={prevPage()}>
        <Button text='Anteior' />
      </Link>
      <Link to={nextPage()}>
        <Button text='Próximo' />
      </Link>
    </div>   
  )
}

export default Header