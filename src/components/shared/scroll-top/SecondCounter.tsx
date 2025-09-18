"use client"
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect,useState } from "react";
import "odometer/themes/odometer-theme-default.css";
 const Odometer = dynamic(() => import("react-odometerjs"), {
   ssr: false,
 });
interface CounterProps {
  value: number;
}   

const SecondCounter = ({value}:CounterProps) => {
    const [odometerValue, setOdometerValue] = useState(0)
    const [ref, inView] = useInView();

    useEffect(()=>{
      
         if(inView){{
            setTimeout(()=>{
                setOdometerValue(value)
            },1000)
        }
       
    }},[inView,value])

//       useEffect(() => {
//     if (inView) {
//       setTimeout(() => {
//         setOdometerValue(value);
//       }, 1000);
//     }
//   }, [inView, value]);

    return(
        <span ref={ref} >
            {inView? <Odometer value={odometerValue} format="(,ddd).dd" />:0}
        </span>
    )
}

export default SecondCounter;