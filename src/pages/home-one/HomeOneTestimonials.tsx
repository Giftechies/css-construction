"use client";
import image1 from "@/../public/images/home-one/home-one-testimonial-1.png";
import image2 from "@/../public/images/home-one/home-one-testimonial-2.png";
import image3 from "@/../public/images/home-one/home-one-testimonial-3.png";
import image4 from "@/../public/images/home-one/home-one-testimonial-4.png";
import image5 from "@/../public/images/home-one/home-one-testimonial-5.png";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeOneTestimonialCard from "./HomeOneTestimonialCard";
import ButtonSlider from "@/components/buttons/ButtonSlider";

export const sliderData = [
  {
    image: "https://media.istockphoto.com/id/1130907832/photo/stunning-young-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=tySA5CpeNc1flFpStm8CgR3fNUBB78o-K-V9HVEIbp4=",
    text: "“It's been 2 years since I found Bankio, and it's such a relief as a small business owner to not worry about unnecessary fees. I lost my credit card once, and the service was so quick.",
    name: "Andrew Russel",
    title: "VP of Marketing",
  },
  {
    image: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D",
    text: "“Bankio has made managing my finances so much easier. The user-friendly interface and excellent customer support make it the perfect choice for individuals and businesses alike.",
    name: "Emily Thompson",
    title: "Freelance Designer",
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "“I switched to Bankio for my personal and business banking needs, and I couldn't be happier. The app is intuitive, and I love the convenience it offers.",
    name: "John Davis",
    title: "Entrepreneur",
  },
  {
    image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    text: "“Bankio's security features give me peace of mind. I can focus on my work without worrying about the safety of my financial information. Highly recommended!",
    name: "Sophia Miller",
    title: "Software Engineer",
  },
  {
    image: "https://images.unsplash.com/photo-1586351012965-861624544334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    text: "“As a startup founder, Bankio has been a game-changer for managing expenses and handling transactions. The real-time updates and analytics are incredibly valuable.",
    name: "Alex Turner",
    title: "CEO, Tech Innovations",
  },
];

const HomeOneTestimonials = () => {
  return (
    <section className="parallax-bg bg-[url(https://media.istockphoto.com/id/615926270/photo/night-in-warsaw.webp?a=1&b=1&s=612x612&w=0&k=20&c=j-zWimePBOwt-oqaFlaVJzECEW4zc9nyOExxPZuJ5l4=)] spy80px relative overflow-hidden  ">
       <div className="bg-black-4/60 absolute inset-0 "></div>
     
      <div className="container relative flex items-center justify-center ">
      <div className=" space-y-6  w-[90%] mx-auto lg:w-[55%] spy40px spx40px  flex flex-col items-center justify-center bg-white-4 rounded-3xl " >
        <div className="flex flex-col items-center text-center  gap-2 " >
          <SectionSubTitle text="Testimonial " className=" " />
        <SectionTitle text="What Our Clients Say" className=" text-black-2" />
      </div>
        <div className="   w-[90%] flex items-center justify-center  ">
          <Swiper
            // slidesPerView={1}
            spaceBetween={30}
            speed={1400}
            loop={true}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".customerSliderPrev",
             prevEl: ".customerSliderNext",
             
            }}
               breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
              1400: {
                slidesPerView: 1,
              },
            }}
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={`rtrtr${index}`}  >
                <HomeOneTestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ButtonSlider className="mt-12 mx-auto  flex  justify-center right-0 bottom-0 " />
      </div>
      </div>
      {/* <Lines /> */}
    </section>
  );
};

export default HomeOneTestimonials;
