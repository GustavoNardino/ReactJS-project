import {useLocation} from 'react-router-dom'

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