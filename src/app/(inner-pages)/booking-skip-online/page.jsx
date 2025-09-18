import React from 'react'
import BookingOnline from "@/components/booking/Booking-online"
import InnerBanner from "@/components/ui/InnerBanner"
import Animations from '@/components/animations/Animations'
 
const page = () => {
  return (
   <section className='booking z-30 bg-light  pb-8 ' >
          <InnerBanner pagename="Book Online" imgpath={'https://plus.unsplash.com/premium_photo-1661407783160-b6f950068f2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmVycyUyMHNlcnZpY2VzfGVufDB8fDB8fHww'}  />
    
    <div className="container">
      
        <BookingOnline/>
        <Animations/>

    </div>
    
   </section>
  )
}

export default page