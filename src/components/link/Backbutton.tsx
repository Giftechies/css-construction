import {cn} from '@/utils/cn'
import { IconArrowLeft } from "@tabler/icons-react";

type Button = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const Backbutton =({text,className,...Props }:Button): JSX.Element =>{
    return(
    <button {...Props} className={cn(" p-4 px-6 py-3 spy12px spx24px l-text bg-prim group flex overflow-hidden relative items-center justify-center text-white-1  ",className)}>
        <span className=' absolute translate-x-full h-full w-full flex items-center justify-center group-hover:translate-x-0 transition-all duration-300 ease-in-out  '><IconArrowLeft/></span>
        <span className=' absolute translate-x-0 flex h-full w-full items-center justify-center group-hover:-translate-x-full transition-all duration-300 ease-in-out  l-text'>{text}</span>
         <span className="l-text invisible relative">{text}</span>
        

      </button>
    )
}


export default Backbutton;