import ProfileComponent from "@/components/Profile/ProfileComponent"
import { getuserDetails } from "@/lib/auth";
import  InnerBanner from "@/components/ui/InnerBanner"

export const metadata = {
  title:"Profile",
  description:"User details"

}


export default async function profilePage() {
    const user =  await getuserDetails();
    return(
      <>
   
      <InnerBanner pagename={'Profile'} imgpath={'/img/innerimg/2.png'}  />
      <ProfileComponent id={user?.userId} />
      </>
    )
}