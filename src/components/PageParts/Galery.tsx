import Image1 from '../../images/productImgs/productImg1.png';
import Image2 from '../../images/productImgs/productImg2.png';
import Image3 from '../../images/productImgs/productImg3.png';
import Image4 from '../../images/productImgs/productImg4.png';
import Image5 from '../../images/productImgs/productImg5.png';
import Image6 from '../../images/productImgs/productImg6.png';

function Galery() {
    return(
        <div className='galery'>  
            <img src={Image1} alt="produto" className='productImg' onClick={() =>alert(Image1)}/>
            <img src={Image2} alt="produto" className='productImg' onClick={() =>alert(Image2)}/>
            <img src={Image3} alt="produto" className='productImg' onClick={() =>alert(Image3)}/>
            <br />
            <img src={Image4} alt="produto" className='productImg' onClick={() =>alert(Image4)}/>
            <img src={Image5} alt="produto" className='productImg' onClick={() =>alert(Image5)}/>
            <img src={Image6} alt="produto" className='productImg' onClick={() =>alert(Image6)}/>
      </div>
    )
}

export default Galery

/*
showThumbs=""
          width="40%"
          infiniteLoop
          useKeyboardArrows
          autoPlay

            <img src={Image1} alt="produto" className='productImg' onClick={() =>alert(Image1)}/>
            <img src={Image2} alt="produto" className='productImg' onClick={() =>alert(Image2)}/>
            <img src={Image3} alt="produto" className='productImg' onClick={() =>alert(Image3)}/>
            <br />
            <img src={Image4} alt="produto" className='productImg' onClick={() =>alert(Image4)}/>
            <img src={Image5} alt="produto" className='productImg' onClick={() =>alert(Image5)}/>
            <img src={Image6} alt="produto" className='productImg' onClick={() =>alert(Image6)}/>




import Carousel from "flat-carousel";

import "./styles.css";

function App() {
  const images = [
    {
      src:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573553922471&di=7b945e84e814257f816333d3afd0f4ae&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201312%2F04%2F20131204184148_hhXUT.jpeg"
    },
    {
      src:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573553944706&di=7eb52d9180ead96c4ee6a73f4db1abcc&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130527%2F9331768_163938364000_2.jpg"
    },
    {
      src:
        "http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg"
    }
  ];
  return (
    <Carousel>
      {images.map((image, index) => (
        <div
          key={index}
          className="demo-item"
          style={{ backgroundImage: "url(" + image.src + ")" }}
        />
      ))}
    </Carousel>
  );
*/