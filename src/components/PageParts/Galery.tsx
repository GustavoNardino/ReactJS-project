import {useState} from 'react'
import Image1 from '../../images/productImgs/productImg1.png';
import Image2 from '../../images/productImgs/productImg2.png';
import Image3 from '../../images/productImgs/productImg3.png';
import Image4 from '../../images/productImgs/productImg4.png';
import Image5 from '../../images/productImgs/productImg5.png';
import Image6 from '../../images/productImgs/productImg6.png';

type GaleryProps ={
    carousel:boolean;
}

let imageSelected:string = Image1

function Galery(props: GaleryProps) {
    const [image, setImage] = useState(Image1)
    function handleImage(img: File){
        setImage(img)
    }

    return(
        <>
        {props.carousel?
            <div className='galery'>  
                <div className='carouselImgs'>
                    <img src={Image1} alt="produto" className='productImg' onClick={() => handleImage(Image1)}/>
                    <img src={Image2} alt="produto" className='productImg' onClick={() => handleImage(Image2)}/>
                    <img src={Image3} alt="produto" className='productImg' onClick={() => handleImage(Image3)}/>
                    <img src={Image4} alt="produto" className='productImg' onClick={() => handleImage(Image4)}/>
                    <img src={Image5} alt="produto" className='productImg' onClick={() => handleImage(Image5)}/>
                    <img src={Image6} alt="produto" className='productImg' onClick={() => handleImage(Image6)}/>
                </div>
                    <img src={image} alt="produto" className='productImgSale'/>
            </div>
        :
            <div className='galery'>
                <img src={image} alt="produto" className='productImgSale'/>
            </div>
        }
        </>
    )
}

export default Galery