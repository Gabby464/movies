import {homeRender} from './views/homeView.js'

import { page, render } from './lib.js'
import { loginRender } from './views/loginView.js';
import { myMoviesRender } from './views/collectionView.js';
import { registerRender } from './views/registerView.js';
import { getUser, removeUser } from './services/logService.js';
import { createRender } from './views/createView.js';

const root = document.getElementById('root');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    renderNavBar()
    next();
}

page(decorateContext)
page('/', homeRender);
page('/my-collection', myMoviesRender);
page('/login', loginRender);
page('/register', registerRender);
page('/create', createRender);
page('/homeRender', homeRender);
page('/logout', removeUser)

async function  renderNavBar(){
    const presentUser = await getUser()
    console.log(presentUser)
    if(presentUser){
       Array.from(document.getElementsByClassName('user')).forEach((element) => element.style.display = 'block');
       Array.from(document.getElementsByClassName('guest')).forEach((element) => element.style.display = 'none');
    }else{
        Array.from(document.getElementsByClassName('user')).forEach((element) => element.style.display = 'none');
        Array.from(document.getElementsByClassName('guest')).forEach((element) => element.style.display = 'block');
    }
}

page.start()

