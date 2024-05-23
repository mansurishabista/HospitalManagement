import React, {useEffect, useState} from 'react'
import {listPatients}  from '../services/PatientService'
import {useNavigate} from 'react-router-dom'

const ListPatientComponent = () => {

     const [patients, setPatients] = useState([])
     const navigator = useNavigate();

     useEffect(() => {
        listPatients().then((response) => {
            setPatients(response.data);
            console.log(response.data);
        }).catch(error => {
            console.error(error);

        })
     }, [])

     function addNewPatient(){
      navigator ('/add-patient');


     }

     function updatePatient(id){

        navigator(`/update-patient/${id}`)
     }

   
  return (


    <div className='container'>
        
        

        <h2 className='text-center'> List of Patients</h2>

        <button className= 'btn btn-primary mb-2' onClick = {addNewPatient} > Add Patient</button>
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
                                <button className = 'btn btn-info' onClick={() => updatePatient(patient.id)}>Update</button>
                            </td>

                        </tr>

                        )
                }
              <tr>

              </tr>

            </tbody>

        </table>




    </div>
  )
}

export default ListPatientComponent
