import axios from "axios";
const REST_API_BASE_URL ='http://localhost:8080/api/inventory';

export const listInventory = () =>  axios.get(REST_API_BASE_URL);

export const createInventory = (inventory) => axios.post(REST_API_BASE_URL, inventory);

export const getItem = (equipment) => axios.get(REST_API_BASE_URL + '/' + equipment);

export const updateInventory = (equipment, inventory) => axios.put(REST_API_BASE_URL + '/' + equipment, inventory);

export const deleteItem = (equipment) => axios.delete(REST_API_BASE_URL + '/' + equipment); 
