import React from 'react'

const Logocontainer = () => {
  const logos = [
    "/img/logo/logo1.png",
    "/img/logo/logo2.png",
    "/img/logo/logo3.png",
    "/img/logo/logo4.png",
    "/img/logo/logo5.png",
  ]

  return (
    <div className='bg-skinColor  py-24    '>
     <div className='container flex flex-col items-center justify-center gap-6  ' >
         <p className='text-center text-lg font-medium'>
        We have the confidence of hundreds of organizations
      </p>
      
      <div className="grid grid-cols-5 gap-12 items-center justify-between ">
        {logos.map((src, index) => (
          <div key={index} className="flex ">
            <img src={src} alt={`logo-${index}`} className='h-12 object-contain' />
          </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Logocontainer
