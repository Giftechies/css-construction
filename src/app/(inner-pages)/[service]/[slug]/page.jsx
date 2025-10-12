
import InnerBanner from "@/components/ui/InnerBanner"
import Content from "@/components/servicepage/Content"
import Animations from "@/components/animations/Animations"


export default async function slug({params}){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/page?category=${params.service}&page=${params.slug}`)
    const data =await res.json()
    const response = data.data[0];
    console.log(response);
    console.log(response?.pageimage);
    
    
    


    return (
        <section>
            <InnerBanner pagename={response?.title} imgpath={response?.pageimage} />
            <Content data={response}  />
            <Animations/>
            
        </section>
    )
}