import Sidebar from "@/components/admin/sidebar"


export default function RootLayout({children}){
    return(
        <div className=" h-screen w-full flex flex-1" >
           <Sidebar/>
           <div>
            <header></header>
            {children}
           </div>
        </div>
    )
}