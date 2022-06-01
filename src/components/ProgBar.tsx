import {useLocation} from 'react-router-dom'
function ProgBar () {
    const currentRoute:string = useLocation().pathname;
    
    return (
        <p></p>        
  )
}

export default ProgBar