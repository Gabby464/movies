import { getUser } from "./logService.js";

const baseUrl = 'http://localhost:3030/data/movies'

export const getAll = async () => {
    try{
        const response = await fetch(baseUrl);

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

export async function createMovie(movieObj, authKey){
    try{
        const request = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
               "X-Authorization": authKey,
            },
            body: JSON.stringify(movieObj),

        })
        if(!request.ok){
            const err = await request.json();
            throw new Error(err.message)
        }
        const movie = await request.json();
        console.log(movie);
        return movie
    }
    catch(error){
        alert(error.message);
        throw error;
    }
}