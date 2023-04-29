import { html} from '../lib.js'
import { logIn, getUser } from '../services/logService.js';

const loginContent = (onSubmit) => html` 
<h2>Login </h2>
    <form @submit= ${onSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`

export const loginRender = (ctx) => {
     ctx.render(loginContent(onSubmit)); 

     async function onSubmit(e){
        e.preventDefault();
        const form = new FormData(e.target);
        const formEntries = Object.fromEntries(form);
        const formEntriesArr = Object.values(formEntries)
        const areEmpty = formEntriesArr.some((e) => e == '');
        if(areEmpty == true){
            alert('Please fill in all the required fields')
        }else{
            await logIn(form.get('email'), form.get('password'))
        }
        if(await getUser()){
            ctx.page.redirect('/')
        }
        
     }
}