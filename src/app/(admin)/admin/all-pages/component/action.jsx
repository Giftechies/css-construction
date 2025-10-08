export async function Deletepage(id){
    try {
        const res = await fetch("/api/page",{method:'DELETE'})
        const data = await res.json()
        return data
        
    } catch (error) {
        console.log(error);
        
    }
}

export async function FetchPageId (id){
    try {
        console.log("fecthpageid call>>");
        
const res = await fetch(`/api/page/${id}`,{method:'GET'})
const data  = await res.json()
if(data){
    console.log(data,"fetchpageid");
    return data
    
}

    } catch (error) {
    console.error(error);
        
        
    }
}