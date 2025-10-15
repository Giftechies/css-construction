export async function FetchpostCode(){
    try {       
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
      
        
        const res = await fetch("/api/form/category",{
            method:"GET",
            cache:"no-store"
        })
        const data = await res.json()
        if(data){
            return data
            
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
}

export async function Fetchextra(){
    try {
        const res = await fetch("/api/form/extra",{
            method:'GET'
        })
         const data = await res.json()
         if(!data.success){
            return data
         } 
         return data

    } catch (error) {
        console.log(error);
        
        
    }
}

export async function Fetchrates(){
    try {

        const res = await fetch("/api/form/rates",{
            method:"GET"
        })
        const data = await res.json()
        
        
        if(!data.success){
        console.error(data);
        
        }
        return data

    } catch (error) {
        console.log(error);
        
        
    }
}