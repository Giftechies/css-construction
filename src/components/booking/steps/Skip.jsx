"use client";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import Cardskip from "../card/Cardskip";
import { Skipcard } from "../card/Skipcard";

export default function Skip({ goToNextStep }) {
  const { watch, setValue } = useFormContext();
  const selectedSkip = watch("skipSize");
  const type = watch("jobType");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // 🚀 prevents hydration error

  const delivery = [
    { distance: 4, price: 250 },
    { distance: 8, price: 330 },
    { distance: 10, price: 380 },
    { distance: 12, price: 440 },
    { distance: 16, price: 540 },
  ];

  const roll = [
    { label: "20/40yd mixed", baseprice: 280, tones: 5, toneprice: 190 },
    { label: "20/40yd wood", baseprice: 280, tones: 5, toneprice: 190 },
    { label: "20/40yd P/B", baseprice: 280, tones: 5, toneprice: 190 },
    { label: "20yd hardcore", baseprice: 280, tones: 5, toneprice: 190 },
  ];

  const transit = [
    { label: "One Yard", price: 95 },
    { label: "1/4 Load", price: 130 },
    { label: "1/2 load", price: 200 },
    { label: "3/4 Yard", price: 260 },
    { label: "Full Yard", price: 330 },
  ];

  const handleSelect = (item) => {
    setValue("skipSize", item);
    if (goToNextStep) goToNextStep();
  };

  return (
    <>
      {type === "skip-delivery" && (
        <section className="skip grid grid-cols-3 gap-8">
          {delivery.map((el, id) => (
            <Cardskip
              key={id}
              item={el}
              isSelected={selectedSkip?.distance === el.distance}
              onClick={() => handleSelect(el)}
            />
          ))}
        </section>
      )}

      {type === "wait-and-load" && (
        <section className="skip grid grid-cols-3 gap-8">
          {delivery.map((el, id) => (
            <Cardskip
              key={id}
              item={el}
              isSelected={selectedSkip?.distance === el.distance}
              onClick={() => handleSelect(el)}
            />
          ))}
        </section>
      )}

      {type === "roll-on-roll-off" && (
        <section className="skip grid grid-cols-3 gap-8">
          {roll.map((item, id) => (
            <Skipcard
              key={id}
              item={item}
              onClick={() => handleSelect(item)}
            />
          ))}
        </section>
      )}

      {type === "waste-removal" && (
        <section className="skip grid grid-cols-3 gap-8 justify-center">
          {transit.map((item, id) => (
            <Cardskip
              key={id}
              item={item}
              isSelected={selectedSkip?.label === item.label}
              onClick={() => handleSelect(item)}
            />
          ))}
        </section>
      )}
      {type === "exchange" && (
        <section className="skip grid grid-cols-3 gap-8 justify-center">
          {transit.map((item, id) => (
            <Cardskip
              key={id}
              item={item}
              isSelected={selectedSkip?.label === item.label}
              onClick={() => handleSelect(item)}
            />
          ))}
        </section>
      )}
    </>
  );
}
