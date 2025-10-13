"use client";
import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Cardskip from "../card/Cardskip";
import { Skipcard } from "../card/Skipcard";

export default function Skip({ goToNextStep }) {
  const { watch, setValue } = useFormContext();
  const type = watch("jobType");
  const postcode = watch("postcodeArea");
  const selectedSkip = watch("skipSize");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!type || !postcode) return;

    async function fetchData() {
      const res = await fetch(
        `/api/frontend/form?postcode=${postcode}&jobType=${type}`,
        { cache: "no-store" }
      );
      const json = await res.json();
      const response = json.data || [];

      let formatted = [];
      if (type?.trim()?.toLowerCase() === "roll and roll off") {
        formatted = response.map((item) => ({
          label: item.label,
          baseprice: item.baseprice,
          tones: item.tones,
          toneprice: item.toneprice,
        }));
      } else {
        formatted = response.map((item) => ({
          size: item.sizeId?.size,
          rate: item.rate,
        }));
      }

      setData(formatted);
    }

    fetchData();
  }, [type, postcode]);

  if (!type || !postcode) return null;
  const handleform = (selected)=>{
    setValue("skipSize", selected);
     if(goToNextStep)goToNextStep() 
  }

  return (
    <section className="skip grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, id) =>
        type === "roll and roll off" ? (
          <Skipcard
            key={id}
            item={item}
            setValue={setValue}
            onClick= {handleform(selected)}
          />
        ) : (
          <Cardskip
            key={id}
            item={item}
            isSelected={selectedSkip?.size === item.size}
            onClick={() => {setValue("skipSize", item); if(goToNextStep)goToNextStep()}}
          />
        )
      )}
    </section>
  );
}
