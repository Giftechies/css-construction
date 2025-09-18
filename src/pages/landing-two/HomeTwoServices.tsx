import serviceAnimal from "@/../public/images/home-two/service-animale.png";
import serviceCoin from "@/../public/images/home-two/service-coins.png";
import LInkArrowTwo from "@/components/link/LInkArrowTwo";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  IconDiscountCheck,
  IconPresentation,
  IconRoute,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import HomeTwoServiceCard from "./HomeTwoServiceCard";
import Counter from "@/components/shared/scroll-top/Counter";

const card = [
  { title: "title_test", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", path: '/img/svg/wallet.svg' },
  { title: "title_test", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", path: '/img/svg/cube.svg' },
  { title: "title_test", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", path: '/img/svg/sheild.svg' },
  { title: "title_test", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", path: '/img/svg/leaf.svg' },
]

const HomeTwoServices = () => {
  return (
    <section className=" sp60px " >
      <div className="container w-full flex gap-4 ">
        <div className="left w-[55%]  space-y-8 ">
          <div className="title">
            <h1 className="d4 title-animatio uppercase leading-[10px] font-[700] text-primary " >Experience construction done right</h1>
            <p className=" mt-4  " >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas soluta non maiores, omnis quaerat perferendis ad alias ipsa! Corporis aut beatae saepe ipsa minus, maxime libero esse nobis quas exercitationem, error voluptas non nam.</p>
          </div>
          <div className="card grid grid-cols-2 ">
            {card.map((item, id) => {
              return (
                <div key={id} className="card1  p-1 min-h-30   flex   gap-4 ">
                  <div className="img  bg-primary size-14 p-3 shrink-0 rounded-full flex items-center justify-center text-white-1 ">
                    <img src={item.path} className="size-full" alt="" />
                  </div>
                  <div className="  ">
                    <h1 className="h4" >{item.title} </h1>
                    <p className="text-xm leading-4 " >{item.text}</p>

                  </div>



                </div>
              )
            })}
          </div>
        </div>
        <div className="right w-[45%] flex items-center justify-center ">

         <div className="relative w-[100%] h-[65%] overflow-hidden " >
           <div className="img  absolute inset-0 w-[100%] h-full z-0 border " >
            <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D" className=" w-full h-full " alt="" />
          </div>
         <div className=" absolute  left-5 bottom-4 z-10 flex gap-8 " >
          <div className=" w-48 h-25 bg-black-4  flex flex-col items-center justify-center   " >
            <span className="text-primary h2 font-[600]  " ><Counter value={45}/>+</span>
            <p className="text-white-1 h6 font-[400] capitalize  " >years of experince</p>
          </div>
         <div className=" w-48 h-25 bg-black-4   " >
          <div className=" w-48 h-25 bg-black-4  flex flex-col items-center justify-center   " >
            <span className="text-primary h2 font-[600]  " ><Counter value={400}/>+</span>
            <p className="text-white-1 h6 font-[400] capitalize  " >Happy clients</p>
          </div>
         </div>
         </div>
         </div>

        </div>
      </div>
    </section>
  );
};

export default HomeTwoServices;
