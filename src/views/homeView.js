import { html, render, until} from '../lib.js'
import { getAll } from '../services/movieService.js';

const homeContent = (moviePromise) => html` 
<div class="card-collection">
${until(moviePromise, html`<p>Loading<p>`)}
</div>
`

const movieCard = (movie) => html`
<div class="card" style="width: 18rem;">
  <img src="${movie.posterUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <p class="card-text">${movie.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${movie.genres[0]}</li>
    <li class="list-group-item">${movie.genres[1]}</li>
    <li class="list-group-item">${movie.genres[2]}</li>
  </ul>
  <div class="card-body">
    <a href="/edit/${movie._id}" class="card-link">Edit</a>
    <a href="/details/${movie._id}" class="card-link">Details</a>
  </div>
</div>
`

export const homeRender = (ctx) => {
     ctx.render(homeContent(getMovies()))
     
}

async function getMovies(){
    const movies = await getAll();
    return movies.map(movieCard)
}