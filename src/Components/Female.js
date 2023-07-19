import React from 'react'
import ar1 from '../Components/Images/G1.webp'
import ar2 from '../Components/Images/G2.webp'
import ar3 from '../Components/Images/G3.png'
import ar5 from '../Components/Images/G5.webp'
import ar6 from '../Components/Images/G6.webp'
import ar7 from '../Components/Images/G7.webp'
import ar8 from '../Components/Images/G8.webp'
import ar9 from '../Components/Images/G9.webp'
import ar11 from '../Components/Images/G11.webp'
import '../CSS/Female.css'

const Female = () => {
    const images=[ {
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
        src: ar11 ,
        Title:'Brushed Bomber',
        Type:' Jacket',
        price:'$400'
      }
      
    ]
  return (
    <div className='image-grid'>
        { images.map((image,index)=>(
            <div key={index} className='image-items'>
                <img src={image.src} alt=""  className='images-set'/>
                <p><h5 className='image-title'>{image.Title}</h5></p>
                <p><h5 className='image-type'>{image.Type}</h5></p>
                <p><h4 className='image-price'>{image.Price}</h4></p>
            </div>
        ))}
    </div>
  )
}

export default Female