"use client";
import { useEffect, useState } from "react";
import FormCom from "../../component/FormCom";
import { FetchPageId } from "../../component/action";
import { Updatepage } from "../../component/action";
import { useRouter } from "next/navigation";
export default function Editpage({ params }) {
  const [IsinitialData, setIsinitialData] = useState({});
  const route = useRouter()
  useEffect(() => {
    async function fetchpage() {
      const res = await FetchPageId(params.id);
      if (res.success && res.data) {
        
        
        setIsinitialData(res.data);
      }
    }
    fetchpage();
  }, []);
  const handleSubmit = async (formData) => {  
    try {

      const res = await Updatepage({ data: formData, params });
      if (res.success) {
        alert("Page updated successfully!");
        route.push("/admin/all-pages")

      }
    } catch (error) {
      alert("Update failed!");
    }
  };

  return (
    <div>
      <FormCom onSubmit={handleSubmit} initalData={IsinitialData} mode="edit" />
    </div>
  );
}
