import './App.css'
import PatientComponent from './components/PatientComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponents from './components/HeaderComponents'
import ListPatientComponent from './components/ListPatientComponent'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Departments from './components/Departments'
import ListInventory from './components/ListInventory'
import Inventory from './components/Inventory'
 
function App() {
  
       
  
  return (
    <>
 
    <BrowserRouter>
 
         <HeaderComponents />
         <Routes>
 
 
          <Route path='/' element = { < Home/>}> </Route>
 
          {/* // http://localhost:3000*/}
          <Route path='/lp' element = { < ListPatientComponent/>}> </Route>
          
          {/* // http://localhost:3000/patients */}
          <Route path ='/patients' element = { < ListPatientComponent/>}> </Route>
          
          {/* // http://localhost:3000/add-patient */}
           <Route path = '/add-patient' element = {< PatientComponent/>}> </Route>
           
           {/* // http://localhost:3000/update-patient/1 */}
           <Route path='/update-patient/:id' element = { <PatientComponent /> }> </Route>
 
           <Route path= '/about' element = {<About/>}></Route>
           
           <Route path= '/departments' element = {<Departments/>}></Route>
           
           <Route path = '/inventory' element = {<ListInventory/>}>  </Route> 

           {/* // http://localhost:3000/add-item */}
           <Route path = '/add-item' element = {< Inventory/>}> </Route>

           {/* // http://localhost:3000/update-item/shabss */}
           <Route path='/update-item/:equipment' element = { <Inventory /> }> </Route>


          
         </Routes>
         <FooterComponent/>
     
     
     </BrowserRouter>
    
      
    </>
  )
}
 
export default App
 

