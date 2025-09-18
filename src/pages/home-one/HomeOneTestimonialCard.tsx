import ButtonSlider from "@/components/buttons/ButtonSlider";
import BorderVerticalThree from "@/components/shared/BorderVerticalThree";
import {
  IconQuote,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: string;
  text: string;
  name: string;
  title: string;
};



const HomeOneTestimonialCard = ({ image, text, name, title }: Props) => {

  const colors = [
  "bg-red-200 text-red-800",
  "bg-green-200 text-green-800",
  "bg-blue-200 text-blue-800",
  "bg-yellow-200 text-yellow-800",
  "bg-purple-200 text-purple-800",
  "bg-pink-200 text-pink-800",
  "bg-indigo-200 text-indigo-800",
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="appear-down    w-full flex items-center bg-[#FBF2EB] p-4 flex-col gap-6 ">

      <div className="relative shrink-0 "> 
      <span className={` ${randomColor}  border-4 border-white-1 rounded-full w-[60px] aspect-square flex items-center justify-center h4 font-semibold `} >{name?.charAt(0)}</span>
      
      </div>
      <div className="w-full">
       

        <p className=" tracking-wider text-[15px]  shrink-0 text-black-1 text-center ">{text}</p>
        <BorderVerticalThree className=" my-4 " />
         <div className="flex items-center justify-center ">
        

           <div>
            <p className="h5 font-medium text-primary ">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOneTestimonialCard;
