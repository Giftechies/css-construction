"use client";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Cardskip from "../card/Cardskip";
import { Skipcard } from "../card/Skipcard";
import { Fetchrates } from "../action/action";
import { Skeleton } from "@/components/ui/skeleton";

export default function Skip({ goToNextStep }) {
  const { watch, setValue } = useFormContext();
  const selectedSkip = watch("skipSize");
  const type = watch("jobType");
  const postcode = watch("postcodeArea")
  const [Isdelivery,setIsdelivery] = useState([])
  console.log(postcode);
  

  const [mounted, setMounted] = useState(false);
  const [loading,setloading] = useState(false)

   const fetchPostcodes = async () => {
    try {
      // setloading(true)
      const res = await fetch("/api/form/rollandroll");
      const data = await res.json();
      console.log(data.data);
      const response = data.data;
      const filterdata = response.filter(item=>item.
postId.postcode.trim().toLowerCase() == postcode.trim().toLowerCase() )
console.log("sd>>>>>",filterdata);


if(filterdata && filterdata.length > 0){
  const dilveryoption = filterdata.map((item)=>({
    label:item.label,
    baseprice:item.baseprice,
    tones:item.tones,
    toneprice:item.toneprice
  }))

  setIsdelivery(dilveryoption)
  setloading(false)
}
    } catch (err) {
      console.error(err);
      // setloading(false)
    }
    finally{
      // setloading(false)
    }
  };
  
     const loadrate = async ()=>{
      setloading(true)
      const data = await Fetchrates()
     if(data.success){

       const resposne = data?.data
       console.log(resposne);
       
       const filterdata = resposne?.filter(item=>item.categoryId.category.toLowerCase() === type && item.postId.postcode === postcode)

       if(filterdata.length > 0){
        const dilveryoption = filterdata.map((item)=>({
              size: item.sizeId.size,
           rate: item.rate,

        }));
        setIsdelivery(dilveryoption);
        setloading(false)
        console.log("Isdelivery>>>>",dilveryoption);
        
       }
      
       
      }
      setloading(false)
      

     }
  useEffect(() =>{
     setMounted(true)
     if(type == "roll and roll off" ){
      console.log("rool");
      console.log(type);
      
      fetchPostcodes()
    }else{ 
      console.log("sd skip");
      
      loadrate()}

      console.log(type);

  }, []);
  if (!mounted) return null; // 🚀 prevents hydration error

  const delivery = [
    { distance: 4, rate: 250 },
    { distance: 8, rate: 330 },
    { distance: 10, rate: 380 },
    { distance: 12, rate: 440 },
    { distance: 16, rate: 540 },
  ];

  const roll = [
    { label: "20/40yd mixed", baseprice: 280, tones: 5, toneprice: 190 },
    { label: "20/40yd wood", baseprice: 280, tones: 5, toneprice: 190 },
    { label: "20/40yd P/B", baseprice: 280, tones: 5, toneprice: 190 },
    { label: "20yd hardcore", baseprice: 280, tones: 5, toneprice: 190 },
  ];

  const transit = [
    { label: "One Yard", rate: 95 },
    { label: "1/4 Load", rate: 130 },
    { label: "1/2 load", rate: 200 },
    { label: "3/4 Yard", rate: 260 },
    { label: "Full Yard", rate: 330 },
  ];

  const handleSelect = (item) => {
    setValue("skipSize", item);
    if (goToNextStep) goToNextStep();
  };

  return (

    <div>
      {loading? <div className="skip grid grid-cols-3 gap-8">
        {Array.from({length:3}).map(()=>{
          return(
            <div className="p-4 flex items-center justify-center w-48 " >
              <Skeleton  className=" w-full h-24 " />
            <div className=" flex gap-8 " >
                <Skeleton  className=" w-24 h-24 " />
              <Skeleton  className=" w-24 h-24 " />
            </div>
              <Skeleton  className=" w-24 h-24 " />
            </div>
          )
        })}

      </div>
    :
    ""  
    }
   <>
      {type === "skip delivery" && (
        <section className="skip grid grid-cols-3 gap-8">
          {Isdelivery.map((el, id) => (
            <Cardskip
              key={id}
              item={el}
              isSelected={selectedSkip?.size === el.size}
              onClick={() => handleSelect(el)}
            />
          ))}
        </section>
      )}

      {type === "skip wait and load" && (
        <section className="skip grid grid-cols-3 gap-8">
          {Isdelivery.map((el, id) => (
            <Cardskip
              key={id}
              item={el}
              isSelected={selectedSkip?.distance === el.distance}
              onClick={() => handleSelect(el)}
            />
          ))}
        </section>
      )}

      {type == "roll and roll off" && (
        <section className="skip grid grid-cols-3 gap-8">
          {Isdelivery.map((item, id) => (
            <Skipcard
              key={id}
              item={item}
              onClick={() => handleSelect(item)}
            />
          ))}
        </section>
      )}

      {type === "transit waste removal" && (
        <section className="skip grid grid-cols-3 gap-8 justify-center">
          {Isdelivery.map((item, id) => (
            <Cardskip
              key={id}
              item={item}
              isSelected={selectedSkip?.size === item.size}
              onClick={() => handleSelect(item)}
            />
          ))}
        </section>
      )}
      {type === "skip exchange" && (
        <section className="skip grid grid-cols-3 gap-8 justify-center">
          {Isdelivery.map((item, id) => (
            <Cardskip
              key={id}
              item={item}
              isSelected={selectedSkip?.size === item.size}
              onClick={() => handleSelect(item)}
            />
          ))}
        </section>
      )}
    </>
    </div>
 
  );
}
