import ProgBar from '../components/PageParts/ProgBar';
import Header from '../components/PageParts/Header';
import SuccessPanel from '../components/Panels/SuccessPanel';
import Footer from '../components/PageParts/Footer';
import saleClass from '../Data';

type successViewData = {
  saleState:saleClass
  // codeFlowState: string[]
  // codeFlowEvent: React.Dispatch<React.SetStateAction<string[]>>
}

function SuccessView(props: successViewData) {
  return (
    <div className='container'>
      <h2>Compra finalizada</h2>
      <ProgBar />
      <Header headerData={props.saleState} />
      <SuccessPanel successPanelData={props.saleState} />
      <Footer footerData={props.saleState} />
    </div>
  )
}

export default SuccessView