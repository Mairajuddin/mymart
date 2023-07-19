import React from 'react'
import '../CSS/Store.css'
// import { Container } from 'react-bootstrap'
import ar1 from '../Components/Images/G1.webp'
import ar2 from '../Components/Images/G2.webp'
import ar3 from '../Components/Images/G3.png'
import ar4 from '../Components/Images/G4.webp'
import ar5 from '../Components/Images/G5.webp'
import ar6 from '../Components/Images/G6.webp'
import ar7 from '../Components/Images/G7.webp'
import ar8 from '../Components/Images/G8.webp'
import ar9 from '../Components/Images/G9.webp'
import ar10 from '../Components/Images/G10.webp'
import ar11 from '../Components/Images/G11.webp'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, createContext } from 'react'
import { ReactDOM } from 'react'
import AddtoCart from './AddtoCart'
import { useNavigation } from 'react-router-dom'

const Store = () => {
  const navigate = useNavigate();
 

const images=[
  {
    src: ar1,
    Title:'Pink Fleace Sweat Pents',
    Type: 'Pents',
    price:'$195'
  },
  {
    src: ar2,
    Title:'Cameryn Sash Tie Dress',
    Type:'Dress',
    price:'$200'
  },
  {
    src: ar3,
    Title:'Muscle Tank',
    Type:'T Shirt',
    price:'$100'
  },
  {
    src: ar4 ,
    Title:'Raglan Sweatshirt',
    Type:' Shirt',
    price:'$120'
  },
  {
    src: ar5 ,
    Title:'Imperial Alpaca Hoodie',
    Type:' Jacket',
    price:'$400'
  },
  {
    src: ar6 ,
    Title:'Lite Sweatpants',
    Type:' JPents',
    price:'$200'
  },
  {
    src: ar7 ,
    Title:'Flex Sweatpants',
    Type:' Pents',
    price:'$180'
  },
  {
    src: ar8 ,
    Title:'Brushed Raglan Sweatshirt',
    Type:' Sweater',
    price:'$300'
  },
  {
    src: ar9 ,
    Title:'Flex Sweatshirt',
    Type:' Shirt',
    price:'$300'
     
  },
  {
    src: ar10 ,
    Title:'Flex Push Button Bomber',
    Type:' Jacket',
    price:'$400'
  },
  {
    src: ar11 ,
    Title:'Brushed Bomber',
    Type:' Jacket',
    price:'$400'
  }
  
]
// const [selectedProduct, setselectedProduct] = useState(null)
//  const handleProductClicked=(Product)=>{
//   setselectedProduct(Product)
//  }


  return (

    <div className='image-grid'>
      
     {images.map((image,index)=>(
      <div  onClick={()=>navigate('/addtocart', { state: image })}  style={{cursor:'pointer'}} key={index} className='image-items'  >
         {/* <Link   style={{textDecoration:'none', color:'#000'}} to={{
            pathname: '/addtocart',
          // state: { image } //  FOR Pass the image object as state to the AddtoCart component
          }}>  */}

        <img  src={image.src} className='images-set' alt="grid-imgs" /> <br />
        <p><h5  className='image-title'>{image.Title}</h5></p> 
        <p><h5 className='image-type'>{image.Type}</h5></p>
        <p><h4 className='image-price'>{image.price}</h4></p>
        {/* </Link>  */}


        {/* <AddtoCart image={image.src} Title={image.Title} type={image.Type}/> */}
      </div>
      
      
     ))}
     

    </div>
  )
}

export default Store