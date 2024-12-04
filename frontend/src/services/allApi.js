import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

// display all items
export const getvideo = async() =>{
    return await commonApi('GET',`${serverUrl}/inventory`,"")
}

//add items
export const addInventory = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/inventory`,reqBody)
}
