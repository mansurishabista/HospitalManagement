
import './App.css'
import PatientComponent from './components/PatientComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponents from './components/HeaderComponents'
import ListPatientComponent from './components/ListPatientComponent'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>

    <BrowserRouter>
         <HeaderComponents />
         <Routes> 

          {/* // http://localhost:3000*/}
          <Route path='/' element = { < ListPatientComponent/>}> </Route>
          {/* // http://localhost:3000/patients */}
          <Route path ='/patients' element = { < ListPatientComponent/>}> </Route>
          {/* // http://localhost:3000/add-patient */}
           <Route path = '/add-patient' element = {< PatientComponent/>}> </Route>
           
           {/* // http://localhost:3000/update-patient/1 */}
           <Route path='/update-patient/:id' element = { <PatientComponent /> }> </Route>

         </Routes>
         <FooterComponent/>
     
     
     </BrowserRouter>
    
      
    </>
  )
}

export default App
