import Link from 'next/link'
import React from 'react'
import FooterSideSection from './FooterSideSection'
import FooterBottom from './FooterBottom'

const footer =[
  {title:"Quick Links",
    li:[
      {
        sublinks:"About Us",
        path:"#"
      },
      {
        sublinks:"Area We Serve",
        path:"#"
      },
      {
        sublinks:"Contact",
        path:"#"
      },
      {
        sublinks:"Privacy Policy",
        path:"#"
      },
    ]
  },
  {title:"Skip Hire",
    li:[
      {
        sublinks:"Skip Hire",
        path:"#"
      },
      {
        sublinks:"RORO Skip Hire",
        path:"#"
      },
      {
        sublinks:"Builders Waste Clearance",
        path:"#"
      },
      {
        sublinks:"Waste Management",
        path:"#"
      },
    ]
  },
  {
    title: "Concrete Supply",
  
    li: [
      {
  
        sublinks: "Concrete Supply",
        path: "/concrete-supply",
      },
      {
  
        sublinks: "Screed",
        path: "/screed",
      },
      {
  
        sublinks: "Ready Mix Concrete",
        path: "/ready-mix-concrete",
      },
    ],
  },
  {
    title: "Tipper & Grab Services",
    li: [
      {
  
        sublinks: "Grab Hire",
        path: "/grab-hire",
      },
      {
  
        sublinks: "Cage Lorrie’s",
        path: "/cage-lorries",
      },
      {
  
        sublinks: "Man and Van",
        path: "/man-and-van",
      },
      {
  
        sublinks: "Aggregates",
        path: "/aggregates",
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
              <span className=' h5 font-semibold text-primary hover:text-primary/70 ' >{item.title}</span>
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