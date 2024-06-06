import React, {useEffect, useState} from 'react'
import {listPatients, deletePatient }  from '../services/PatientService'
import {useNavigate} from 'react-router-dom'

const ListPatientComponent = () => {

     const [patients, setPatients] = useState([])
     const navigator = useNavigate();

     useEffect(() => {
        
        getAllPatients();
     }, [])

     function getAllPatients(){

        listPatients().then((response) => {
            setPatients(response.data);
            console.log(response.data);
        }).catch(error => {
            console.error(error);

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

   
  return (
 
    
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
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Basic Symptoms</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                {
                    patients.map(patient =>
                        <tr
                            key = {patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.firstname}</td>
                            <td>{patient.lastname}</td>
                            <td>{patient.contactNo}</td>
                            <td>{patient.dob}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.basicSymptoms}</td>
                            <td>
                                
                                <button className = 'btn btn-info' style = {{backgroundColor:'#53a8b6'}} onClick={() => updatePatient(patient.id)}>Update</button>
                                <button className = 'btn btn-danger' style = {{backgroundColor:'#f95959'}} onClick={() => removePatient(patient.id)}> Delete</button>


                            </td>


                        </tr>

                        )
                }
              <tr>

              </tr>

            </tbody>

        </table>




    </div>
    
  );
};

export default ListPatientComponent;
