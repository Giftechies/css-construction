export async function FetchpostCode(){
    try {
        console.log("indside fetchpostcode caklling");
        
        const res = await fetch("/api/form/postcode",{
            method:"GET"
        })
        const data = await res.json()
        if(data){
            return data
            
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
}
export async function Fetchjobtype(){
    try {
        console.log("indside fetchpostcode caklling");
        
        const res = await fetch("/api/form/category",{
            method:"GET"
        })
        const data = await res.json()
        if(data){
            return data
            
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
}