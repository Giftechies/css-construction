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
    <div className="appear-down  w-full flex items-center bg-primary/30 p-4 flex-col gap-6 ">
      <div className="relative shrink-0 ">
      <span className={` ${randomColor}  border-4 border-white-1 rounded-full w-[80px] aspect-square flex items-center justify-center h3 font-serif`} >{name?.charAt(0)}</span>
        {/* <div className="absolute -right-4 top-0 flex size-8 items-center justify-center rounded-full border-[6px] border-zinc-100 bg-accent-4">
          <IconQuote size={15} className="text-primary" />
        </div> */}
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center ">
        

           <div>
            <p className="h5 font-medium text-primary ">{name}</p>
          </div>
        </div>

        <BorderVerticalThree className=" my-4 " />
        <p className=" tracking-wider text-[15px]  shrink-0 text-black-1 text-center ">{text}</p>
      </div>
    </div>
  );
};

export default HomeOneTestimonialCard;
