import Footer from '../components/Footer';
import Header from '../components/Header';
import '../components/styles.css'
import saleClass from '../Data';

type successViewData = {
  appData:saleClass
  successEvent: React.Dispatch<React.SetStateAction<saleClass>>
}
function Success(props: successViewData) {
  return (
    <div className='container'>
      <h2>success</h2>
        <Header headerData={props.appData} headerEvent={props.successEvent} />
        <h1>PRONTO!</h1>
        <p>{props.appData.costumerName}, sua compra de um 
        {props.appData.productName} no valor de 
        {props.appData.price}, foi realizada com sucesso</p>
        <Footer footerData={props.appData} />
    </div>
  )
}

export default Success