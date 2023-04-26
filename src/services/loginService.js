
const baseUrl = "http://localhost:3030/users/login";

export async function logIn(email, password) {
  try {
    const request = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });
    if (!request.ok) {
      const error = await request.json();
      throw new Error(error.message);
    }
    const user = await request.json();
    localStorage.setItem("user", JSON.stringify(user));
    alert("logged in successfully");
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export async function getUser(){
    if(localStorage.length < 1){
        return null
    }else{
        const user = JSON.parse(localStorage.getItem('user'))
        return user;
    }
}
