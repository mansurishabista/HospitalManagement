import React, {useEffect, useState} from 'react'
import { listInventory, getItem, updateInventory, deleteItem} from '../services/InventoryService'
import {useNavigate} from 'react-router-dom'
import { FixedSizeList } from 'react-window';





const ListInventory = () => {
    


    

   const [inventory, setInventory] = useState([])
   const navigator = useNavigate();

   function addNewItem(){
    navigator ('/add-item');
   }
   
   useEffect(() => {
      getAllItems();
   }, [])

   function getAllItems(){
    listInventory().then((response) => {
      setInventory(response.data);

    }).catch(error => {
      console.error(error);
    })
   }

   function updateInventory(equipment){
    navigator(`/update-item/${equipment}`)
    
   }

   function removeItem(equipment) {
    console.log(equipment);
    deleteItem(equipment).then((response) => {
      getAllItems();

    } ).catch(error =>{
      console.error(error);
    })
    
   }
    
     console.log(inventory)
     
     const containerStyle = {
       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '59vh'
    
     }

     

  return (

    <div style = {containerStyle}> 

     {(inventory.length>0)
     ?
     <div className='container'>
     <h2 className = 'text-center' style = {{color: '#53a8b6'}} > Inventory</h2> 
     <button className= 'btn btn-primary mb-2' style = {{backgroundColor:'#53a8b6'}} onClick = {addNewItem} > New Item </button>
     <table className = 'table table-striped table-bordered'>
        <thead>
            <tr>

                <th>Item Id</th>
                <th>Item Name</th>
                <th>Issued quantity</th>
                <th>Status</th>
                <th>Unit Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {

                inventory.map(inventory => 
                    <tr key ={inventory.id}>
                      
                        <td>{inventory.id}</td>
                        <td>{inventory.equipment}</td>
                        <td>{inventory.issuedQuantity}</td>
                        <td>{inventory.status}</td>
                        <td>{inventory.unitPrice}</td>
                        <td>
                           <button className = 'btn btn-info' style = {{backgroundColor:'#53a8b6'}} onClick = {() => updateInventory(inventory.equipment)}>Update</button>
                          <button className = 'btn btn-danger' style = {{backgroundColor:'#f95959'}} onClick = {() => removeItem(inventory.equipment)}> Delete</button> 

                        </td>
                    

                    </tr>
                )
            }
           

        </tbody>

     </table>
    </div>
    :
    <h1 className = 'text-center' id = "center" style = {{color: '#53a8b6'}} > No Item exist :( </h1>}
    
    
    
    </div>

    
    
    
  )
}

export default ListInventory