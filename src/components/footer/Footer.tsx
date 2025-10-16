import Link from 'next/link'
import React from 'react'
import FooterSideSection from './FooterSideSection'
import FooterBottom from './FooterBottom'

const footer =[
  {title:"Quick Links",
    li:[
      {
        sublinks:"About Us",
        path:"/about-us"
      },
      {
        sublinks:"Area We Serve",
        path:"/area-we-serve"
      },
      {
        sublinks:"Contact Us",
        path:"/contact-us"
      },
      // {
      //   sublinks:"Privacy Policy",
      //   path:"#"
      // },
    ]
  },
  {
    title: "Skip Hire",
    path: "/skip-hire",
    li: [
      {
        sublinks: "Skip Hire",
        path: "/skip-hire/skip-hire",
      },
      {
        sublinks: "RORO Skip Hire",
        path: "/skip-hire/roro-skip-hire",
      },
      {
        sublinks: "Builders Waste Clearance",
        path: "/skip-hire/builders-waste-clearance",
      },
      {
        sublinks: "Waste Management",
        path: "/skip-hire/waste-management",
      },
    ],
  },
  {
    title: "Concrete Supply",
    path: "/concrete-supply",
    li: [
      {
        sublinks: "Concrete Supply",
        path: "/concrete-supply/concrete-supply",
      },
      {
        sublinks: "Screed",
        path: "/concrete-supply/screed",
      },
      {
        sublinks: "Ready Mix Concrete",
        path: "/concrete-supply/ready-mix-concrete",
      },
    ],
  },
  {
    title: "Tipper & Grab Services",
    path: "/tipper-and-grab-services",
    li: [
      {
        sublinks: "Grab Hire",
        path: "/tipper-and-grab-services/grab-hire",
      },
      {
        sublinks: "Cage Lorrie’s",
        path: "/tipper-and-grab-services/cage-lorries",
      },
      {
        sublinks: "Man and Van",
        path: "/tipper-and-grab-services/man-and-van",
      },
      {
        sublinks: "Aggregates",
        path: "/tipper-and-grab-services/aggregates",
      },
    ],
  },
]

const Footer = () => {
  return (
    <section className='footer bg-black-4 text-white-4 py-10    ' >
      <div className="container     ">
      <main className=' max-xl:flex-col-reverse  flex gap-4' >
        <div className="links   max-xl:my-5  justify-between  grid grid-cols-1 md:grid-cols-2   xl:grid xl:grid-cols-[150px_150px_200px_250px] gap-8 xl:gap-12  ">
         {footer.map((item,id)=>{
        return(
             <div key={id} className='' >

            <ul className=' space-y-4 ' >
              {item.title == "Quick Links"? <span className=' h5 font-semibold text-primary hover:text-primary/70 ' >{item.title}</span>: <Link className=' h5 font-semibold text-primary hover:text-primary/70 '  href={`${item.path}`} >{item.title}</Link> }
              

            {item.li.map((el,id)=>{
              return(
                  <li key={id}  className=' text-[14px] hover:text-primary ' ><Link href={el.path}>{el.sublinks}</Link></li>
             
              )
            })}

            </ul>
          </div>
        )
       })}
      </div>
      <FooterSideSection/>
      </main>
      <FooterBottom/>
        
      </div>

    </section>
  )
}

export default Footer