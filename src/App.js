
import './App.css';

import NavBar from './component/navbar';
import Footer from './component/footer';
import {BrowserRouter} from 'react-router-dom'
import Routing from './Routing';
import ReactGa from 'react-ga4'
import SubHome from './component/subHome';


const Tracking_Id="G-LK5M8GFCJ5"

ReactGa.initialize(Tracking_Id)


function App() {
  

  return ( <>
  <BrowserRouter basename='/'>
    {/* <SubHome/> */}
 <NavBar/>
  <Routing />
 <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App;
