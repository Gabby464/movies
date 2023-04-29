import { getUser } from "./logService.js";

const baseUrl = 'http://localhost:3030/data/movies'

export const getAll = async (baseUrl) => {
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

export async function getMovie(id){
    try{
        const response = await fetch(`http://localhost:3030/data/movies/${id}`)

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