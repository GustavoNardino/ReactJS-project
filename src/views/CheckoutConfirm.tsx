import Footer from '../components/Footer';
import Header from '../components/Header';
import SalePanel from '../components/SalePanel';
import saleClass from '../Data'

type confirmType = {
  appData: saleClass
  confirmEvent:React.Dispatch<React.SetStateAction<saleClass>>
}
function CheckoutConfirm(props:confirmType) {
  return (
    <div className='container'>
      <h2>Confirme suas informações</h2>
        <Header headerData={props.appData} headerEvent={props.confirmEvent} />
        <SalePanel saleProductData={props.appData} saleCostumerData={props.appData} />
        <Footer footerData={props.appData} />
    </div>
  )
}

export default CheckoutConfirm