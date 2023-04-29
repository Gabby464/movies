//get, none, http://localhost:3030/

async function apiRequest(method, url, data) {
  const options = {
    method,
    headers: {},
  };
  //assign options if data is present
  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  //check if user is present in order ro assign X-Auth token
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const token = user.accessToken;
    options.headers["X-Authorization"] = token;
  }
  try {
    const request = await fetch(url, options);
    //if 403 = logout
    if (request.status == 403) {
      localStorage.removeItem("user");
    }
    if (!request.ok) {
      const error = await request.json();
      throw new Error(error.message);
    } 
    
    if (request.status == 204) {
        return request;
      } else {
        return request.json();
      }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export const get = apiRequest.bind(null, "get");
export const post = apiRequest.bind(null, "post");


