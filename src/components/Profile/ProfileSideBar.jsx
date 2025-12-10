import { LogOut, UserCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { logout } from "@/app/apiCalls/form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



export default function ProfileSideBar({components,currentStep,SetcurrentStep,user,setSelectedOrder}){

const navigate = useRouter()
const hanldelogout = async()=>{
  const res = await logout()
  if(res.success){
    toast.success('logout successfully!')
    navigate.push('/form')

  }
}
    return(
    <div className="sticky top-0 p-6 h-fit shadow-2xs flex flex-col gap-4 shrink-0 " >
      <div className="flex flex-col items-center  justify-center " >
        <div className="px-4 py-2 rounded-full bg-primary border text-white-1 uppercase font-serif text-[18px] " >{user?.firstName?.charAt(0) || (<UserCircle2 size={20} />) }</div>
              <span>{user?.email || "loading..."}</span>
        
      </div>
      <hr />
      <div className="flex flex-col gap-4  " >
          {
            components?.map((item,idx)=>{
                const isActive = idx ===currentStep;
                return(
                    <div key={item.label} onClick={()=>{
                        SetcurrentStep(idx)
                        setSelectedOrder(null)
                    }} className={` cursor-pointer hover:bg-primary/80 hover:text-white-1  ${isActive?"bg-primary text-white-1":" bg-white text-black-4"}  px-12 rounded-md py-2 capitalize `} >
                        {item?.label}
                    </div>
                )
            })
        }
      </div>
      <Button onClick={hanldelogout}  variant={"outline"} className={'cursor-pointer'} > <LogOut/> Logout</Button>
    
    </div>
)
}