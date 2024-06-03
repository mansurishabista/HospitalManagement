import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createInventory, updateInventory} from '../services/InventoryService'
import { getItem } from '../services/InventoryService';


const Inventory = () => {

    const [Equipment, setEquipment] = useState('')
    const [issuedQuantity, setIssuedQuantity] = useState('')
    const [status, setStatus]= useState('')
    const [unitPrice, setUnitPrice] = useState('')
    
    
    const {equipment} = useParams();
    
  
    const navigator = useNavigate();

    useEffect( () => {
        debugger;
        if(equipment){

            getItem(equipment).then((response)=> {
               
                setIssuedQuantity(response.data.issuedQuantity);
                setStatus(response.data.status);
                setUnitPrice(response.data.unitPrice);
            

            }).catch(error => {
                console.log('CATCH', equipment)
                console.error(error);
            })
        }

    }, [equipment])


    function saveOrUpdateItem(e){
        debugger;
        const inventory = {equipment, issuedQuantity, status, unitPrice }
        console.log(inventory)

        if(equipment){
            updateInventory(equipment, inventory).then((response) => {
                 console.log(response.data)
                navigator('/inventory');

            }).catch(error =>{
                console.error(error);
                 navigator('/inventory');

            })

         }
           else{
         
            createInventory(inventory).then((response) => {
                console.log(response.data);
    
                navigator('/inventory')
    
            }).catch(error =>{
                console.error(error);

            })

        }
       
        
    }

    function pageTitle(){

        if(equipment){
            return <h2 className = 'text-center' style = {{color: '#53a8b6'}}>Update Inventory List</h2>
        }else{
            return <h2 className = 'text-center' style = {{color: '#53a8b6'}}>Add Item</h2>
        }
    }


  return (
    <div className = 'container'>
        <br /> <br />
        <div className = 'row'>

            <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                {
                   pageTitle()

                }
                 <div className = 'card-body'>
                    <form>
                        <div className = 'form-group mb-2'>
                         <label className = 'form-label'>Name of Equipment </label>
                         <input type="text" placeholder = 'Enter name of equipment' name = 'equipment' value ={equipment} className = 'form-control' onChange = {(e) => setEquipment(e.target.value)}/>
                        </div>


                        <div className = 'form-group mb-2'>
                         <label className = 'form-label'>Issued Quantity </label>
                         <input type="number" placeholder = 'Enter Qty Issued' name = 'isssuedQuantity' value ={issuedQuantity} className = 'form-control' onChange = {(e) => setIssuedQuantity(e.target.value)}/>
                        </div>


                        <div className = 'form-group mb-2'>
                         <label className = 'form-label'> Status </label>
                         <input type="text" placeholder = 'Enter Status' name = 'status' value ={status} className = 'form-control' onChange = {(e) => setStatus(e.target.value)}/>
                        </div>


                        <div className = 'form-group mb-2'>
                         <label className = 'form-label'> Unit Price </label>
                         <input type="nuber" placeholder = 'Enter Price in INR' name = 'unitPrice' value ={unitPrice} className = 'form-control' onChange = {(e) => setUnitPrice(e.target.value)}/>
                        </div>
                        <button className = 'btn btn-success' onClick = {saveOrUpdateItem}>Submit</button>
                    </form>

                 </div>
            </div>

        </div>


    </div>
  )
}

export default Inventory