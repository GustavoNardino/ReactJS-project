import {useLocation} from 'react-router-dom'


function ProgBar () {
    const currentRoute:string = useLocation().pathname;
    switch (currentRoute) {
      case "/productpresentation":
        return <div className='progBar'>=======================================</div>
      case "/checkout":
        return <div className='progBar'>=================================================================</div>
      case "/checkoutconfirm":
        return <div className='progBar'>===========================================================================================</div>
      case "/success":
        return <div className='progBar'>==================================================================================================================================</div>
      default:
        return <div className='progBar'><img alt={currentRoute} /></div>
    }
    
}

export default ProgBar