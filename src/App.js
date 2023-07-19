
import './App.css';
import TopBar from './Components/TopBar';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Store from './Components/Store';
import Male from './Components/Male';
import Female from './Components/Female';
import AddtoCart from './Components/AddtoCart';
import ErrorPage from './Components/ErrorPage';

function App() {
  
  return (
    <BrowserRouter>
    
    <div  className="App">
     <TopBar/>
     </div><br/><br/>
     
     <div className='home-component-badge1'>
     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/male" element={<Male />} />
            <Route path="/female" element={<Female />} />
            <Route path="/addtocart" element={<AddtoCart />} />
            <Route path="/errorPage" element={<ErrorPage />} />

          </Routes>
     </div>
    
     
     </BrowserRouter>
  );
}

export default App;
