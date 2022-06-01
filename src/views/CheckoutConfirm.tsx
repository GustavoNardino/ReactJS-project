import Footer from '../components/Footer';
import Header from '../components/Header';
import SalePanel from '../components/SalePanel';
import saleClass from '../Data'
import ProgBar from '../components/ProgBar';

type confirmType = {
  appData: saleClass
}
function CheckoutConfirm(props:confirmType) {
  return (
    <div className='container'>
      <h2>Confirme suas informações</h2>
      <ProgBar />
        <Header headerData={props.appData} />
        <SalePanel saleData={props.appData}/>
        <Footer footerData={props.appData} />
    </div>
  )
}

export default CheckoutConfirm