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
  const postcode = watch("postcodeArea");
  const [Isdelivery, setIsdelivery] = useState([]);

  const [mounted, setMounted] = useState(false);
  const [loading, setloading] = useState(false);

  
  useEffect(() => {
    setMounted(true);
 
    async function FetchRate() {
      try {
        setloading(true);
        const res = await fetch(
          `/api/frontend/form?postcode=${postcode}&jobType=${type}`,
          { method: "GET" },
        );
        const data = await res.json();
        console.log(data);

        const resposnse = data.data;
        console.log(type,"jobtype>>>");
        
        if (type.trim().toLowerCase() === "roll and roll off") {
          const dilveryoption = resposnse.map((item) => ({
            label: item.label,
            baseprice: item.baseprice,
            tones: item.tones,
            toneprice: item.toneprice,
          }));
          setIsdelivery(dilveryoption);
        } else {
          const dilveryoption = resposnse.map((item) => ({
            size: item.sizeId.size,
            rate: item.rate,
          }));
          setIsdelivery(dilveryoption);
          console.log(dilveryoption, "delivery>>>>>");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }
    FetchRate();
  }, []);
  if (!mounted) return null; // 🚀 prevents hydration error

  const handleSelect = (item) => {
    setValue("skipSize", item);
    if (goToNextStep) goToNextStep();
  };

  return (
    <div>
      {loading ? (
        <div className="skip grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map(() => {
            return (
              <div className="flex w-48 items-center justify-center p-4 ">
                <Skeleton className=" h-24 w-full " />
                <div className=" flex gap-8 ">
                  <Skeleton className=" h-24 w-24 " />
                  <Skeleton className=" h-24 w-24 " />
                </div>
                <Skeleton className=" h-24 w-24 " />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          {type === "skip delivery" && (
            <section className="skip grid gap-8 md:grid-cols-2 lg:grid-cols-3  ">
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
            <section className="skip grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            <section className="skip grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Isdelivery.map((item, id) => (
                <Skipcard
                  key={id}
                  item={item}
                  setValue={setValue}
                  onClick={(selected) => handleSelect(selected)}
                />
              ))}
            </section>
          )}

          {type === "transit waste removal" && (
            <section className="skip grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Isdelivery.map((item, id) => (
                <Cardskip
                  key={id}
                  item={item}
                  setValue={setValue}
                  isSelected={selectedSkip?.size === item.size}
                  onClick={() => handleSelect(item)}
                />
              ))}
            </section>
          )}
          {type === "skip exchange" && (
            <section className="skip grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      )}
    </div>
  );
}
