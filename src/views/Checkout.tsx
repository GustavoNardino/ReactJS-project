import ProgBar from '../components/ProgBar';
import Header from '../components/Header';
import CostumerPanel from '../components/CostumerPanel';
import Footer from '../components/Footer';
import saleClass from '../Data';

type checkoutType = {
  appData: saleClass
  checkoutEvent: React.Dispatch<React.SetStateAction<saleClass>>
}

function Checkout(props:checkoutType) {
  return (
    <div className='container'>
      <h2>Suas informações</h2>
      <ProgBar />
      <Header headerData={props.appData} />
      <CostumerPanel checkoutData={props.appData} costumerPanelEvent={props.checkoutEvent}/>
      <Footer footerData={props.appData} />
    </div>
  )
}

export default Checkout