import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Container,Table } from 'react-bootstrap'
import '../CSS/BadgeHome1.css'
import Showcase from '../Components/Images/hero.webp'
import CartImg from '../Components/Images/shopping-cart.png'

import Brand1 from '../Components/Images/brand1.webp'
import Brand2 from '../Components/Images/brand2.webp'
import Brand3 from '../Components/Images/brand3.webp'
import Brand4 from '../Components/Images/brand4.webp'

const BadgeHome1 = () => {
  return (
    <Container >
    <>
    
{/*         
    <button type="button" class="btn btn-primary btn-lg btn-block">Sale 50%</button>
         */}
         <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <Button   type="button" className="btn btn-warmed sale-btn buttonwork " size='lg' >Sale 50%</Button>
      </div>
    </div>
        <div className='main-div' >
        <Container className='container-left' >
            <h1 className='heading1 '> An Industrial Take on Streetwear</h1>
           <p className='p1-text '> Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits
            </p> <Link to='/store' >           
            <Button className='ShoppingStart' > <img src={CartImg} alt="" /><span> Start shopping</span> </Button><br /><br />
            </Link>
            <div className='brands'>
                <Table  className='row-md-4' size='sm' xs={5} >
                    <tbody>
                        <tr>
                            <td><img src={Brand1} alt="" /> </td>
                            <td><img src={Brand2} alt="" /></td>
                            <td><img src={Brand3} alt="" /></td>
                            {/* <td><img src={Brand4} alt="" /></td> */}
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
        <Container fluid  className='container-right d-none d-md-block'>
            <img src={Showcase} alt="img"   className='hero'/><br /><br />
            
            

        </Container>
        </div>
    </div>
    </>
    </Container>
  )
}

export default BadgeHome1