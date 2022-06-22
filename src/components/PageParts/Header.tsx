import {useLocation} from 'react-router-dom'

let w:string;

function Header () {
    const currentRoute:string = useLocation().pathname;
    switch (currentRoute) {
      case "/product":
        w = '25%'
        break
      case "/checkout":
        w = '50%'
        break
      case "/confirm":
        w = '75%'
        break
      case "/success":
        w = '100%'
        break
    }
    return (
      <div className='progBar'>
        <div style={{width: w}} className='stageBar'>{w}</div>
      </div>
    )
    
}

export default Header