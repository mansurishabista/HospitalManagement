import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createInventory, updateInventory} from '../services/InventoryService'
import { getItem } from '../services/InventoryService';
import './Inventory.css';


const Inventory = () => {

    const [equipment, setEquipment] = useState('')
    const [issuedQuantity, setIssuedQuantity] = useState('')
    const [status, setStatus]= useState('')
    const [unitPrice, setUnitPrice] = useState('')
    const [errors, setErrors] = useState({})
    
    
    const {equipment: equipmentParam } = useParams();
    
  
    const navigate = useNavigate();

    useEffect( () => {
        debugger;
        if(equipmentParam){

            getItem(equipmentParam).then((response)=> {

                setEquipment(response.data.equipment);
                setIssuedQuantity(response.data.issuedQuantity);
                setStatus(response.data.status);
                setUnitPrice(response.data.unitPrice);
            

            }).catch(error => {
                console.log('CATCH', equipment)
                console.error(error);
            })
        }

    }, [equipmentParam])

    const validate = () => {
        //const unitPricePatt = /^\d+$/;
        let tempErrors = {};
        if(!equipment) tempErrors.equipment = " Equipment is required";
        if(!issuedQuantity) tempErrors.issuedQuantity = " IssuedQty. is required";
        if(!status) tempErrors.status = "status is required";
        if (!unitPrice) tempErrors.unitPrice = " unit price is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;

    };


    function saveOrUpdateItem(e){

       // debugger;
        e.preventDefault();
        if (!validate()) return;

        const inventory = {equipment, issuedQuantity, status, unitPrice }
        console.log(inventory)

        if(equipmentParam){
            updateInventory(equipmentParam, inventory).then((response) => {
                 console.log(response.data)
                navigate('/inventory');

            }).catch(error =>{
                console.error(error);
                 navigate('/inventory');

            });

         }
           else{
         
            createInventory(inventory).then((response) => {
                console.log(response.data);
    
                navigate('/inventory')
    
            }).catch(error =>{
                console.error(error);

            })

        }
       
        
    }

    const pageTitle = () =>{

        return(
            <h2 className = 'text-center' style = {{color: '#53a8b6'}}>{equipmentParam? "Update Inventory List" : "Add Item"}</h2>
        );
    };


  return (
    <div className = 'container mt-4 mb-5'>
        <br /> <br />
        <div className = 'row justify-content-center'>

            <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                {
                   pageTitle()

                }
                 <div className = 'card-body'>
                    <form onSubmit = {saveOrUpdateItem}>
                        <div className = 'form-group mb-3'>
                         <label className = 'form-label'>Name of Equipment </label>
                         <input type="text" placeholder = 'Enter name of equipment' name = 'equipment' value ={equipment} className = 'form-control' onChange = {(e) => setEquipment(e.target.value)}/>

                         {
                            errors.equipment &&(
                                <div className = 'text-danger'>{errors.equipment}</div>
                            )
                         }

                        </div>


                        <div className = 'form-group mb-2'>
                         <label className = 'form-label'>Issued Quantity </label>
                         <input type="number" placeholder = 'Enter Qty Issued' name = 'isssuedQuantity' value ={issuedQuantity} className = 'form-control' onChange = {(e) => setIssuedQuantity(e.target.value)}/>
                         
                         {errors.issuedQuantity&&(
                            <div className = "text-danger">{errors.isssuedQuantity}</div>
                         )}
                        </div>


                        <div className = 'form-group mb-3'>
                         <label className = 'form-label'> Status </label>
                         <input type="text" placeholder = 'Enter Status' name = 'status' value ={status} className = 'form-control' onChange = {(e) => setStatus(e.target.value)}/>

                         {errors.status&&(
                            <div className = "text-danger">{errors.status}</div>
                         )}
                        </div>


                        <div className = 'form-group mb-3'>
                         <label className = 'form-label'> Unit Price </label>
                         <input type="number" placeholder = 'Enter Price in INR' name = 'unitPrice' value ={unitPrice} className = 'form-control' onChange = {(e) => setUnitPrice(e.target.value)}/>

                         {errors.unitPrice &&(
                            <div className = "text-danger">{errors.unitPrice}</div>
                         )}

                        </div>
                        <button className = 'btn btn-success'>Submit</button>
                    </form>

                 </div>
            </div>

        </div>


    </div>
  )
}

export default Inventory;