import {homeRender} from './views/homeView.js'

import { page, render } from './lib.js'
import { loginRender } from './views/loginView.js';
import { myMoviesRender } from './views/collectionView.js';
import { registerRender } from './views/registerView.js';
import { logIn } from './services/loginService.js';

const root = document.getElementById('root');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

page(decorateContext)
page('/', homeRender);
page('/my-collection', myMoviesRender);
page('/login', loginRender);
page('/register', registerRender);
page('/homeRender', homeRender);


page.start()

window.api = logIn