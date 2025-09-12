import React from 'react'
import BookingOnline from "@/components/booking/Booking-online"
import InnerBanner from "@/components/ui/InnerBanner"
 
const page = () => {
  return (
   <section className='booking  ' >
          <InnerBanner pagename="Book Online" imgpath={'https://plus.unsplash.com/premium_photo-1661407783160-b6f950068f2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmVycyUyMHNlcnZpY2VzfGVufDB8fDB8fHww'}  />
    
    <div className="container">
      
        <BookingOnline/>


    </div>
    
   </section>
  )
}

export default page