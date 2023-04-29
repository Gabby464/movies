import * as api from "../api/api.js";
import { endpoints, baseUrl } from "../api/api.js";
export async function logIn(email, password) {
  const user = await api.post(baseUrl + endpoints.login, { email, password });
  alert("logged in successfully");
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  if (localStorage.length < 1) {
    return null;
  } else {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  }
}

export async function removeUser(ctx) {
  await api.get(baseUrl + endpoints.logout)
  localStorage.removeItem("user");
  ctx.page.redirect("/");
}

export async function register(email, password){
  const user = await api.post(baseUrl + endpoints.register, { email, password });
  localStorage.setItem('user', JSON.stringify(user));
  alert('Successful Registration')

} 
