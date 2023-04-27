const baseUrl = "http://localhost:3030/users/register";

export async function register(email, password){
    try {
        const request = await fetch(baseUrl, {
            method: 'POST', 
            headers: {
                "Content-Type":  "application/json"
            },
            body: JSON.stringify({email, password}),
        })
        if(!request.ok){
            const error = request.json();
            throw new Error(error)
        }
        const user = await request.json();
        localStorage.setItem('user', JSON.stringify(user));
        alert('Successful Registration')
    } catch (error) {
        alert(error.message);
        throw error
    }
} 
