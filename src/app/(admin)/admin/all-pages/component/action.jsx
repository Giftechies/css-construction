export async function Deletepage(id){
    try {
        const res = await fetch("/api/page",{method:'DELETE'})
        const data = await res.json()
        return data
        
    } catch (error) {
        console.log(error);
        
    }
}