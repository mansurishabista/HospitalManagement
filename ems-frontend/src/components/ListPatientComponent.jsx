import React, {useEffect, useState} from 'react'
import {listPatients, deletePatient }  from '../services/PatientService'
import {useNavigate} from 'react-router-dom'


const ListPatientComponent = () => {

     const [patients, setPatients] = useState([])
     const [contactNoSearchTerm, setContactNoSearchTerm] = useState('');
     const [nameSearchTerm, setNameSearchTerm] = useState('');
     const  [loading, setLoading] = useState(true);

     const navigator = useNavigate();

     useEffect(() => {
        
        getAllPatients();
     }, [])

     function getAllPatients(){

        listPatients().then((response) => {
            setPatients(response.data);
            setLoading(false);
            //console.log(response.data);
        }).catch(error => {
            console.error(error);
            setLoading(false);

        })
     }

     function addNewPatient(){
      navigator ('/add-patient');


     }

     function updatePatient(id){

        navigator(`/update-patient/${id}`)
     }

     function removePatient(id){
        console.log(id);
       // console.log('Delete patient is called');
       deletePatient(id).then((response) =>{
         getAllPatients();
       }).catch(error =>{
        console.error(error);
       })

     }

     const handleNameChange = (event) => {
     
      setNameSearchTerm(event.target.value);
     }


     const handleContactNoChange = (event) => {
      setContactNoSearchTerm(event.target.value);
     }


    //  console.log(contactNoSearchTerm);

    //  const filteredPatients = patients.filter(patient => 
    //   patient.firstname.toLowerCase().includes(nameSearchTerm.toLowerCase()) &&
    //   patient.contactN0.includes(contactNoSearchTerm)
    //  )

    // const filteredPatients = patients.filter(patient =>
    //   patient.filter((number) =>
    //   number.includes(ContactNoSearchTerm))
    // );
  

    function filteredData(nameSearchTerm, patients) {
      if(!nameSearchTerm){
        return patients;
      }
      return patients.filter(n => n.firstname.toLowerCase().includes(nameSearchTerm.toLowerCase()));
    }

    const filterTest = filteredData(nameSearchTerm, patients);
   console.log(filteredData(nameSearchTerm, patients));

     const containerStyle = {
       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '59vh'
    
     }



   
  return (
   <div>

    <input 
    type = "text"
    placeholder = "Enter Name to search"
    // value = {nameSearchTerm}
    onChange = {handleNameChange}
    />

    {/* <input
     type="tel" 
     placeholder = " Search by contact No"
    //  value = {contactNoSearchTerm}

     onChange = {handleContactNoChange}
     /> */}

    
     {/* {loading ? (
      <div>Loading.....</div>
     ) : (
      <ul>
        {filterTest.map(patient => (
          <li key = {patient.id}>
            <div>Contact: { patient.contactNo }</div>

          </li>
        ))}
      </ul>
     )} */}


   
     
    <div style = {containerStyle} >
    {(patients.length>0)?

    <div className='container'>
    <h1 className='text-center' style = {{color: '#53a8b6'}}> List of Patients</h1>

    <button className= 'btn btn-primary mb-2' style = {{backgroundColor:'#53a8b6'}} onClick = {addNewPatient} > Add Patient</button>
    <table className='table table-stripped table-bordered'>
        <thead>
            <tr>
                <th>Patient Id</th>
                <th>First Name</th>
                <th>Last Name</th>
               
                <th>Contact No</th>
                {/* <th>DOB</th> */}
                <th>Gender</th>
                <th>Age</th>
                <th>Basic Symptoms</th>
                <th>Actions</th>

            </tr>
        </thead>
        <tbody>
        
            {


                nameSearchTerm ===""?(
               
                patients.map(patient =>
                    <tr
                        key = {patient.id}>
                    
                        <td>{patient.id}</td>
                        <td>{patient.firstname}</td>
                        <td>{patient.lastname}</td>
                        <td>{patient.contactNo}</td>
                        {/* <td>{patient.dob}</td> */}
                        <td>{patient.gender}</td>
                        <td>{patient.age}</td>
                        <td>{patient.basicSymptoms}</td>
                        <td>
                            
                            <button className = 'btn btn-info' style = {{backgroundColor:'#53a8b6'}} onClick={() => updatePatient(patient.id)}>Update</button>
                            <button className = 'btn btn-danger' style = {{backgroundColor:'#f95959'}} onClick={() => removePatient(patient.id)}> Delete</button>


                        </td>


                    </tr>

                    )):(

                      filterTest.length>0?(
                      

                      filterTest.map(patient =>

                        <tr
                            key = {patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.firstname}</td>
                            <td>{patient.lastname}</td>
                            <td>{patient.contactNo}</td>
                            {/* <td>{patient.dob}</td> */}
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.basicSymptoms}</td>
                            <td>
                                
                                <button className = 'btn btn-info' style = {{backgroundColor:'#53a8b6'}} onClick={() => updatePatient(patient.id)}>Update</button>
                                <button className = 'btn btn-danger' style = {{backgroundColor:'#f95959'}} onClick={() => removePatient(patient.id)}> Delete</button>
    
    
                            </td>
    
    
                        </tr> )):(<h1 className='text-center' style = {{color: '#53a8b6'}}> No Such Patient</h1>)






                    )
            }
          {/* <tr>

          </tr> */}

        </tbody>

    </table>

  </div>
    :<h1 className = 'text-center' id = "center" style = {{color: '#53a8b6'}} >UmmHmm..No patient in the list :( </h1> }
   </div> 
   </div>   
    
  )
};

export default ListPatientComponent;
