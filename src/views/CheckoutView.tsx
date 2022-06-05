import ProgBar from '../components/PageParts/ProgBar';
import Header from '../components/PageParts/Header';
import CostumerPanel from '../components/Panels/CostumerPanel';
import Footer from '../components/PageParts/Footer';
import saleClass from '../Data';

type checkoutType = {
  saleState: saleClass
  checkoutEvent: React.Dispatch<React.SetStateAction<saleClass>>
  // codeFlowState: string[]
  // codeFlowEvent: React.Dispatch<React.SetStateAction<string[]>>
}

function CheckoutView(props:checkoutType) {
  return (
    <div className='container'>
      <h2>Suas informações</h2>
      <ProgBar />
      <Header headerData={props.saleState} />
      <CostumerPanel checkoutData={props.saleState} costumerPanelEvent={props.checkoutEvent}/>
      <Footer footerData={props.saleState} />
    </div>
  )
}

export default CheckoutView