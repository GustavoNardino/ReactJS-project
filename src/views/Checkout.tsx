import Footer from '../components/Footer';
import Header from '../components/Header';
import CostumerPanel from '../components/CostumerPanel';
import saleClass from '../Data';

type checkoutType = {
  appData: saleClass
  checkoutEvent: React.Dispatch<React.SetStateAction<saleClass>>
}
function Checkout(props:checkoutType) {
  return (
    <div className='container'>
      <h2>Suas informações</h2>
        <Header headerData={props.appData} headerEvent={props.checkoutEvent} />
        <CostumerPanel checkoutData={props.appData} />
        <Footer footerData={props.appData} />
    </div>
  )
}

export default Checkout