
import './App.css';

import NavBar from './component/navbar';
import Footer from './component/footer';
import {BrowserRouter} from 'react-router-dom'
import Routing from './Routing';
import ReactGa from 'react-ga4'
import {Tracking_Id} from './shared/config'


ReactGa.initialize(Tracking_Id)




function App() {
  // const [appPopUp,setAppPopup]=useState(true)
// const closeAppPopUp=()=>{
// setAppPopup(false)
// }
// useEffect(()=>{
//   if(window.location.pathname=="/app-moduleeb61394"|| localStorage.getItem("nav-hide")||window.screen.width>768){
//    setAppPopup(false)
//   }
// },[])
  return ( <>
  <BrowserRouter basename='/'>
    {/* <SubHome/> */}
    {/* {appPopUp&&<AppPopUp closeAppPopUp={closeAppPopUp}/>} */}
 <NavBar/>
  <Routing />

 <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App;
