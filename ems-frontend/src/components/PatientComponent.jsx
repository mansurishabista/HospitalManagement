import React, { useState, useEffect} from 'react'
import { createPatient, getPatient, updatePatient} from '../services/PatientService';
import { useNavigate, useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './flag.css';


const PatientComponent = () => {

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [dob, setDOB]= useState('')
    const [age, setAge] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [gender, setGender] = useState('')
    const [basicSymptoms, setBasicSymptoms] = useState('')

     const {id} = useParams();

    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        dob:'',
        age: '',
        contactNo: '',
        gender: '',
        basicSymptoms :''
    })

    const navigator = useNavigate();

    useEffect(() => {
        //console.log('id is', id)
        
        if(id){

            //console.log('Shabista OP', id)
            //debugger;
            getPatient(id).then((response)=> {
               
                //console.log('INSIDE ', id)
             
                setfirstname(response.data.firstname);
                setlastname(response.data.lastname);
                setDOB(response.data.dob);
                setAge(response.data.age);
                setContactNo(response.data.contactNo);
                setGender(response.data.gender);
                setBasicSymptoms(response.data.basicSymptoms);

            }).catch(error => {
                console.log('CATCH ', id)
                console.error(error);
            })
        }

    }, [id] )



    function saveOrUpdatePatient(e){

        e.preventDefault();

        if(validateForm()){

            const patient = {firstname, lastname,dob,age,contactNo,gender,basicSymptoms };
            console.log(patient)

            if(id){
                updatePatient(id, patient).then((response) => {
                    console.log(response.data);
                    navigator('/patients');
                }).catch(error => {
                    console.error(error);
                }) 
            }
             else{
                    createPatient(patient).then((response) => {
                        console.log(response.data);
                        navigator('/patients')
                    }).catch(error => {
                        console.error(error);
                    })
                }

        } 

    }


    function validateForm(){
      
        let valid = true;
        const errorsCopy = {... errors}

        if(firstname.trim()){
            errorsCopy.firstname = '';
        } else{
            errorsCopy.firstname = 'First name is required';
            valid = false;
        }

        if(lastname.trim()){
            errorsCopy.lastname = '';
        } else{
            errorsCopy.lastname = 'Last name is required';
            valid = false;
        }

        if(dob.trim()){
            errorsCopy.dob = '';
        } else{
            errorsCopy.dob = 'DOB is required';
            valid = false;
        }

        if(String(age).trim()){
            errorsCopy.age = '';
        } else{
            errorsCopy.age = 'Age is required';
            valid = false;
        }

        if(String(contactNo).trim()){
            errorsCopy.contactNo = '';
        } else{
            errorsCopy.contactNo = 'Contact No is required';
            valid = false;
        }

        if(gender.trim()){
            errorsCopy.gender = '';
        } else{
            errorsCopy.gender = 'Gender is required';
            valid = false;
        }

        if(basicSymptoms.trim()){
            errorsCopy.basicSymptoms= '';
        } else{
            errorsCopy.basicSymptoms = 'First name is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;

    }




    function pageTitle(){

        if(id){
            return <h2 className = 'text-center' style = {{color: '#53a8b6'}}>Update Patient</h2>
        }else{
            return <h2 className = 'text-center' style = {{color: '#53a8b6'}}>Add Patient</h2>
        }
    }


  return (

    <div className = 'container'> 
      <div className = 'row'>
        <div className = 'card'>
            {
                pageTitle()
            }

            <div className = 'card-body'>
                <form>
                    <div className = 'form-group mb-2'>
                        <label className = 'form-label'> First Name </label>

                        <input 
                        
                        type = 'text'
                        placeholder = 'Enter Patient First Name'
                        name = 'firstname'
                        value = {firstname}
                        className = {`form-control ${ errors.firstname ? 'is-invalid': ''}`}
                        onChange = {(e) => setfirstname(e.target.value)}
                        >
                        </input>

                        {errors.firstname && <div className = 'invalid-feedback'> { errors.firstname} </div>}

                    </div>


                    <div className = 'form-group mb-2'>
                        <label className = 'form-label'> Last Name </label>

                        <input 
                        
                        type = 'text'
                        placeholder = 'Enter Patient Last Name'
                        name = 'lastname'
                        value = {lastname}
                        className = {`form-control ${ errors.lastname ? 'is-invalid': ''}`}
                        onChange = {(e) => setlastname(e.target.value)}
                        >
                        </input>
                        
                        {errors.lastname && <div className = 'invalid-feedback'> { errors.lastname} </div>}

                    </div>

                    <div className = 'form-group mb-2'>
                        <label className = 'form-label'> DOB </label>

                        <input 
                        
                        type = 'date'
                        placeholder = 'Enter Patient DOB'
                        name = 'dob'
                        value = {dob}
                        className = {`form-control ${ errors.dob ? 'is-invalid': ''}`}
                        onChange = {(e) => setDOB(e.target.value)}
                        >
                        </input>

                        {errors.dob && <div className = 'invalid-feedback'> { errors.dob} </div>}

                    </div>

                    <div className = 'form-group mb-2'>
                        <label className = 'form-label'> Age </label>

                        <input 
                        
                        type = 'number'
                        placeholder = 'Enter Patient Age'
                        name = 'age'
                        value = {age}
                        className = {`form-control ${ errors.age ? 'is-invalid': ''}`}
                        onChange = {(e) => setAge(e.target.value)}
                        >
                        </input>

                        {errors.age && <div className = 'invalid-feedback'> { errors.age} </div>}

                    </div>



                    <div className = 'form-group mb-2'>
                        <label className = 'form-label'> Contact No </label>

                        {/* <input 
                        
                        type = 'tel'
                        placeholder = 'Enter Patient Contact No'
                        name = 'contactNo'
                        value = {contactNo}
                        className = {`form-control ${ errors.contactNo ? 'is-invalid': ''}`}
                        onChange = {(e) => setContactNo(e.target.value)}
                        >
                        </input> */}


                        <PhoneInput 

                        country = {'India'}
                        type = 'tel'
                        //placeholder = 'Enter Patient Contact No'
                       //name = 'contactNo'
                        value = {contactNo}
                        className = {`form-control ${ errors.contactNo ? 'is-invalid': ''}`}
                        onChange = {phone =>setContactNo(phone)}
                        inputStyle ={{
                            width : '100%',
                            padding: '20px',
                            fontsize: '16px'
                        }}
                        containerStyle ={{
                            width: '100%'
                        }}
                       
     
                        >
                        </PhoneInput>

                        {errors.contactNo && <div className = 'invalid-feedback'> { errors.contactNo} </div>}

                    </div>


                    

                    <div className = 'form-group mb-2'>
                        <label className = 'form-label'> Gender </label>

                        <input 
                        
                        type = 'text'
                        placeholder = 'Enter Patient Gender'
                        name = 'gender'
                        value = {gender}
                        className = {`form-control ${ errors.gender ? 'is-invalid': ''}`}
                        onChange = {(e) => setGender(e.target.value)}
                        >
                        </input>

                        {errors.gender && <div className = 'invalid-feedback'> { errors.gender} </div>}

                    </div>


                    

                    <div className = 'form-group mb-2'>
                        <label className = 'form-label'> Basic Symptoms </label>

                        <input 
                        
                        type = 'text'
                        placeholder = 'Enter Basic Symptoms'
                        name = 'basicSymptoms'
                        value = {basicSymptoms}
                        className = {`form-control ${ errors.basicSymptoms ? 'is-invalid': ''}`}
                        onChange = {(e) => setBasicSymptoms(e.target.value)}
                        >
                        </input>

                        {errors.basicSymptoms && <div className = 'invalid-feedback'> { errors.basicSymptoms} </div>}

                    </div>

                   <button className = 'btn btn-success' onClick = {saveOrUpdatePatient}>Submit</button> 


                </form>

            </div>

        </div>


      </div>



    </div>
  );
};

export default PatientComponent;