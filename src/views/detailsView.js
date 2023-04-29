import { html, until} from '../lib.js'
import { getUser } from '../services/logService.js';
import { getMovie } from '../services/movieService.js';

const detailsContent = (moviePromise) => html` 
${until(moviePromise, html`<p>Loading<p>`)}
 
`
const movieCard = (movie) => html `
 <h1 class="my-4">${movie.title}
    </h1>
      <div class="row">
      <div class="col-md-8">
        <img class="img-fluid" src="${movie.posterUrl}" alt="">
      </div>
      <div class="col-md-4">
        <h3 class="my-3">Description</h3>
        <p>${movie.description}</p>
        <h3 class="my-3">Genres</h3>
        <ul>
        ${(movie.genres).map(genre => html`<li class="list-group-item">${genre}</li>`)}  
        </ul>
        <h3 class="my-3">Actors</h3>
        <ul>
        ${(movie.actors).map(actors => html`<li class="list-group-item">${actors}</li>`)}  
        </ul>
        <h3 class="my-3">Director</h3>
        <ul>
        <li class="list-group-item">${movie.director}</li>        
        </ul>
        <div class="card-body">
  </div>
      </div>
    </div>
` 
export const detailsRender = (ctx) => {
     ctx.render(detailsContent(loadMovie(ctx.params.id)));
}

async function loadMovie(id){
    const movie = await getMovie(id);
    if(typeof movie.actors !== 'array'){
        movie.actors = movie.actors.split(', ')
    }
    return movieCard(movie)
}