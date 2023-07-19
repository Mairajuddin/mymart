import React from 'react'
import ar10 from '../Components/Images/G10.webp'
import ar4 from '../Components/Images/G4.webp'

import '../CSS/Male.css'
const Male = () => {
    const images=[
    {
        src:ar4,
        Title:'Reglan Sweatshirt',
        Type:'Sweater',
        Price:'$ 195'

    },{
        src: ar10,
        Title:'Flex Push Button Bomber',
        Type:'Jacket',
        Price:'$ 250'

    }]
  return (
    <div className='image-grid'>
        {images.map((image,index)=>(
            <div key={index} className='image-items' >
                <img src={image.src} alt=""  className='images-set'/>
                <p><h5>{image.Title}</h5></p>
                <p> <h5>{image.Type}</h5></p>
                <p> <h4>{image.Price}</h4></p>

            </div>
        ))}
    </div>
  )
}

export default Male