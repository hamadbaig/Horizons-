import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'




// PAGES
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Destinations from "./pages/Destinations"
import Destination from "./pages/Destination"
import AddDestination from "./pages/admin/AddDestination"
import EditDestination from "./pages/admin/EditDestination"
import DestinationDashboard from "./pages/admin/DestinationDashboard"
import SendMail from "./pages/admin/SendMail"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import NotFound from "./pages/NotFound"
import Reservation from "./pages/Reservation"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
//COMPONENTS
import Footer from "./components/Footer"
import MenuCustom from "./components/MenuCustom"
import Newsletter from "./components/Newsletter"

import './App.css'



const App = () => {
 

  return (
 <>
 
  <MenuCustom />
  <Routes>
  
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/destinations" element={<Destinations/>} />
     <Route path="/destination/:id" element={<Destination/>} />
     <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
  
  
  {/* connectees */}
  <Route path="/contact" element={<Contact/>} />
  <Route path="/reservation" element={<Reservation/>} />
  
  
  {/* admin */}
            <Route path="mail" element={<SendMail />} />
            <Route path="destination/nouveau" element={<AddDestination />} />
            <Route path="destination/dashboard" element={<DestinationDashboard />} />
            <Route path="destination/modifier/:id" element={<EditDestination />} />
  {/* PAGES ACCESSIBLES POUR LES UTILISATEURS CONNECTES  */}
   <Route path="/" element={<PrivateRoute roles={["admin", "user"]} /> }>
   
  </Route>
  
  {/* PAGES ACCESSIBLES QUE POUR LES ADMIN  */}
  
  <Route path="/" element={<PrivateRoute roles={["admin"]} />}>
  
  {/* POUR APPELER CETTE ROUTE, JE DOIT METTRE DANS MON URL: /admin/destination/nouveau */}
      
          <Route path="/admin">
            
          </Route>
      </Route>
  
  <Route path="*" element={<NotFound/>} />
  
  </Routes>
  <Newsletter />
<Footer />
  
 </>
  )
}

export default App;
