
import * as api from "../api/api.js";
import { baseUrl, endpoints } from "../api/api.js";

export const getAll = async (id) => {
    let movies = undefined;
    if(!id){
        movies = await api.get(baseUrl + endpoints.movies);

    }else{
        movies = await api.get(baseUrl + endpoints.getMine(id));
    }
    return movies;
}

export async function createMovie(movieObj){
    const request = await api.post(baseUrl + endpoints.movies, movieObj);
}

export async function getMovie(id){
    const movie = await api.get(baseUrl + endpoints.getMovie(id))
    return movie
}