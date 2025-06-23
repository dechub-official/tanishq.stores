import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavBar from './component/navbar';
import Footer from './component/footer';
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing';
import ReactGa from 'react-ga4'
import {Tracking_Id} from './shared/config'
import SubHome from './component/subHome';


ReactGa.initialize(Tracking_Id)

// Create a client
const queryClient = new QueryClient();

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
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename='/'>
    {/* <SubHome/> */}
    {/* {appPopUp&&<AppPopUp closeAppPopUp={closeAppPopUp}/>} */}
 <NavBar/>
 <SubHome/>
  <Routing />

 <Footer/>
  </BrowserRouter>
  </QueryClientProvider>
  </>
  )
}

export default App;
