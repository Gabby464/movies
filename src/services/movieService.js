import { getUser } from "./loginService.js";

const baseUrl = 'http://localhost:3030/data/movies'

export const getAll = async () => {
    const response = await fetch(baseUrl);
    try{
        if(!response.ok){
             const error = await response.json();
             throw new Error(error.message)
        }else{
            return response.json()
        }
    }catch(err){
        alert(err.message);
        throw(err)
    }
}

export function getMine(){
    const user = getUser();
    const authKey = user['X-Authorization']

}