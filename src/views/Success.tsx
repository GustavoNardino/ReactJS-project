import ProgBar from '../components/ProgBar';
import Header from '../components/Header';
import SuccessPanel from '../components/SuccessPanel';
import Footer from '../components/Footer';
import saleClass from '../Data';

type successViewData = {
  appData:saleClass
}

function Success(props: successViewData) {
  return (
    <div className='container'>
      <h2>Compra finalizada</h2>
      <ProgBar />
      <Header headerData={props.appData} />
      <SuccessPanel successPanelData={props.appData} />
      <Footer footerData={props.appData} />
    </div>
  )
}

export default Success