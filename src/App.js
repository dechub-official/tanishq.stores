import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import NavBar from './component/navbar';
import Footer from './component/footer';
import {BrowserRouter} from 'react-router-dom'
import Routing from './Routing';

function App() {
  return ( <>
  <BrowserRouter>
  <NavBar/>
  <Routing/>
  <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App;
