import {useLocation} from 'react-router-dom'


function ProgBar () {
    const currentRoute:string = useLocation().pathname;
    switch (currentRoute) {
      case "/product":
        return <div className='progBar'>ETAPA 1</div>
      case "/checkout":
        return <div className='progBar'>ETAPA 1 - ETAPA 2</div>
      case "/confirm":
        return <div className='progBar'>ETAPA 1 - ETAPA 2 - ETAPA 3</div>
      case "/success":
        return <div className='progBar'>ETAPA 1 - ETAPA 2 - ETAPA 3 - ETAPA 4</div>
      default:
        return <div className='progBar'><img alt={currentRoute} /></div>
    }
    
}

export default ProgBar