import React from 'react'
import { Container, Button, Table, Row, Col } from 'react-bootstrap'
import '../CSS/Promotion.css'
import ar11 from '../Components/Images/G11.webp'
import ar8 from '../Components/Images/G8.webp'
import ar5 from '../Components/Images/G5.webp'

const Promotion = () => {
    return (
        <div>
            <Container className='comp-title text-center'>
                <h6 className='promotion-head'> PROMOTIONS </h6>
                <h2>Our Promotions Event</h2>
            </Container>
            {/* <div style={{display:'flex'}}>
            <Container className='container-left  ' style={{ textAlign: 'left' }}>
                
                <div className='offer-banner-1 my-3' style={{display:'flex',backgroundColor:'grey'}}>
                    <div >
                        <h3 style={{fontWeight:'800'}} >GET UP TO <br />
                            <span style={{ fontFamily: 'inherit', fontSize: '40px'}}>60%</span>
                        </h3>
                        <p style={{fontSize:'35px'}}>
                            For the Summer <br />
                            Reason
                        </p>
                    </div>
                    <div className='mx-5' >
                        <img src={ar11} alt="" />
                    </div>
                </div>

                <div className='offer-banner-2  mx-5'>
                    <h3 style={{fontSize:'30px',fontWeight:'bolder',color:'#fff'}}> GET 30% OFF </h3>
                    <p style={{color:'#fff'}}>Use Promo Code</p>
                    <Button  >DINEWEEKENDSALE</Button>

                </div>

            </Container>
            <Container className='container-right' >
                <div className='d-none d-md-block'>
                    <Table className='offer-table'  >
                        <tbody >
                            <tr >
                              <td   id='card-1' style={{border:'none'}} >
                                
                                <h4>FlexSweatshirt</h4>
                                <div style={{display:'flex'}}>
                                <h5 style={{textDecoration:'line-through',fontStyle:'inherit',fontFamily:'sans-serif', fontWeight:'lighter'}}> $ 100.00 </h5>
                                <h4 className=''>$75.00</h4> </div>
                                <img   src={ar5} alt="" /> 
                                </td>
                              <td  style={{border:'none'}}  id='card-2'>
                              <h4>Black Jersey</h4>
                              <div style={{display:'flex'}}>
                              <h5 style={{textDecoration:'line-through',fontStyle:'inherit',fontFamily:'sans-serif', fontWeight:'lighter'}}> $ 100.00 </h5>
                              <h4 className='mx-2'>$75.00</h4></div>
                                <img src={ar8} alt="" /> </td>  
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </Container> */}
            {/* </div> */}
            <Container>
                <Row>
                    <Col>
                        <Container className='mt-5'>
                            <div className='d-flex offer-banner-1' style={{ backgroundColor: 'grey' }}>
                                <div >
                                    <h3 style={{ fontWeight: '800' }} >GET UP TO <br />
                                        <span style={{ fontFamily: 'inherit', fontSize: '40px' }}>60%</span>
                                    </h3>
                                    <p style={{ fontSize: '35px' }}>
                                        For the Summer <br />
                                        Reason
                                    </p>
                                </div>
                                <div className='mx-5 ' >
                                    <img className='d-none d-md-block' src={ar11} alt="" />
                                </div>
                            </div>
                            <div className='offer-banner-2  mx-5 mt-2'>
                                <h3 style={{ fontSize: '30px', fontWeight: 'bolder', color: '#fff' }}> GET 30% OFF </h3>
                                <p style={{ color: '#fff' }}>Use Promo Code</p>
                                <Button  className='btn-sm ms-2 my-1' >DINEWEEKENDSALE</Button>

                            </div>
                        </Container>

                    </Col>
                    
                    <Col className='col-md-4 d-sm-flex flex-column mt-3   '  >
                        <Container fluid className=' d-sm-flex  gap-2 ' style={{alignItems:'center', justifyContent:'around'}}>
                            <Container className='col-xs-2 md-flex-column xs-flex-column' >
                                <div >
                                    <h4>FlexSweatshirt</h4>
                                    <div style={{ display: 'flex' }}>
                                        <h5 style={{ textDecoration: 'line-through', fontStyle: 'inherit', fontFamily: 'sans-serif', fontWeight: 'lighter' }}> $ 100.00 </h5>
                                        <h4 className=''>$75.00</h4> </div>
                                    <img style={{height:'300px', width:'200px'}} src={ar5} alt="" />
                                </div>
                                

                            </Container>
                            
                            <Container className='mt-3'  >
                                <h4>Black Jersey</h4>
                                <div xs={6} md={4} style={{ display: 'flex' }}>
                                    <h5 style={{ textDecoration: 'line-through', fontStyle: 'inherit', fontFamily: 'sans-serif', fontWeight: 'lighter' }}> $ 100.00 </h5>
                                    <h4 className=''>$75.00</h4></div>
                                <img style={{height:'300px', width:'200px'}}  src={ar8} alt="" />
                            </Container>
                        </Container>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Promotion