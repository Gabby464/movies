import { html, render} from '../lib.js'
import { register } from '../services/authService.js';

const registerContent = (onSubmit) => html` 
<h2>Register</h2>
    <form @submit= ${onSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" required>
  </div>
  <div class="mb-3">
    <label for="confirmPassword" class="form-label">Confirm Passowrd</label>
    <input type="password" name="password-confirm" class="form-control" id="confirmPassword" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`

export const registerRender = (ctx) => {
     ctx.render(registerContent(onSubmit));

     async function onSubmit(e){
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const pass = form.get('password');
        const confirmPass = form.get('password-confirm');
        
        if(pass === confirmPass){
           await register(email, pass);
        }if(localStorage.length > 0){
            ctx.page.redirect('/')
        }
     }
}