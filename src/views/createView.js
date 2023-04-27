import { html, render } from "../lib.js";
import { getUser } from "../services/logService.js";
import { createMovie } from "../services/movieService.js";

const createContent = (onSubmit) => html`
  <h2>Create a Movie</h2>
  <form @submit=${onSubmit}>
    <div class="mandatory-fields">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          required
        />
      </div>
      <div class="mb-3">
        <label for="Genre" class="form-label">Genre</label>
        <input
          type="text"
          class="form-control"
          id="Genre"
          name="genres"
          required
        />
      </div>
      <div id="emailHelp" class="form-text">
        If more than one, please separate them via comma (,)
      </div>

      <div class="mb-3">
        <label for="posterUrl" class="form-label">Poster URL</label>
        <input
          type="url"
          class="form-control"
          id="posterUrl"
          name="posterUrl"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">description</label>
        <input
          type="textarea"
          class="form-control"
          id="description"
          name="description"
          required
        />
      </div>
    </div>
    <div class="optional-fields">
      <h3>Optional</h3>
      <div class="mb-3">
        <label for="actors" class="form-label">Actors</label>
        <input type="text" class="form-control" id="actors" name="actors" />
      </div>
      <div id="emailHelp" class="form-text">
        If more than one, please separate them via comma (,)
      </div>
      <div class="mb-3">
        <label for="director" class="form-label">Director</label>
        <input type="text" class="form-control" id="director" name="director" />
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;

export const createRender = (ctx) => {
  ctx.render(createContent(onSubmit));

  async function onSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const objectForm = Object.fromEntries(form);
    const user = await getUser();
    objectForm.genres = objectForm.genres.split(',');
    objectForm.actors = objectForm.actors.split(',')
    objectForm['_createdOn'] = user["_createdOn"];
    const authKey = user.accessToken;
    createMovie(objectForm, authKey);
    ctx.page.redirect('/')
  }
};
