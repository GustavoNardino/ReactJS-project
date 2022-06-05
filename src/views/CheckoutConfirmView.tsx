import ProgBar from '../components/PageParts/ProgBar';
import Header from '../components/PageParts/Header';
import SalePanel from '../components/Panels/SalePanel';
import Footer from '../components/PageParts/Footer';
import saleClass from '../Data'

type confirmType = {
  saleState: saleClass
  // codeFlowState: string[]
  // codeFlowEvent: React.Dispatch<React.SetStateAction<string[]>>
}

function CheckoutConfirmView(props:confirmType) {
  return (
    <div className='container'>
      <h2>Confirme suas informações</h2>
      <ProgBar />
      <Header headerData={props.saleState} />
      <SalePanel saleData={props.saleState}/>
      <Footer footerData={props.saleState} />
    </div>
  )
}

export default CheckoutConfirmView