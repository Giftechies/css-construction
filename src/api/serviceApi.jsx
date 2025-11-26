// // src/api/servicesApi.js

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; 
export async function fetchServices(){
  try {
    const res = await fetch(`${BASE_URL}/api/service-category`,{
      method:"GET",
    })
    if(!res.ok){
      
      return [];
    }
    const data = await res.json()
    return data;

    
  } catch (error) {
       console.error("Failed to fetch services:", error);
    return [];
    
  }
}
