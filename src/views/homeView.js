import { html, render, until} from '../lib.js'
import { getAll } from '../services/movieService.js';

export const allMoviesContent = (moviePromise) => html` 
<div class="card-collection">
${until(moviePromise, html`<p>Loading<p>`)}
</div>
`

export const movieCard = (movie) => html`
<div class="card" style="width: 18rem;">
  <img src="${movie.posterUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.description}</p>
  </div>
  <ul class="list-group list-group-flush">
${(movie.genres).map(genre => html`<li class="list-group-item">${genre}</li>`)}  
</ul>
  <div class="card-body">
    <a href="/edit/${movie._id}" class="card-link">Edit</a>
    <a href="/details/${movie._id}" class="card-link">Details</a>
  </div>
</div>
`

export const homeRender = (ctx) => {
     ctx.render(allMoviesContent(getMovies()))
     
}

async function getMovies(){
  const baseUrl = 'http://localhost:3030/data/movies'
    const movies = await getAll(baseUrl);
    return movies.map(movieCard)
}