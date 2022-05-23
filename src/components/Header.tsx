import React from 'react'
import { useState } from 'react'
import { Link, HistoryRouterProps } from 'react-router-dom'
import Button from './Button'


function Header() {
  const listPages: string[] = [
    "/productpresentation",
    "/checkout",
    "/checkoutconfirm",
    "/success"
  ]
//  23:41 NO TUTORIAL DO MENINÃO  
//  STATE PARA OS NAV BTN
  const [page, setPage] = useState<string>("/productpresentation")

  function nextPage(currentPage:string){
    if (currentPage === "/productpresentation"){
      setPage("/checkout");
    }else if (currentPage === "/checkout"){
      setPage("/checkoutconfirm");
    } else if (currentPage === "/checkoutconfirm") {
      setPage("/success");
    }
    return page;
  }
  function prevPage(){
    return "";
  }
  
  return (
    <div className='header'>Header
      <Link to={prevPage()}>
        <Button text='Anteior' />
      </Link>
      <Link to={nextPage(page)}>
        <Button text='Próximo' />
      </Link>
    </div>   
  )
}

export default Header