import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";
import FeaturePage from "./Pages/FeaturePage";
import ContactusPage from "./Pages/ContactusPage";
import SignupPage from './Pages/User/SingupPage';
import LoginPage from './Pages/User/LoginPage';
import Cart from './Components/User/Cart';
import Wishlist from './Components/User/Wishlist';


const App = ()=>{
  return (
  <BrowserRouter>
  <Navbar/>
  
  <Routes >

       <Route path="/" element={<HomePage/>}/> 
       <Route path="/about" element={<AboutPage/>}/>    
       <Route path="/shop" element={<ShopPage/>}/>    
       <Route path="/feature" element={<FeaturePage/>}/>    
       <Route path="/contactus" element={<ContactusPage/>}/>   
       <Route path='/cart' element= {<Cart/>}/>
       <Route path='/wishlist' element ={<Wishlist/>}/>

       <Route path="/signup" element={<SignupPage/>} />
       <Route path="/login" element={<LoginPage/>} />

  </Routes>
  
  <Footer/>
  </BrowserRouter>
  )
}
export default App