import { html, render } from "../lib.js";
import { getAll } from "../services/movieService.js";
import { movieCard, allMoviesContent } from "./homeView.js";

export const myMoviesRender = (ctx) => {
  ctx.render(allMoviesContent(getMine()));
};

async function getMine() {
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const movies = await getAll(userId);
  if (movies.length < 1) {
    return html`
      <div class="card">
        <div class="card-header">Oops!</div>
        <div class="card-body">
          <h5 class="card-title">You have no movies</h5>
          <p class="card-text">Go ahead and contribuite to the library!</p>
          <a href="/create" class="btn btn-primary">Create one!</a>
        </div>
      </div>
    `;
  }else{
    return movies.map(movieCard);
  }
}
