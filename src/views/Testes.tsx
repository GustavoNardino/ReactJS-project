import { useLocation } from "react-router-dom"
import saleClass from "../Data"

export default function Testes() {
    let test1 = useLocation().pathname
    return (
        <>
            <div>
                uselocatio hash: {test1}
            </div>
        </>
        )
    
}
