
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Logo1 from '../Components/Images/Logo.webp'
import '../CSS/TopBar.css';
import SearchIcon from '../Components/Images/search.png'
import profile from '../Components/Images/profile.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Male from './Male';
import { Button, Form, InputGroup } from 'react-bootstrap';
import ErrorPage from './ErrorPage';



function TopBar() {

  const [searchvalue, setsearchValue] = useState('');
  
  const handleSearch=()=>{
    return console.log('search value', searchvalue);

  }
  const handleInputChange=(e)=>{
    setsearchValue(e.target.value)
  }


  return (
    <Container>
    <Navbar bg="light" expand="lg" >
      <Container fluid className='main-Nav'>
        <Link to='/'>
        <Navbar.Brand href="" ><img src={Logo1} className='logoimg' alt='logo'/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/male" className="nav-link-margin">Male</Nav.Link>
            <Nav.Link as={Link} to="/female" className="nav-link-margin">Female</Nav.Link>
            <Nav.Link as={Link} to="/errorpage" className="nav-link-margin">Kids</Nav.Link>
            <Nav.Link as={Link} to="/store" className="nav-link-margin" >All Products</Nav.Link>
            
          </Nav>
          {/* <div  className='searchbar'>
            <img src={SearchIcon} onClick={handleSearch} alt='searchimg' />
           <input type="search " placeholder='searchitem' value={searchvalue} onChange={handleInputChange} />
          </div>
          <div>
            <img src={profile} alt="" className='profile-img' />
          </div> */}
          <div>
          <InputGroup className="mb-3 searchbar">
        <Form.Control
          placeholder="Search Product"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default TopBar;