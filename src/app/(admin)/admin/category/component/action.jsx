
export async function fetchData() {
    try {
        const res = await fetch("/api/service-category",{
            method:"GET",
        })
        const data = await res.json()
        return data.data
        
        
    } catch (error) {
        console.log("category fetching>>>>",error);
        
        
    }
    
}

export async function deleteData(id) {
    console.log("action delete",id);
    
    try {
        const res = await fetch("/api/service-category",{
            method:"DELETE",
            body:JSON.stringify({"_id":id})
        })
        const data = await res.json()
        return data
        
    } catch (error) {
        console.log("error from deleteData>>>",error);
        
        
    }
    
}