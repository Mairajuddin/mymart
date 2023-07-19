import React, { useState } from 'react'
import { Container, Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Store from './Store';
import '../CSS/AddtoCart.css'
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddtoCart = () => {
    
    const [Size, setSetsize] = useState()
    const [count, setCount] = useState(0);
    const location=useLocation();
    const receivedData=location.state;
    console.log(receivedData);
    const handleSizing = (size) => {
        //  alert(`size selected`);
        setSetsize(size);
         toast(`${size} Selected`,{
              type:'success'
         });
         
       
    }
    document.addEventListener("DOMContentLoaded", function () {
        var button = document.getElementById("myButton");
        if (button) {
            button.addEventListener('click', function () {
                this.style.backgroundColor = 'yellow';
                setTimeout(function () {
                    this.style.backgroundColor = 'red';
                }.bind(this), 1000);
            });
        }
    });
    /// need to  fixed it


    return (
        <>
        
        <Container className='d-flex '>
        
            
            <Row className='container'>
                <Col className='container'>
                    <Row className='d-flex felx-row my-3' style={{display:'flex'}} >
                        <Col ><img style={{maxHeight:'8rem'}}  src={receivedData.src} alt="" /></Col>
                        <Col><img  style={{maxHeight:'8rem'}} src={receivedData.src} alt="" /></Col>
                        <Col><img   style={{maxHeight:'8rem'}}  src={receivedData.src} alt="" /></Col>
                    </Row>
                </Col>
                <Col><div className='container  d-flex  justify-content-center align-items-center   d-center-image' >
                <img  style={{height:'40rem', minHeight:'8rem', minWidth:'20rem' }} src={receivedData.src} alt="" />
                    </div></Col>
                <Col>
                    <div>
                        
                        <h1 style={{color:'black' }}> {receivedData.Title} </h1>
                        <h5>{receivedData.Type}</h5><br />
                        <h3>Select Size</h3>
                        <div>
                            <Button id='myButton' onClick={()=>handleSizing('X-Small')} className='mx-1 btn-sizing'  >XS</Button>
                            <Button id='myButton' onClick={()=>handleSizing('Small')} className='mx-1 btn-sizing' >S</Button>
                            <Button id='myButton' onClick={()=>handleSizing('Medium')} className='mx-1 btn-sizing' >M</Button>
                            <Button id='myButton' onClick={()=>handleSizing('Large')} className='mx-1 btn-sizing' >L</Button>
                            <Button id='myButton' onClick={()=>handleSizing('X-Large')} className='mx-1 btn-sizing' >XL</Button>
                        </div>
                        <div className='my-5'>
                            <h5>QUANTITY</h5>
                            <Button onClick={() => setCount(count + 1)}>+</Button><span>{count}</span><Button onClick={() => setCount(count - 1)}>-</Button>

                        </div>


                    </div>
                </Col>
            </Row>
            
        </Container>
        <ToastContainer/>
        </>
    )
}

export default AddtoCart