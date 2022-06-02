import {useLocation} from 'react-router-dom'


function ProgBar () {
    const currentRoute:string = useLocation().pathname;
    switch (currentRoute) {
      case "/productpresentation":
        return <div className='progBar'><img src='' /></div>
      case "/checkout":
        return <div className='progBar'><img src='' /></div>
      case "/checkoutconfirm":
        return <div className='progBar'><img src='' /></div>
      case "/success":
        return <div className='progBar'><img src='' /></div>
      default:
        return <div className='progBar'><img alt={currentRoute} /></div>
    }
    
}

export default ProgBar