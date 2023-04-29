export const endpoints = {
    login: "/users/login",
    register: "/users/register",
    movies: "/data/movies",
    getMovie: (id) =>`/data/movies/${id}`,
    getMine: (id) => `/data/movies?where=_ownerId%3D%22${id}%22`,
    logout: "/users/logout"
};
export const baseUrl = "http://localhost:3030";