export async function Deletepage(id){
    try {
        const res = await fetch(`/api/page/${id}`,{method:'DELETE'})
        console.log("page deletin calling>>>>");
        
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

export async function Updatepage({ data, params }) {
  try {
    console.log("caliin updata page");
    
    const res = await fetch(`/api/page/${params.id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

    if (result.success) {
      return result;
    } else {
      throw new Error(result.message || "Update failed");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
