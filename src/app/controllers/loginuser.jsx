



export async function loginuser({username,password}){
    try {
        const res = await fetch("/api/auth/login",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body: JSON.stringify({username,password}),
             credentials: "include",
        })
        const data = await res.json()
        if(!res.ok) throw new Error(data.message || "login failed")

            return data


    } catch (error) {
        console.log(error);
        throw error;
        
        
    }
}